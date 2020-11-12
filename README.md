# express-cache-test-drive

Implementing cache with redis in both GET and POST requests on express.

## example

Cache the response based on the endpoint and body.

1. POST /health-check-mail-provider - { "api": "gmail" } - not cached
2. POST /health-check-mail-provider - { "api": "hotmail" } - not cached
3. POST /health-check-mail-provider - { "api": "gmail" } - cached

## requirements

-   [ ] use redis
-   [ ] cache get requests
-   [ ] cache post requests
-   [ ] create middleware
-   [ ] docker-compose
-   [ ] elasticache for redis integration
-   [ ] create elasticache instance with aws-cdk
