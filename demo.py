from elasticsearch.helpers import scan
from fastapi import FastAPI, File, UploadFile
from Questgen import main
from utils.textprocessing import get_generated_mcq, get_sliced_texts
from utils.utils import GzipRoute, get_file_path, get_text_from_file
import time
from elasticsearch import Elasticsearch

app = FastAPI()
app.router.route_class = GzipRoute

es = Elasticsearch(["https://{}:{}".format("10.138.0.3", 9200)],
                   http_auth=("elastic", "IyuPrspNGoG6a5gHBa3C"), verify_certs=False)


@app.post("/predict", summary="Prepares questions for you", tags=["MCQ Generator"])
async def predict(file: UploadFile = File(...)):
    start = time.time()
    mcqs = []
    name = file.filename
    ext = name[name.rindex('.')+1:]
    contents = await file.read()
    loc_path = get_file_path(file.filename)
    with open(loc_path, 'wb') as f:
        f.write(contents)
    text = get_text_from_file(ext, loc_path)
    print(len(text))
    sliced_texts = get_sliced_texts(text)
    for txt in sliced_texts:
        mcq = get_generated_mcq(txt)
        if len(mcq) > 0:
            for q in mcq:
                mcqs.append(q)
    body = {
        "mcqs": mcqs
    }
    es.index(index="mcqs_trivia", body=body, id=name)
    end = time.time()

    print(end - start)
    return mcqs


@app.get("/get_mcqs", summary="returns questions", tags=["MCQ Generator"])
def retrieve_mcqs():
    es_response = es.get(
        index="mcqs_trivia",
        doc_type='_doc',
        body={
            "query": {
                "size": 1,
                "query": {
                    "function_score": {
                        "functions": [
                            {
                                "random_score": {
                                    "seed": "1477072619038"
                                }
                            }
                        ]
                    }
                }
            }
        }
    )
    print(type(es_response))
    return es_response