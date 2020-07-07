# Wariant pierwszy - komponent Vue

Z powodu mechanizmu CORS, który generuje błędy podczas wysłania zapytania bezprośrednio pod adres rss, stworzyłem aplikację backendową (https://arkadiuszpasek-rss-proxy.herokuapp.com/rss), na adres której aplikacja wysyła zapytanie, ona wykonuje zapytanie o treści rss i zwraca je do aplikacji. Takie rozwiązanie może być inne w rzeczywistym wdrożeniu, natomiast wydaje mi się, że dla tej aplikacji daje największą stabilność i wsparcie przeglądarek.

Funkcja szukania działa w sposób pozwalający dopasować wpis, który zawiera wpisaną frazę w dowolnej części tytułu i jest 'case insensitive' (np. 'batman' dopasuje 'The Batman...')