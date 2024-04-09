import { PassCardWidget } from "../widget"

test('widget should render', () => {
    document.body.innerHTML = '<div class="container"></div>';

    const container = document.querySelector('.container');
    const widget = new PassCardWidget(container);

    widget.bindToDOM();

    expect(container.innerHTML).toEqual(PassCardWidget.markup);
})

test('widget should remove cdisabled class', () => {
    document.body.innerHTML = '<div class="container"></div>';

    const container = document.querySelector('.container');
    const widget = new PassCardWidget(container);

    widget.bindToDOM();

    widget.input.value = '5482845241578578';
    widget.submit.click();

    expect(widget.input.classList.contains('cdisabled')).toEqual(false);
})