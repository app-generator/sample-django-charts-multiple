# [Django Charts](https://blog.appseed.us/django-sample-amcharts-googlecharts-apexcharts/) `amCharts`, `G.Charts`, `Apex`

Sample project crafted with `Django`, `DRF` and multiple Charts Libraries to showcase how to plot different charts **Pie, Line, and Bar Charts**, using `Bootstrap5` for styling.

- 👉 [Multiple Charts via Django & DRF](https://blog.appseed.us/django-sample-amcharts-googlecharts-apexcharts/) - Blog Article

<br />

---

> For a **complete set of features** and long-term support, check out **[Dynamic Django](https://app-generator.dev/docs/developer-tools/dynamic-django/index.html)**, a powerful starter that incorporates:

- ✅ [Dynamic DataTables](https://app-generator.dev/docs/developer-tools/dynamic-django/datatables.html): using a single line of configuration, the data saved in any table is automatically managed
- ✅ [Dynamic API](https://app-generator.dev/docs/developer-tools/dynamic-django/api.html): any model can become a secure API Endpoint using DRF
- ✅ [Dynamic Charts](https://app-generator.dev/docs/developer-tools/dynamic-django/charts.html): extract relevant charts without coding all major types are supported
- ✅ [CSV Loader](https://app-generator.dev/docs/developer-tools/dynamic-django/csv-loader.html): translate CSV files into Django Models and (optional) load the information
- ✅ Powerful [CLI Tools](https://app-generator.dev/docs/developer-tools/dynamic-django/cli.html) for the GIT interface, configuration editing, updating the configuration and database (create models, migrate DB)

<br />

## ✨ How to use it

> 👉 **Clone Sources** (this repo)

```bash
$ git clone https://github.com/app-generator/sample-django-charts-multiple.git
$ cd sample-django-charts-multiple
```

<br />

> 👉 **Install Modules** using a Virtual Environment

```bash
$ virtualenv env
$ source env/bin/activate
$ pip3 install -r requirements.txt
```

Or for **Windows-based Systems**

```bash
$ virtualenv env
$ .\env\Scripts\activate
$
$ # Install modules - SQLite Database
$ pip3 install -r requirements.txt
```

<br />

> 👉 **Migrate Database**

```bash
$ python manage.py migrate
$ python manage.py runserver
```

<br />

> 👉 **Create Superuser**

```bash
$ python manage.py createsuperuser
```

<br />

> 👉 **Start the APP**

```bash
$ python manage.py runserver
```

<br />

> The bootstrap flow

- Access the `admin` section 
  - Load `data/users.csv` in users table (using import/export feature)
  - Load `data/products.csv` in users table (using import/export feature)
- Access the HOMEpage 
  - Charts should be displayed with data

<br />

![Django Charts via DRF and Charts.js - provided by AppSeed.](https://user-images.githubusercontent.com/51070104/167153345-6da2c703-ab74-430f-8c40-84c55b5e5b80.jpg)

<br />

---
Django Charts `amCharts`, `G.Charts`, `Apex` - provided by [AppSeed](https://appseed.us)
