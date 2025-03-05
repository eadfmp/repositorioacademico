//listas arquivos e softwares
//adm, ads, pedagogia, processos, pos
let l_curso = [
    'adm',
    'adm',
    'adm',
    'ads',
    'ads',
    'ads',
    'pos',
    'pos',
    'pos',
];
let l_nome = [
    'FORMULÁRIO DE ATIVIDADES COMPLEMENTARES',
    'Template TCC',
    'Manual ABNT TCC FMP',
    'VSCode',
    'Android Studio',
    'Wire Shark',
    'TEMPLATE ARTIGO PÓS_MODELO 2025',
    'O Título, Resumo e Palvaras-Chaves dos Artigos',
    'O Desafio de Preparar a Introdução de um Artigo Acadêmico',
];
let l_imagem = [
    'images/courses/logo_pdf.png',
    'images/courses/logo_pdf.png',
    'images/courses/logo_pdf.png',
    'images/courses/logo_vscode.png',
    'images/courses/logo_androidstudio.png',
    'images/courses/logo_wireshark.png',
    'images/courses/logo_pdf.png',
    'images/courses/logo_pdf.png',
    'images/courses/logo_pdf.png',
];
let l_descricao = [
    'FORMULÁRIO DE ATIVIDADES COMPLEMENTARES',
    'Material utilizado na disciplina de Metodologia do TCE',
    'Material utilizado na disciplina de Metodologia do TCE',
    'Um editor de código desenvolvido pela Microsoft para criação de softwares Desktop com HTML, CSS e JavaScript.',
    'Ambiente de Desenvolvimento Integrado (IDE) que oferece ferramentas para criar apps em todos os dispositivos móveis.',
    'Analisador de protocolos que captura pacotes de dados em redes para análise e resolução de problemas.',
    'Template de Artigo para Pós-Graduação de Gestão Empresarial de Produção de Artigos.',
    'Artigo para Pós-Graduação de Gestão Empresarial de Produção de Artigos.',
    'Artigo para Pós-Graduação de Gestão Empresarial  de Produção de Artigos.',
];
//para caso não tenha professor colocar apeans ''
let l_professor = [
    '',
    'Fabiana Elisa Boff',
    'Fabiana Elisa Boff',
    'Leandro Pickler',
    'Leandro Pickler',
    'Leandro Pickler',
    'Fabiana Elisa Boff',
    'Fabiana Elisa Boff',
    'Fabiana Elisa Boff',
];
//colocar a fase nesse modelo: 1fase - apenas copie e mude o número, com excessão de 'geral'
let l_fase = [
    'geral',
    '6fase',
    '6fase',
    '1fase',
    '3fase',
    '4fase',
    'geral',
    'geral',
    'geral',
];
let l_link = [
    'https://drive.google.com/file/d/1lXWqmzY_Hf-vym2-vODfpsAGihYFhaRy/view?usp=drive_link',
    'https://docs.google.com/document/d/170gz-Y7grjUPLHwg6AkXtuSgyq346SiIeLg3NiK95gw/edit?usp=drive_link',
    'https://drive.google.com/file/d/1dnFKafGsm4ejJwqDuW9bkm-_b9R8FcLL/view?usp=drive_link',
    'https://code.visualstudio.com/download',
    'https://developer.android.com/studio?hl=pt-br#get-android-studio',
    'https://www.wireshark.org/download.html',
    'https://docs.google.com/document/d/1h8MjHXEcd6ZF2eyi_pVEULOuoTXOwLiCu_mW575crhk/edit?usp=drive_link',
    'https://drive.google.com/file/d/1ym3uK3CaY9dFh0izms-boIjaL8hyJvFI/view?usp=drive_link',
    'https://drive.google.com/file/d/1_7bBybChMmTaDRKPplUgBd2IedYMmWlX/view?usp=drive_link',
];

//listas da tutoria EaD
let ead_curso = [
    
];
let ead_nome = [
    
];
let ead_imagem = [

];
let ead_descricao = [

];
let ead_link = [
    
];

