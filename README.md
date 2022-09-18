Du skall i denna uppgift bygga en real-time chatapplikation med NodeJS. Uppgiften täcker punkt 3 i kursplanen. Möjliga betyg är IG och G.
 
Projektet skall fungera genom konsolen och består av två program, en klient och en server. Klienten pratar med servern och servern pratar med alla klienter. När man startar klientapplikationen skall man få valet att välja adress som man ansluter till och användarnamn. Klienten ansluter sedan till den valda servern och kan börja chatta med andra användare som är anslutna. Servern skapar du själv och skall kunna hantera flera klienter samtidigt. Den behöver även kunna logga händelser (eg. chatmeddelanden, anslutningar & felmeddelanden) i konsolen.
 
Använd ’net’ modulen i NodeJS för att bygga klienten och servern med hjälp av TCP protokollet. 

<h2>Instruktioner för användning</h2>

Starta serversidan med node innan du startar klientsidorna om du vill testa själv. Öppna två klientsidor och välj samma rum för att testa den gemensamma chatten. Är du i olika rum med två olika användare så kommer inget komma upp på klientsidan då de inte är i samma chattrum, men alla händelser loggas hur som helst på serversidan. När du väl är i samma rum så är det bara att chatta på. =)


<img width="801" alt="chattappen" src="https://user-images.githubusercontent.com/71407043/190915936-b75d073b-5760-4425-9c30-06986f384ab3.png">
