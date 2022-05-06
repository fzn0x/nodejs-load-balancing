# Load Balancing

## Summary

Load balancing (AFAIK) is a technique for handling incoming requests to multiple servers or cores, it is useful if you have concurrent requests to your application at once.

Load balancer itself is the implementation of the technique.

There's many options to implement Load Balancer:

1. Using PaaS or IaaS like App Engine from GCP (Google Cloud Platform) or AWS EC2
2. Using Express with Cluster Mode (using CPU cores)
3. Using Express and NGINX to implement multiple instances
4. Using [HAProxy](https://www.haproxy.org/)

TIL 5/6/2022 Using multiple CPU cores to balance your server load: [example](./multiple-cores.js)

```
request -------> server ----------> core 1
                   |    
                   |
                   |-------------> core 2
```

TIL 5/6/2022 Using NGINX to balance your server load: [example](./multiple-instances)

```
request -------> nginx ----------> server1
                   |    
                   |
                   |-------------> server2
```

## License

License follows [https://mit-license.org/](https://mit-license.org/). This repository using [MIT License](./LICENSE).