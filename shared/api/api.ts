interface Headers {
	method: string;
	headers: {
		'content-type': string;
	};
	body?: string;
}

export class Api {
   public static createHeaders(method: string = 'get', body: any = null) {
      const headers: Headers = {
         method,
         headers: { 'content-type': 'application/json' },
      };

      if (body) headers.body = JSON.stringify(body);
      return headers;
   }

   public static handleError(error: any) {
      return {
         error: true,
         errorInfo: error,
      };
   }
}
