# Energuide

This is the API for NRCAN's Energuide data.

## Inserting data

There is a python script that does the inserts into the database.
The script assumes the ENV vars `ARANGODB_USERNAME` and `ARANGODB_PASSWORD` exist, and there is an instance of ArangoDB listening on port 8529. That instance is assumed to have a database called `nrcan` and a document collection called `buildings` already created.

```sh
> ./insert data/ers.csv
```


