# k-anonymity and l-diversity "out of the box"

The application makes use of the [LoopBack](http://loopback.io) framework.

Developed as part of the [Privacy Engineering](https://www.ise.tu-berlin.de/menue/lehre/module/privacy_engineering/) course at the [Technische Universität Berlin](https://www.tu-berlin.de).
## Usage
### Prerequisites

- node (version >= 4)
- npm
- Python 2.7 (not Python 3.0)

### Connect database

The following databases are supported:

- MySQL
- PostgreSQL
- Microsoft SQL Server
- Oracle
- MongoDB

In order to connect a database you need to provide your credentials in the datasources.json file, see this [link](server/datasources.json).

### Define model

You now need to describe your database table, defining which attributes should be considered `quasi-identifiers` and which attribute should be considered to be `sensitive`.
An example can be found [here](server/models/citizen.json). 

## Deployment

### Install
```bash
npm install
```
### Start
```bash
npm start
```

### Troubleshooting

Make sure that your database instance is accepting traffic from the applications' IP address, e.g. for a MySQL instance port 3306 needs to be open.