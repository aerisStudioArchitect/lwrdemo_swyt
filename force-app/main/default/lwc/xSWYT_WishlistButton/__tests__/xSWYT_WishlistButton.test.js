import { createElement } from 'lwc';
import XSWYT_RecordImage from 'c/xSWYT_RecordImage';

describe('c-x-s-w-y-t-record-image', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('TODO: test case generated by CLI command, please fill in test logic', () => {
        // Arrange
        const element = createElement('c-x-s-w-y-t-record-image', {
            is: XSWYT_RecordImage
        });

        // Act
        document.body.appendChild(element);

        // Assert
        // const div = element.shadowRoot.querySelector('div');
        expect(1).toBe(1);
    });
});