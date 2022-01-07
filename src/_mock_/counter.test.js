/**
* @jest-environment jsdom
*/

import { itemsAPIResponse, commentsAPIResponse } from './counter.js'

describe('Counters', () => {
    test('Item counter', () => {
        const showCounter = document.createElement('li');
        showCounter.innerHTML = `Movies (${itemsAPIResponse.length})`;
        expect(showCounter.innerHTML).toBe('Movies (3)')
    });

    test('Comments counter', () => {
        const commentTitle = document.createElement('h3');
        commentTitle.innerText = `Comments (${commentsAPIResponse.length})`;
        expect(commentTitle.innerText).toBe('Comments (3)')
    })
})