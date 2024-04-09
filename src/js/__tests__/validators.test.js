import {valid_credit_card} from '../luhnValidator';

test('should be false', () => {
    const result = valid_credit_card('123');

    expect(result).toBe(false);
});




test('should be true', () => {
    const result = valid_credit_card('5482845241578578');

    expect(result).toBe(true);
});