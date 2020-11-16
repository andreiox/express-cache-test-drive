# express-cache-test-drive

Implementing cache with redis in both GET and POST requests on express.

## example

Cache the response based on the endpoint and body.

1. POST /health-check-mail-provider - { "api": "gmail" } - not cached
2. POST /health-check-mail-provider - { "api": "hotmail" } - not cached
3. POST /health-check-mail-provider - { "api": "gmail" } - cached

## requirements

-   [x] use redis
-   [x] cache get requests
-   [x] cache post requests
-   [x] create middleware
-   [x] docker-compose
-   [ ] elasticache for redis integration
-   [ ] create elasticache instance with aws-cdk

## docker-compose support

make runs docker-compose commands under the hood

```shell
make up
make down
```

See Makefile for aditional commands.