const row_adm = document.createElement('div')
row_adm.classList.add("row");
const row_ads = document.createElement('div');
row_ads.classList.add("row");
const row_pedagogia = document.createElement('div')
row_pedagogia.classList.add("row");
const row_processos = document.createElement('div')
row_processos.classList.add("row");
const row_pos = document.createElement('div')
row_pos.classList.add("row");
document.getElementById('administracao-tab-pane').appendChild(row_adm);
document.getElementById('ads-tab-pane').appendChild(row_ads);
document.getElementById('pedagogia-tab-pane').appendChild(row_pedagogia);
document.getElementById('processos-tab-pane').appendChild(row_processos);
document.getElementById('pos-tab-pane').appendChild(row_pos);

//ajusta a ordem dos arquivos/softwares
let sort_list = [];
for (let i = 0; i < l_fase.length; i++) {
    sort_list.push(l_fase[i] === 'geral' ?
    0 : l_fase[i] === '1fase' ?
    1 : l_fase[i] === '2fase' ?
    2 : l_fase[i] === '3fase' ?
    3 : l_fase[i] === '4fase' ?
    4 : l_fase[i] === '5fase' ?
    5 : l_fase[i] === '6fase' ?
    6 : l_fase[i] === '7fase' ?
    7 :  8);
};
for (let i = 0; i < sort_list.length; i++) {
    for (let j = 0; j < sort_list.length - 1; j++) {
        if (sort_list[j] > sort_list[j + 1]) {
            let aux = sort_list[j]; sort_list[j] = sort_list[j + 1]; sort_list[j + 1] = aux;
            aux = l_curso[j]; l_curso[j] = l_curso[j + 1]; l_curso[j + 1] = aux;
            aux = l_nome[j]; l_nome[j] = l_nome[j + 1]; l_nome[j + 1] = aux;
            aux = l_imagem[j]; l_imagem[j] = l_imagem[j + 1]; l_imagem[j + 1] = aux;
            aux = l_descricao[j]; l_descricao[j] = l_descricao[j + 1]; l_descricao[j + 1] = aux;
            aux = l_professor[j]; l_professor[j] = l_professor[j + 1]; l_professor[j + 1] = aux;
            aux = l_fase[j]; l_fase[j] = l_fase[j + 1]; l_fase[j + 1] = aux;
            aux = l_link[j]; l_link[j] = l_link[j + 1]; l_link[j + 1] = aux;
        }
    }
}

//cria os elementos
for (let i = 0; i < l_curso.length; i++) {
    let row = l_curso[i] === 'adm' ?
    row_adm : l_curso[i] === 'ads' ? 
    row_ads : l_curso[i] === 'pedagogia' ? 
    row_pedagogia : l_curso[i] === 'processos' ?
    row_processos : row_pos;

    let d1 = document.createElement('div');
    d1.classList.add("col-lg-4", "col-md-6", "col-12", "mb-4", "mb-lg-0");
    row.appendChild(d1);

    let d2 = document.createElement('div');
    d2.classList.add("custom-block", "bg-white", "shadow-lg")
    d1.appendChild(d2);

    let a = document.createElement('a');
    a.setAttribute('href', '#');
    d2.appendChild(a);

    let d3 = document.createElement('div');
    d3.classList.add("d-flex");
    a.appendChild(d3);

    let d4 = document.createElement('div');
    d3.appendChild(d4);

    let h5 = document.createElement('h5');
    let h5_texto = document.createTextNode(l_nome[i]);
    h5.appendChild(h5_texto);
    h5.classList.add("mb-2");
    d4.appendChild(h5);

    let img = document.createElement('img');
    img.src = l_imagem[i];
    img.classList.add("custom-block-image", "img-fluid");
    d4.appendChild(img);

    let descricao = document.createElement('p');
    let descricao_texto = document.createTextNode(l_descricao[i]);
    descricao.appendChild(descricao_texto);
    descricao.classList.add("mb-0");
    d4.appendChild(descricao);

    let breakline = document.createElement('br');
    d4.appendChild(breakline);

    if (l_professor[i] != '') {
        let professor = document.createElement('p');
        let professor_texto = document.createTextNode('Professor(a): ' + l_professor[i]);
        professor.appendChild(professor_texto);
        professor.classList.add("mb-0");
        d4.appendChild(professor);
    }

    let span = document.createElement('span');
    let fase_texto = l_fase[i] === 'geral' ? 'GERAL' : l_fase[i] === '1fase' ? '1ª FASE' : l_fase[i] === '2fase' ? '2ª FASE' : l_fase[i] === '3fase' ? '3ª FASE' : l_fase[i] === '4fase' ? '4ª FASE' : l_fase[i] === '5fase' ? '5ª FASE' : l_fase[i] === '6fase' ? '6ª FASE' : l_fase[i] === '7fase' ? '7ª FASE' :  '8ª FASE';
    let span_texto = document.createTextNode(fase_texto);
    span.appendChild(span_texto);
    let span_class = 'bg-' + l_fase[i];
    span.classList.add("badge", span_class, "rounded-pill", "ms-auto");
    d3.appendChild(span);

    let link_dowload = document.createElement('a');
    let link__texto = document.createTextNode('Download');
    link_dowload.appendChild(link__texto);
    link_dowload.setAttribute('href', l_link[i]);
    link_dowload.classList.add("btn", "custom-btn", "mt-2", "mt-lg-3")
    d2.appendChild(link_dowload);
}

