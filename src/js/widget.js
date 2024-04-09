import { valid_credit_card } from './luhnValidator';


export class PassCardWidget {
  constructor(parentEl) {
    this.parentEl = parentEl;

    this.onSubmit = this.onSubmit.bind(this);
  }

  static get markup() {
    return `
        <form class="innogrn-form-widget">
            <ul class="cards list-unstyled">
                <li><span class="card visa cdisabled" title="Visa">Visa</span></li>
                <li><span class="card master cdisabled" title="Mastercard">Mastercard</span></li>
            </ul>
            <input type="text" id="innogrn-input" class="input">
            <button class="submit">Проверить</button>
        </form>
        `;
  }

  static get submitSelector() {
    return '.submit';
  }

  static get disableCard() {
    return '.cdisabled';
  }

  static get inputSelector() {
    return '.input';
  }

  static get selector() {
    return '.innogrn-form-widget';
  }

  static get visaCard() {
    return '.visa';
  }

  static get masterCard() {
    return '.master';
  }

  static get cardsAll() {
    return '.card';
  }

  bindToDOM() {
    this.parentEl.innerHTML = PassCardWidget.markup;

    this.element = this.parentEl.querySelector(PassCardWidget.selector);
    this.submit = this.element.querySelector(PassCardWidget.submitSelector);
    this.input = this.element.querySelector(PassCardWidget.inputSelector);

    this.visa = this.element.querySelector(PassCardWidget.visaCard);
    this.master = this.element.querySelector(PassCardWidget.masterCard);
    this.cards = this.element.querySelector(PassCardWidget.cardsAll);


    this.element.addEventListener('submit', this.onSubmit);
  }

  onSubmit(e) {
    e.preventDefault();
    const { value } = this.input;
    this.input.classList.remove('wrong');

    document.querySelectorAll('.card').forEach((element) => {
      element.classList.add('cdisabled');
    });
    if (valid_credit_card(value)) {
      switch (value[0]) {
        case '4':
          this.visa.classList.remove('cdisabled');
          break;
        case '5':
          this.master.classList.remove('cdisabled');
          break;
        default:
          break;
      }
    } else {
      console.log('wrong numbers');
      this.input.classList.add('wrong');
    }
  }
}
