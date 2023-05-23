'use strict'
const redis = require('redis');
const client = redis.createClient();

const set = async (key, value) => {
    try {
       return await client.set(key, value);
    } catch (e) {
        console.log(`Error when set value redis ${e}`);
        throw e;
    }
};

const get = async (key, value) => {
    try {
        return await client.get(key, value);
    } catch (e) {
        console.log(`Error when get value redis ${e}`);
        throw e;
    }
};

const incrBy = async (key, value) => {
    try {
        return await client.incrBy(key, value);
    } catch (e) {
        console.log(`Error when incrBy value redis ${e}`);
        throw e;
    }
};

const decrBy = async (key, value) => {
    try {
        return await client.decrBy(key, value);
    } catch (e) {
        console.log(`Error when decryBy value redis ${e}`);
        throw e;
    }
};

const exists = async (key) => {
    try {
        return await client.exists(key);
    } catch (e) {
        console.log(e);
        throw e;
    }
};

const setNx = async (key, value) => {
    try {
        return await client.setNX(key, value);
    } catch (e) {
        console.log(`Error when setNx value redis ${e}`);
        throw e;
    }
};

module.exports = {set, get, incrBy, decrBy, setNx, exists, client };
