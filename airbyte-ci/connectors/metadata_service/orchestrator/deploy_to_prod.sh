# Generate a temporary setup.py file from our pyproject.toml
poetry2setup >> setup.py

# Deploy the orchestrator to the dagster-cloud serverless platform
dagster-cloud serverless deploy-python-executable \
--location-name metadata_service_orchestrator \
--location-file dagster_cloud.yaml \
--organization airbyte-connectors \
--deployment prod \
--api-token $DAGSTER_CLOUD_API_TOKEN \
--python-version 3.9

# Remove the temporary setup.py file
rm setup.py