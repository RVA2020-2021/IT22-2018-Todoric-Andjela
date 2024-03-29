--LIGA podaci

INSERT INTO "liga"("id", "naziv", "oznaka")
		VALUES (nextval('liga_seq'),'UEFA Liga Sampiona', '001uefa');
INSERT INTO "liga"("id", "naziv", "oznaka")
		VALUES (nextval('liga_seq'),'Premijer Liga', '002prl');
INSERT INTO "liga"("id", "naziv", "oznaka")
		VALUES (nextval('liga_seq'),'NBA Liga', '003nba');
INSERT INTO "liga"("id", "naziv", "oznaka")
		VALUES (nextval('liga_seq'),'ABA Liga', '004aba');
INSERT INTO "liga"("id", "naziv", "oznaka")
		VALUES (nextval('liga_seq'),'Bundes Liga', '005bsl');
INSERT INTO "liga"("id", "naziv", "oznaka")
		VALUES (nextval('liga_seq'),'Evroliga', '006euro');
		
--TIM podaci

INSERT INTO "tim"("id", "naziv", "osnovan", "sediste", "liga")
		VALUES (nextval('tim_seq'), 'Barcelona', to_date('29.11.1899.', 'dd.mm.yyyy.'), 'Barselona, Spanija', 1);
INSERT INTO "tim"("id", "naziv", "osnovan", "sediste", "liga")
		VALUES (nextval('tim_seq'), 'Juventus', to_date('01.11.1897.', 'dd.mm.yyyy.'), 'Torino, Italija', 1);
INSERT INTO "tim"("id", "naziv", "osnovan", "sediste", "liga")
		VALUES (nextval('tim_seq'), 'Liverpool', to_date('15.03.1892.', 'dd.mm.yyyy.'), 'Liverpul, Velika Britanija', 1);
INSERT INTO "tim"("id", "naziv", "osnovan", "sediste", "liga")
		VALUES (nextval('tim_seq'), 'Arsenal', to_date('05.10.1886.', 'dd.mm.yyyy.'), 'London, Velika Britanija', 2);
INSERT INTO "tim"("id", "naziv", "osnovan", "sediste", "liga")
		VALUES (nextval('tim_seq'), 'Tottenham Hotspur', to_date('05.09.1882.', 'dd.mm.yyyy.'), 'London, Velika Britanija', 2);
INSERT INTO "tim"("id", "naziv", "osnovan", "sediste", "liga")
		VALUES (nextval('tim_seq'), 'Bayern', to_date('27.02.1900.', 'dd.mm.yyyy.'), 'Minhen, Nemacka', 5);
INSERT INTO "tim"("id", "naziv", "osnovan", "sediste", "liga")
		VALUES (nextval('tim_seq'), 'Borrusia Dortmund', to_date('19.12.1909.', 'dd.mm.yyyy.'), 'Dortmund, Nemacka', 5);
INSERT INTO "tim"("id", "naziv", "osnovan", "sediste", "liga")
		VALUES (nextval('tim_seq'), 'Los Angeles Lakers', to_date('03.08.1947.', 'dd.mm.yyyy.'), 'Los Andjeles, Kalifornija', 3);
INSERT INTO "tim"("id", "naziv", "osnovan", "sediste", "liga")
		VALUES (nextval('tim_seq'), 'Sacramento Kings', to_date('01.04.1945.', 'dd.mm.yyyy.'), 'Sakramento, Kalifornija', 3);
INSERT INTO "tim"("id", "naziv", "osnovan", "sediste", "liga")
		VALUES (nextval('tim_seq'), 'Crvena Zvezda', to_date('04.03.1945.', 'dd.mm.yyyy.'), 'Beograd, Srbija', 4);
INSERT INTO "tim"("id", "naziv", "osnovan", "sediste", "liga")
		VALUES (nextval('tim_seq'), 'Partizan', to_date('04.10.1945.', 'dd.mm.yyyy.'), 'Beograd, Srbija', 4);
INSERT INTO "tim"("id", "naziv", "osnovan", "sediste", "liga")
		VALUES (nextval('tim_seq'), 'Olimpia Milano', to_date('18.11.1936.', 'dd.mm.yyyy.'), 'Milano, Italija', 6);
