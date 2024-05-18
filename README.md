<!-- Create virtual environment -->


$ python -m venv venv
$  .\venv\Scripts\activate
$ (venv) pip install Flask torch torchvision nltk


``Install nltk package``

$ (venv) python
>>> import nltk
>>> nltk.download('punkt')   


To run the application, execute the following command:

$ (venv) python train.py
```

To run the application in the terminal, execute the following command:

$ (venv) python chat.py

To run the application in the browser, execute the following command:

$ (venv) python app.py
