import http from 'k6/http';
import { sleep } from 'k6';
export default function () {
  http.get('http://localhost:3003/api/listings/1/reviews');
  sleep(1);
}

export let options = {
  stages: [
    { duration: '1m', target: 100 },
    { duration: '1m', target: 200 },
    { duration: '1m', target: 300 }, 
    { duration: '1m', target: 400 },
    { duration: '1m', target: 500 }, 
    { duration: '1m', target: 600 },
    { duration: '1m', target: 700 },
    { duration: '1m', target: 800 },
    { duration: '1m', target: 900 },
    { duration: '5m', target: 1000 },
    { duration: '5m', target: 0 }
  ]
};