INSERT INTO "tim"("id", "naziv", "osnovan", "sediste", "liga")
		VALUES (nextval('tim_seq'), 'Olympiacos B.C', to_date('07.05.1931.', 'dd.mm.yyyy.'), 'Atina, Grcka', 6);
		
--NACIONALNOST podaci

INSERT INTO "nacionalnost"("id", "naziv", "skracenica")
		VALUES (nextval('nacionalnost_seq'), 'argentinska', 'arg');
INSERT INTO "nacionalnost"("id", "naziv", "skracenica")
		VALUES (nextval('nacionalnost_seq'), 'portugalska', 'prt');
INSERT INTO "nacionalnost"("id", "naziv", "skracenica")
		VALUES (nextval('nacionalnost_seq'), 'brazilska', 'bra');
INSERT INTO "nacionalnost"("id", "naziv", "skracenica")
		VALUES (nextval('nacionalnost_seq'), 'engleska', 'uk');
INSERT INTO "nacionalnost"("id", "naziv", "skracenica")
		VALUES (nextval('nacionalnost_seq'), 'nemacka', 'deu');
INSERT INTO "nacionalnost"("id", "naziv", "skracenica")
		VALUES (nextval('nacionalnost_seq'), 'americka', 'usa');
INSERT INTO "nacionalnost"("id", "naziv", "skracenica")
		VALUES (nextval('nacionalnost_seq'), 'srpska', 'srb');
INSERT INTO "nacionalnost"("id", "naziv", "skracenica")
		VALUES (nextval('nacionalnost_seq'), 'italijanska', 'ita');
INSERT INTO "nacionalnost"("id", "naziv", "skracenica")
		VALUES (nextval('nacionalnost_seq'), 'grcka', 'grc');
INSERT INTO "nacionalnost"("id", "naziv", "skracenica")
		VALUES (nextval('nacionalnost_seq'), 'francuska', 'fra');

--IGRAC podaci

INSERT INTO "igrac"("id", "ime", "prezime", "broj_reg", "datum_rodjenja", "nacionalnost", "tim")
		VALUES (nextval('igrac_seq'), 'Lionel', 'Messi', '10010', to_date('24.06.1987.', 'dd.mm.yyyy.'), 1, 1);
INSERT INTO "igrac"("id", "ime", "prezime", "broj_reg", "datum_rodjenja", "nacionalnost", "tim")
		VALUES (nextval('igrac_seq'), 'Cristiano', 'Ronaldo', '20007', to_date('05.02.1985.', 'dd.mm.yyyy.'), 2, 2);
INSERT INTO "igrac"("id", "ime", "prezime", "broj_reg", "datum_rodjenja", "nacionalnost", "tim")
		VALUES (nextval('igrac_seq'), 'Alisson', 'Becker', '30001', to_date('02.10.1992.', 'dd.mm.yyyy.'), 3, 3);
INSERT INTO "igrac"("id", "ime", "prezime", "broj_reg", "datum_rodjenja", "nacionalnost", "tim")
		VALUES (nextval('igrac_seq'), 'Gabriel', 'Martinelli', '40035', to_date('18.06.2001.', 'dd.mm.yyyy.'), 3, 4);
INSERT INTO "igrac"("id", "ime", "prezime", "broj_reg", "datum_rodjenja", "nacionalnost", "tim")
		VALUES (nextval('igrac_seq'), 'Harry', 'Kane', '50010', to_date('28.07.1993.', 'dd.mm.yyyy.'), 4, 5);
INSERT INTO "igrac"("id", "ime", "prezime", "broj_reg", "datum_rodjenja", "nacionalnost", "tim")
		VALUES (nextval('igrac_seq'), 'Thomas', 'Muller', '60025', to_date('13.09.1989.', 'dd.mm.yyyy.'), 5, 6);
INSERT INTO "igrac"("id", "ime", "prezime", "broj_reg", "datum_rodjenja", "nacionalnost", "tim")
		VALUES (nextval('igrac_seq'), 'Marco', 'Reus', '70011', to_date('31.05.1989.', 'dd.mm.yyyy.'), 5, 7);
