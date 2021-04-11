'use strict';

module.exports = (Franz) => {
    const getMessages = function getMessages() {
        const mergeRequestsElement = document.querySelector('span.merge-requests-count');
        const todosElement = document.querySelector('span.todos-count');

        const mergeRequestsCount = mergeRequestsElement ? parseInt(mergeRequestsElement.innerHTML, 10) : 0;
        const todosCount = todosElement ? parseInt(todosElement.innerHTML, 10) : 0;

        Franz.setBadge(mergeRequestsCount, todosCount);
    }

    Franz.loop(getMessages);
}
