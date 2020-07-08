# Wariant pierwszy - komponent Vue

Z powodu mechanizmu CORS, który generuje błędy podczas wysłania zapytania bezprośrednio pod adres rss i zachowuje się różnie w przypadku różnych przeglądarek, stworzyłem aplikację backendową (https://arkadiuszpasek-rss-proxy.herokuapp.com/rss, to darmowy hosting - pierwsze załadowanie może trwać chwilę dłużej), na adres której aplikacja wysyła zapytanie, ona wykonuje zapytanie o treści rss i zwraca je do aplikacji. Takie wykonanie może być inne w rzeczywistym wdrożeniu (być może dużo prostsze - np. z wykorzystaniem serwera, który dostarcza całość aplikacji), natomiast wydaje mi się, że daje największą stabilność i wsparcie przeglądarek.

Funkcja szukania działa w sposób pozwalający dopasować wpis, który zawiera wpisaną frazę w dowolnej części tytułu i jest 'case insensitive' (np. 'batman' dopasuje 'The Batman...')

Korzystając z tego, że zamieszczam rozwiązanie na Githubie, zamieściłem sandbox aplikacji jako stronę statyczną githuba w celu wygodnego podglądu komponentu
(https://arkadiuszpasek.github.io/recruitment-frontend/#/FeedPreview)
