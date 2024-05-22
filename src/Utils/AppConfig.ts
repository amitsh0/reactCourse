class AppConfig {
	public readonly productsUrl = "http://localhost:3030/api/products/";
    public readonly employeesUrl = "http://localhost:3030/api/employees/";
    public readonly registerUrl = "http://localhost:3030/api/register/";
    public readonly loginUrl = "http://localhost:3030/api/login/";

    public readonly chatGptKey = ""; //when upload to github delete it!!!
    public readonly chatGptUrl = "https://api.openai.com/v1/chat/completions";
}

export const appConfig = new AppConfig();
