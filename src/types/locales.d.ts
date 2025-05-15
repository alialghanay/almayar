declare module 'local' {
    type lang = 'en' | 'ar';
    type PageKeys = 'HomePage' | 'CertificatesPage' | 'ServicesPage' | 'ContactUsPage';
    
    type Messages = {
        [P in PageKeys]: {
          [K in string]: string;
        };
      };

}