const row_adm_ead = document.createElement('div')
row_adm_ead.classList.add("row");
const row_ads_ead = document.createElement('div');
row_ads_ead.classList.add("row");
const row_pedagogia_ead = document.createElement('div')
row_pedagogia_ead.classList.add("row");
const row_processos_ead = document.createElement('div')
row_processos_ead.classList.add("row");
const row_pos_ead = document.createElement('div')
row_pos_ead.classList.add("row");
document.getElementById('administracao_tutoria_row').appendChild(row_adm_ead);
document.getElementById('ads_tutoria_row').appendChild(row_ads_ead);
document.getElementById('pedagogia_tutoria_row').appendChild(row_pedagogia_ead);
document.getElementById('processos_tutoria_row').appendChild(row_processos_ead);
document.getElementById('pos_tutoria_row').appendChild(row_pos_ead);

for (let i = 0; i < ead_curso.length; i++) {
    let row = ead_curso[i] === 'adm' ?
    row_adm_ead : ead_curso[i] === 'ads' ? 
    row_ads_ead : ead_curso[i] === 'pedagogia' ? 
    row_pedagogia_ead : ead_curso[i] === 'processos' ?
    row_processos_ead : row_pos_ead;

    let d1 = document.createElement('div');
    d1.classList.add("col-lg-4", "col-md-6", "col-12", "mb-4", "mb-lg-0");
    row.appendChild(d1);

    let d2 = document.createElement('div');
    d2.classList.add("custom-block", "bg-white", "shadow-lg")
    d1.appendChild(d2);

    let d3 = document.createElement('div');
    d3.classList.add("d-flex");
    d2.appendChild(d3);

    let d4 = document.createElement('div');
    d3.appendChild(d4);

    let h5 = document.createElement('h5');
    let h5_texto = document.createTextNode(ead_nome[i]);
    h5.appendChild(h5_texto);
    h5.classList.add("mb-2");
    d4.appendChild(h5);

    let img = document.createElement('img');
    img.src = ead_imagem[i];
    img.classList.add("custom-block-image", "img-fluid");
    d4.appendChild(img);

    let descricao = document.createElement('p');
    let descricao_texto = document.createTextNode(ead_descricao[i]);
    descricao.appendChild(descricao_texto);
    descricao.classList.add("mb-0");
    d4.appendChild(descricao);

    let link_dowload = document.createElement('a');
    let link__texto = document.createTextNode('Download');
    link_dowload.appendChild(link__texto);
    link_dowload.setAttribute('href', ead_link[i]);
    link_dowload.classList.add("btn", "custom-btn", "mt-2", "mt-lg-3")
    d2.appendChild(link_dowload);
}