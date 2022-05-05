# sample-django-charts-multiple

## Requirements

- Django==4.0.4
- djangorestframework==3.13.1
- django-import-export==2.8.0

## How to use the code

### Clone the sources

```bash
git clone https://github.com/app-generator/sample-django-charts-multiple.git
cd sample-django-charts-multiple
```

### Create a virtual environment

```bash
virtualenv -p python3 venv
source venv/bin/activate
```

**Install dependencies** using pip

```bash
pip install -r requirements.txt
```

### Start the API server

```bash
python manage.py migrate
python manage.py runserver
```

You can access the home page at <http://localhost:8000>. However the charts won't be displayed if you haven't load data.

Create a superuser using the following command:

```shell
python manage.py createsuperuser
```

Once it's done, login at this URL <http://localhost:8000/admin> and load the data from the data directory in the project.