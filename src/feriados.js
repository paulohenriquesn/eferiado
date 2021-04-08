const feriados = [
    {
        nome: "Pascoa",
        move: 0
    },
    {
        nome: "Corpus Christi",
        move: 60
    },
    {
        nome: "Carnaval",
        move: -47
    },
    {
        nome: "Sexta Santa",
        move: -2
    },
    {
        nome: "Ano Novo",
        data: "01/01"
    },
    {
        nome: "Dia internacional da Mulher",
        data: "08/03"
    },
    {
        nome: "Tiradentes",
        data: "21/04"
    },
    {
        nome: "Dia do Trabalho",
        data: "01/05"
    },
    {
        nome: "Dia dos namorados",
        data: "12/06"
    },
    {
        nome: "Dia da Indepedência do Brasil",
        data: "07/09"
    },
    {
        nome: "Dia das Crianças",
        data: "12/10"
    },
    {
        nome: "Nossa Senhora aparecida",
        data: "12/10"
    },
    {
        nome: "Dia do professor",
        data: "15/10"
    },
    {
        nome: "Finados",
        data: "02/11"
    },
    {
        nome: "Proclamação da República",
        data: "15/11"
    },
    {
        nome: "Natal",
        data: "25/12"
    }
]

const feriadosRegionais = [
    {
        "estado": "SP",
        "data": "09/07",
        "nome": "Revolução Constitucionalista de 1932, também conhecida como Revolução de 1932 ou Guerra Paulista, foi o movimento armado ocorrido nos estados de São Paulo, Mato Grosso do Sul e Rio Grande do Sul, entre julho e outubro de 1932, que tinha por objetivo derrubar o governo provisório de Getúlio Vargas e convocar uma Assembleia Nacional Constituinte."
    },
    {
        "estado": "SE",
        "data": "08/07",
        "nome": "Dia da Emancipação do Estado de Sergipe"
    },
    {
        "estado": "RR",
        "data": "05/10",
        "nome": "Feriado no estado de Roraima — aniversário da elevação a estado."
    },
    {
        "estado": "RS",
        "data": "20/09",
        "nome": "Em 1835 foi desencadeada a Revolução Farroupilha, que manifestava o descontentamento da Província de São Pedro do Rio Grande, a mais meridional do Império, com o governo regencial do Império do Brasil."
    },
    {
        "estado": "RN",
        "data": "03/10",
        "nome": "Feriado dos Mártires de Cunhaú e Uruaçu, Rio Grande do Norte"
    },
    {
        "estado": "PI",
        "data": "19/10",
        "nome": "Dia do Piauí que é Piauí é uma das 27 unidades federativas do Brasil. Localiza/se no noroeste da Região Nordeste."
    },
    {
        "estado": "PR",
        "data": "19/12",
        "nome": "A emancipação política do Paraná foi um acontecimento pelo qual o Paraná desmembrou/se da Província de São Paulo, transformando/se na mais nova província do Brasil Império, em 19 de dezembro de 1853. Foi marcante para a história do Paraná a sua emancipação política, que ocorreu em 1853, quando se desmembrou da Província de São Paulo."
    },
    {
        "estado": "PA",
        "data": "15/08",
        "nome": "Adesão do Pará à independência do Brasil (data magna) / Lei estadual nº 5.999/1996"
    },
    {
        "estado": "MG",
        "data": "21/04",
        "nome": "Data magna do estado / Art. 256 da constituição estadual[43]; coincide com o feriado nacional de Tiradentes"
    },
    {
        "estado": "MS",
        "data": "11/10",
        "nome": "Criação do estado / Lei estadual nº 10/1979"
    },
    {
        "estado": "MT",
        "data": "20/11",
        "nome": "Dia da Consciência Negra / Lei estadual nº 7.879/2002"
    },
    {
        "estado": "MA",
        "data": "28/07",
        "nome": "Adesão do Maranhão à independência do Brasil / Lei estadual nº 2.457/1964"
    },
    {
        "estado": "BA",
        "data": "02/07",
        "nome": "Independência da Bahia (Data magna do estado) / Art. 6º, § 3º da Constituição estadual"
    },
    {
        "estado": "TO",
        "data": "05/10",
        "nome": "Criação do estado / Lei estadual nº 98/1989"
    },
    {
        "estado": "TO",
        "data": "18/03",
        "nome": "Autonomia do Estado (criação da Comarca do Norte) / Lei estadual nº 960/1998"
    },
    {
        "estado": "TO",
        "data": "08/09",
        "nome": "Padroeira do Estado (Nossa Senhora da Natividade) / Lei estadual nº 627/1993"
    },
    {
        "estado": "RO",
        "data": "04/01",
        "nome": "Criação do estado / Lei estadual nº 2291/2010"
    },
    {
        "estado": "RO",
        "data": "18/06",
        "nome": "Dia do evangélico / Lei estadual nº 1.026/2001"
    },
    {
        "estado": "PE",
        "data": "06/03",
        "nome": "Revolução Pernambucana de 1817 / Lei estadual nº 13.835/2009"
    },
    {
        "estado": "PE",
        "data": "24/06",
        "nome": "Festa de São João (Festa Junina) / Feriado Estadual"
    },
    {
        "estado": "PE",
        "data": "16/07",
        "nome": "Dia de Nossa Senhora do Carmo (Padroeira da Cidade do Recife) / Feriado religioso"
    },
    {
        "estado": "PE",
        "data": "08/12",
        "nome": "Dia de Nossa Senhora da Conceição (santa de grande devoção pela população da cidade do Recife) / Feriado religioso"
    },
    {
        "estado": "PB",
        "data": "26/07",
        "nome": "Homenagem à memória do ex/presidente João Pessoa / Lei Estadual 3.489/67, Art. 2º"
    },
    {
        "estado": "PB",
        "data": "05/08",
        "nome": "Fundação do Estado em 1585 e dia da sua padroeira, Nossa Senhora das Neves / Lei Estadual 3.489/1967"
    },
    {
        "estado": "AL",
        "data": "24/06",
        "nome": "São João / Lei estadual nº 5.508/1993"
    },
    {
        "estado": "AL",
        "data": "29/06",
        "nome": "São Pedro / Lei estadual nº 5.509/1993"
    },
    {
        "estado": "AL",
        "data": "16/09",
        "nome": "Emancipação política"
    },
    {
        "estado": "AL",
        "data": "20/11",
        "nome": "Morte de Zumbi dos Palmares / Lei estadual nº 5.724/1995"
    },
    {
        "estado": "CE",
        "data": "19/03",
        "nome": "Dia de São José (Padroeiro do Ceará) / Lei Federal nº 9.093/1995"
    },
    {
        "estado": "CE",
        "data": "25/03",
        "nome": "Data magna do estado (data da abolição da escravidão no Ceará) / Art. 18, parágrafo único da constituição estadual"
    },
    {
        "estado": "CE",
        "data": "15/08",
        "nome": "Dia de Nossa Senhora da Assunção (Padroeira de Fortaleza) / Lei Federal nº 9.093/1995"
    },
    {
        "estado": "DF",
        "data": "21/04",
        "nome": "Fundação de Brasília / Coincide com o feriado nacional de Tiradentes"
    },
    {
        "estado": "DF",
        "data": "30/11",
        "nome": "Dia do evangélico / Lei distrital nº 963/1995"
    },
    {
        "estado": "AM",
        "data": "05/09",
        "nome": "Elevação do Amazonas à categoria de província / Lei estadual nº 25/1977"
    },
    {
        "estado": "AM",
        "data": "20/11",
        "nome": "Dia da Consciência Negra / Lei estadual nº 84/2010"
    },
    {
        "estado": "AM",
        "data": "08/12",
        "nome": "Nossa Senhora da Conceição"
    },
    {
        "estado": "AP",
        "data": "19/03",
        "nome": "Dia de São José, santo padroeiro do Estado do Amapá / Lei estadual nº 667, de 16 de abril de 2002"
    },
    {
        "estado": "AP",
        "data": "13/09",
        "nome": "Criação do Território Federal (Data Magna do estado) / Art. 335 da Constituição estadual"
    },
    {
        "estado": "SC",
        "data": "11/08",
        "nome": "Dia de Santa Catarina (criação da capitania, separando/se de São Paulo)"
    },
    {
        "estado": "SC",
        "data": "25/11",
        "nome": "Dia de Santa Catarina de Alexandria"
    },
    {
        "estado": "AC",
        "data": "23/01",
        "nome": "Dia do evangélico"
    },
    {
        "estado": "AC",
        "data": "08/03",
        "nome": "Alusivo ao Dia Internacional da Mulher"
    },
    {
        "estado": "AC",
        "data": "15/06",
        "nome": "Aniversário do estado"
    },
    {
        "estado": "AC",
        "data": "05/09",
        "nome": "Dia da Amazônia"
    },
    {
        "estado": "AC",
        "data": "17/11",
        "nome": "Assinatura do Tratado de Petrópolis"
    }
]

module.exports = { nacionais: feriados, regionais: feriadosRegionais };
