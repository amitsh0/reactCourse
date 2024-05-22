class MonetaryService {
	public getVat(price: number, percent: number){ //VAT = value added tax = מע"מ
        return price * percent / 100;
    }
}

export const monetaryService = new MonetaryService();