INSERT INTO "igrac"("id", "ime", "prezime", "broj_reg", "datum_rodjenja", "nacionalnost", "tim")
		VALUES (nextval('igrac_seq'), 'LeBron', 'James', '80023', to_date('30.12.1984.', 'dd.mm.yyyy.'), 6, 8);
INSERT INTO "igrac"("id", "ime", "prezime", "broj_reg", "datum_rodjenja", "nacionalnost", "tim")
		VALUES (nextval('igrac_seq'), 'Nemanja', 'Bjelica', '90008', to_date('09.05.1988.', 'dd.mm.yyyy.'), 7, 9);
INSERT INTO "igrac"("id", "ime", "prezime", "broj_reg", "datum_rodjenja", "nacionalnost", "tim")
		VALUES (nextval('igrac_seq'), 'Branko', 'Lazic', '100010', to_date('12.01.1989.', 'dd.mm.yyyy.'), 7, 10);
INSERT INTO "igrac"("id", "ime", "prezime", "broj_reg", "datum_rodjenja", "nacionalnost", "tim")
		VALUES (nextval('igrac_seq'), 'Nemanja', 'Dangubic', '110006', to_date('13.04.1993.', 'dd.mm.yyyy.'), 7, 11);
INSERT INTO "igrac"("id", "ime", "prezime", "broj_reg", "datum_rodjenja", "nacionalnost", "tim")
		VALUES (nextval('igrac_seq'), 'Luigi', 'Datome', '120070', to_date('27.11.1987.', 'dd.mm.yyyy.'), 8, 12);
INSERT INTO "igrac"("id", "ime", "prezime", "broj_reg", "datum_rodjenja", "nacionalnost", "tim")
		VALUES (nextval('igrac_seq'), 'Costas', 'Slukas', '130016', to_date('15.01.1990.', 'dd.mm.yyyy.'), 9, 13);
INSERT INTO "igrac"("id", "ime", "prezime", "broj_reg", "datum_rodjenja", "nacionalnost", "tim")
		VALUES (nextval('igrac_seq'), 'Nemanja', 'Nedovic', '120016', to_date('16.06.1991.', 'dd.mm.yyyy.'), 7, 12);
INSERT INTO "igrac"("id", "ime", "prezime", "broj_reg", "datum_rodjenja", "nacionalnost", "tim")
		VALUES (nextval('igrac_seq'), 'Bogdan', 'Bogdanovic', '90007', to_date('18.08.1992.', 'dd.mm.yyyy.'), 7, 9);
INSERT INTO "igrac"("id", "ime", "prezime", "broj_reg", "datum_rodjenja", "nacionalnost", "tim")
		VALUES (nextval('igrac_seq'), 'Antoine', 'Griezmann', '10007', to_date('21.03.1991.', 'dd.mm.yyyy.'), 10, 1);
INSERT INTO "igrac"("id", "ime", "prezime", "broj_reg", "datum_rodjenja", "nacionalnost", "tim")
		VALUES (nextval('igrac_seq'), 'Federico', 'Chiesa', '20022', to_date('25.10.1997.', 'dd.mm.yyyy.'), 8, 2);


--TEST podaci
INSERT INTO "liga"("id", "naziv", "oznaka")
		VALUES (-100,'TestLiga', 'TestOznaka');

INSERT INTO "tim"("id", "naziv", "osnovan", "sediste", "liga")
		VALUES (-100, 'TestNaziv', to_date('01.01.2020.', 'dd.mm.yyyy.'), 'TestSediste', 1);		

INSERT INTO "nacionalnost"("id", "naziv", "skracenica")
		VALUES (-100, 'TestNaziv', 'TestSkracenica');
		
INSERT INTO "igrac"("id", "ime", "prezime", "broj_reg", "datum_rodjenja", "nacionalnost", "tim")
		VALUES (-100, 'TestIme', 'TestPrezime', 'TestBrojReg', to_date('01.01.2020.', 'dd.mm.yyyy.'), 1, 1);
