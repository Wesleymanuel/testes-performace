import http from 'k6/http';
import { sleep } from 'k6';
import { check } from 'k6';

export const options = {
    stages : [
     { duration : '30s' , target : 50 },
     { duration : '1m' , target : 100 },
     { duration : '1m' , target : 200 },
     { duration : '30s' , target : 0 },
    ],
    thresholds : {
    'http_req_failed': ['rate<0.01'],
    'http_req_duration': ['p(95)<1000'],
    }
}

export default function main(){
    const res = http.get('https://calculadora-media-enem.vercel.app/')
    check(res, {'status 200': res => res.status === 200 })
    sleep(1)
}