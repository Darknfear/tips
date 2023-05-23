'use strict'
const redis = require('redis');
const client = redis.createClient();

const set = async (key, value) => new Promise((resolve, reject) => {
    client.set(key, value, (err, result) => {
        if (err) {
            reject(err);
        }
        resolve(result);
    });

});

const get = async (key, value) => new Promise((resolve, reject) => {
    client.get(key, value, (err, result) => {
        if (err) {
            reject(err);
        }
        resolve(result);
    });

});

const incrBy = async (key, value) => new Promise((resolve, reject) => {
    client.incrBy(key, value, (err, result) => {
        if (err) {
            reject(err);
        }
        resolve(result);
    });

});

const decryBy = async (key, value) => new Promise((resolve, reject) => {
    client.decrBy(key, value, (err, result) => {
        if (err) {
            reject(err);
        }
        resolve(result);
    });

});

const exists = async (key) => new Promise((resolve, reject) => {
    client.exists(key, (err, result) => {
        if (err) {
            reject(err);
        }
        resolve(result);
    });
});

const setNx = async (key, value) => new Promise((resolve, reject) => {
    client.setNX(key, value, (err, result) => {
        if (err) {
            reject(err);
        }
        resolve(result);
    })
});

module.exports = {set, get, incrBy, decryBy, setNx, exists};
