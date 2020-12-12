import http from 'k6/http';
import { check } from 'k6';

export let options = {
  stages: [
    { duration: '30s', target: 10 },
    { duration: '30s', target: 20 },
    { duration: '30s', target: 40 },
    { duration: '30s', target: 80 },
    { duration: '30s', target: 160 },
    { duration: '30s', target: 0 }
  ]
};

export default function () {
  let id = Math.floor((Math.random() * 10000000) + 1);
  let url = `http://localhost:3003/api/listings/${id}/reviews`;

  let res = http.get(url);

  check(res, {
    'took less than 2s to complete': (r) => r.timings.duration < 2000,
    'no errors': (r) => !r.error,
    'is status 200': (r) => r.status === 200
  });
};