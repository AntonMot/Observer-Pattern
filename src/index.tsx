import React from 'react';
import reportWebVitals from './reportWebVitals';

interface PublisherInterface {
    subscribe(subscriber: Subscriber): void
    unsubscribe(subscriber: Subscriber): void
    notifyObservers(): void
}

interface SubscriberInterface {
    notified(): void
}

class Publisher implements PublisherInterface {
    private subscribers: Subscriber[] = [];

    subscribe(subscriber: Subscriber) {
        this.subscribers.push(subscriber)
    }

    unsubscribe(subscriber: Subscriber) {
        this.subscribers = this.subscribers.filter((el)=>{
            return subscriber.name != el.name
        })
    }

    notifyObservers() {
        this.subscribers.forEach(subscriber => {
            subscriber.notified();
        })
    }
}

class Subscriber implements SubscriberInterface {
    constructor(
        public name: string
    ) {}

    notified() {
        console.log( `${this.name} is notified` )
    }
}

const anton = new Subscriber('Anton');
const alex = new Subscriber('Alex');

const someMedia = new Publisher();

someMedia.subscribe(anton);
someMedia.subscribe(alex);

// someMedia.notifyObservers();

// someMedia.unsubscribe(alex);

someMedia.notifyObservers();







reportWebVitals();
