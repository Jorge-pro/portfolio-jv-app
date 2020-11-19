alert("As regras do jogo são bem simples. Em suma, um jogador será a CPU com o símbolo (0) e o segundo jogador será você com o símbolo (X). No tabuleiro desenhado com três linhas e três colunas, os espaços em branco dessas linhas e colunas devem ser preenchidos com os símbolos (0 e X). O objetivo desse passatempo é preencher ou as linhas diagonais ou as horizontais ou as verticais com um mesmo símbolo (X ou O) impedindo seu adversário de fazer isso primeiro que você. IMPORTANTE, este jogo é indicado para qualquer pessoa a partir dos cinco anos de idade.");
var jogo = [];
var tabuleiro = [];
var quemJoga = 0; //0=você; 1=cpu;
var verifica;
var jogando = true;
var nivel = 2;
var jogadaCpu = 1;
var quemComeca = 1;
var jogada=0;

function cpuJoga() {
    if (jogando) {
        var l, c;
        if (nivel == 1) {
            do {
                l = Math.round(Math.random() * 2);
                c = Math.round(Math.random() * 2);
            } while (jogo[l][c] != "");
            jogo[l][c] = "0";
        }

        //nivel 2
        else if (nivel == 2) {
            //Ataque

            //jogadas de  linha 

            // linha 1                    
            if ((jogo[0][0] == "0") && (jogo[0][1] == "0") && (jogo[0][2] == "")) {
                jogo[0][2] = "0";
            } else if ((jogo[0][0] == "0") && (jogo[0][2] == "0") && (jogo[0][1] == "")) {
                jogo[0][1] = "0";
            }
            else if ((jogo[0][1] == "0") && (jogo[0][2] == "0") && (jogo[0][0] == "")) {
                jogo[0][0] = "0";
            }else

            //linha 2
            if ((jogo[1][0] == "0") && (jogo[1][1] == "0") && (jogo[1][2] == "")) {
                jogo[1][2] = "0";
            } else if ((jogo[1][0] == "0") && (jogo[1][2] == "0") && (jogo[1][1] == "")) {
                jogo[1][1] = "0";
            }
            else if ((jogo[1][1] == "0") && (jogo[1][2] == "0") && (jogo[1][0] == "")) {
                jogo[1][0] = "0";
            }else

            //linha 3
            if ((jogo[2][0] == "0") && (jogo[2][1] == "0") && (jogo[2][2] == "")) {
                jogo[2][2] = "0";
            } else if ((jogo[2][0] == "0") && (jogo[2][2] == "0") && (jogo[2][1] == "")) {
                jogo[2][1] = "0";
            }
            else if ((jogo[2][1] == "0") && (jogo[2][2] == "0") && (jogo[2][0] == "")) {
                jogo[2][0] = "0";
            }else

            //jogadas de coluna

            //coluna 1
            if ((jogo[2][0] == "0") && (jogo[1][0] == "0") && (jogo[0][0] == "")) {
                jogo[0][0] = "0";
            } else if ((jogo[2][0] == "0") && (jogo[0][0] == "0") && (jogo[1][0] == "")) {
                jogo[1][0] = "0";
            }
            else if ((jogo[0][0] == "0") && (jogo[1][0] == "0") && (jogo[2][0] == "")) {
                jogo[2][0] = "0";
            }else

            //coluna 2
            if ((jogo[2][1] == "0") && (jogo[1][1] == "0") && (jogo[0][1] == "")) {
                jogo[0][1] = "0";
            } else if ((jogo[2][1] == "0") && (jogo[0][1] == "0") && (jogo[1][1] == "")) {
                jogo[1][1] = "0";
            }
            else if ((jogo[0][1] == "0") && (jogo[1][1] == "0") && (jogo[2][1] == "")) {
                jogo[2][1] = "0";
            }else

            //coluna 3
            if ((jogo[2][2] == "0") && (jogo[1][2] == "0") && (jogo[0][2] == "")) {
                jogo[0][2] = "0";
            } else if ((jogo[2][2] == "0") && (jogo[0][2] == "0") && (jogo[1][2] == "")) {
                jogo[1][2] = "0";
            }
            else if ((jogo[0][2] == "0") && (jogo[1][2] == "0") && (jogo[2][2] == "")) {
                jogo[2][2] = "0";
            }else

            // jogadas de diagonal

            //diagonal 00-22
            if ((jogo[0][0] == "0") && (jogo[1][1] == "0") && (jogo[2][2] == "")) {
                jogo[2][2] = "0";
            } else if ((jogo[0][0] == "0") && (jogo[2][2] == "0") && (jogo[1][1] == "")) {
                jogo[1][1] = "0";
            }
            else if ((jogo[2][2] == "0") && (jogo[1][1] == "0") && (jogo[0][0] == "")) {
                jogo[0][0] = "0";
            }else

            //diagonal 02-20
            if ((jogo[2][0] == "0") && (jogo[1][1] == "0") && (jogo[0][2] == "")) {
                jogo[0][2] = "0";
            } else if ((jogo[2][0] == "0") && (jogo[0][2] == "0") && (jogo[1][1] == "")) {
                jogo[1][1] = "0";
            }
            else if ((jogo[0][2] == "0") && (jogo[1][1] == "0") && (jogo[2][0] == "")) {
                jogo[2][0] = "0";
            }else

            // jogadas de defesa

            // defesa das linhas 

            //linha 1
            if ((jogo[0][0] == "X") && (jogo[0][1] == "X") && (jogo[0][2] == "")) {
                jogo[0][2] = "0";
            } else if ((jogo[0][0] == "X") && (jogo[0][2] == "X") && (jogo[0][1] == "")) {
                jogo[0][1] = "0";
            }
            else if ((jogo[0][1] == "X") && (jogo[0][2] == "X") && (jogo[0][0] == "")) {
                jogo[0][0] = "0";
            }else

            //linha 2
            if ((jogo[1][0] == "X") && (jogo[1][1] == "X") && (jogo[1][2] == "")) {
                jogo[1][2] = "0";
            } else if ((jogo[1][0] == "X") && (jogo[1][2] == "X") && (jogo[1][1] == "")) {
                jogo[1][1] = "0";
            }
            else if ((jogo[1][1] == "X") && (jogo[1][2] == "X") && (jogo[1][0] == "")) {
                jogo[1][0] = "0";
            }else

            //linha 3
            if ((jogo[2][0] == "X") && (jogo[2][1] == "X") && (jogo[2][2] == "")) {
                jogo[2][2] = "0";
            } else if ((jogo[2][0] == "X") && (jogo[2][2] == "X") && (jogo[2][1] == "")) {
                jogo[2][1] = "0";
            }
            else if ((jogo[2][1] == "X") && (jogo[2][2] == "X") && (jogo[2][0] == "")) {
                jogo[2][0] = "0";
            }else

            //jogadas de coluna

            //coluna 1
            if ((jogo[2][0] == "X") && (jogo[1][0] == "X") && (jogo[0][0] == "")) {
                jogo[0][0] = "0";
            } else if ((jogo[2][0] == "X") && (jogo[0][0] == "X") && (jogo[1][0] == "")) {
                jogo[1][0] = "0";
            }
            else if ((jogo[0][0] == "X") && (jogo[1][0] == "X") && (jogo[2][0] == "")) {
                jogo[2][0] = "0";
            }else

            //coluna 2
            if ((jogo[2][1] == "X") && (jogo[1][1] == "X") && (jogo[0][1] == "")) {
                jogo[0][1] = "0";
            } else if ((jogo[2][1] == "X") && (jogo[0][1] == "X") && (jogo[1][1] == "")) {
                jogo[1][1] = "0";
            }
            else if ((jogo[0][1] == "X") && (jogo[1][1] == "X") && (jogo[2][1] == "")) {
                jogo[2][1] = "0";
            }else

            //coluna 3
            if ((jogo[2][2] == "X") && (jogo[1][2] == "X") && (jogo[0][2] == "")) {
                jogo[0][2] = "0";
            } else if ((jogo[2][2] == "X") && (jogo[0][2] == "X") && (jogo[1][2] == "")) {
                jogo[1][2] = "0";
            }
            else if ((jogo[0][2] == "X") && (jogo[1][2] == "X") && (jogo[2][2] == "")) {
                jogo[2][2] = "0";
            }else

            // jogadas de diagonal

            //diagonal 00-22
            if ((jogo[0][0] == "X") && (jogo[1][1] == "X") && (jogo[2][2] == "")) {
                jogo[2][2] = "0";
            } else if ((jogo[0][0] == "X") && (jogo[2][2] == "X") && (jogo[1][1] == "")) {
                jogo[1][1] = "0";
            }
            else if ((jogo[2][2] == "X") && (jogo[1][1] == "X") && (jogo[0][0] == "")) {
                jogo[0][0] = "0";
            }else

            //diagonal 02-20
            if ((jogo[2][0] == "X") && (jogo[1][1] == "X") && (jogo[0][2] == "")) {
                jogo[0][2] = "0";
            } else if ((jogo[2][0] == "X") && (jogo[0][2] == "X") && (jogo[1][1] == "")) {
                jogo[1][1] = "0";
            }
            else if ((jogo[0][2] == "X") && (jogo[1][1] == "X") && (jogo[2][0] == "")) {
                jogo[2][0] = "0";
            }
            else {
                if (jogada < 8) {
                    do {
                        l = Math.round(Math.random() * 2);
                        c = Math.round(Math.random() * 2);
                    } while (jogo[l][c] != "");
                    jogo[l][c] = "0";
                } else {
                    for (var l = 0; l < 3; l++) {
                        for (var c = 0; c < 3; c++) {
                            if (jogo[l][c] == "") {
                                jogo[l][c] = "0";
                            }
                        }
                    }
                }
            }
        }
        verifica = verificaVitoria();
        if (verifica != "") {
            alert(verifica + " venceu");
            jogando = false;
        }
        atualizaTabuleiro();
        jogada++;
        quemJoga = 0;
    }
}

function verificaVitoria() {
    var l, c;

    // verificar vencedor nas linhas
    for (l = 0; l < 3; l++) {
        if (
            (jogo[l][0] == jogo[l][1]) && (jogo[l][1] == jogo[l][2])
        ) {
            return jogo[l][0];
        }
    }

    // verificar vencedor nas colunas
    for (c = 0; c < 3; c++) {
        if (
            (jogo[0][c] == jogo[1][c]) && (jogo[1][c] == jogo[2][c])
        ) {
            return jogo[0][c];
        }
    }

    //verificar vencedor nas diagonais
    if (
        (jogo[0][0] == jogo[1][1]) && (jogo[1][1] == jogo[2][2])
    ) {
        return jogo[0][0];
    }
    if (
        (jogo[0][2] == jogo[1][1]) && (jogo[1][1] == jogo[2][0])
    ) {
        return jogo[0][2];
    }
    return "";
}

function jogar(p) {
    if ((jogando) && (quemJoga == 0)) {
        switch (p) {
            case 1:
                if (jogo[0][0] == "") {
                    jogo[0][0] = "X";
                    quemJoga = 1;
                }
                break;
            case 2:
                if (jogo[0][1] == "") {
                    jogo[0][1] = "X";
                    quemJoga = 1;
                }
                break;
            case 3:
                if (jogo[0][2] == "") {
                    jogo[0][2] = "X";
                    quemJoga = 1;
                }
                break;
            case 4:
                if (jogo[1][0] == "") {
                    jogo[1][0] = "X";
                    quemJoga = 1;
                }
                break;
            case 5:
                if (jogo[1][1] == "") {
                    jogo[1][1] = "X";
                    quemJoga = 1;
                }
                break;
            case 6:
                if (jogo[1][2] == "") {
                    jogo[1][2] = "X";
                    quemJoga = 1;
                }
                break;
            case 7:
                if (jogo[2][0] == "") {
                    jogo[2][0] = "X";
                    quemJoga = 1;
                }
                break;
            case 8:
                if (jogo[2][1] == "") {
                    jogo[2][1] = "X";
                    quemJoga = 1;
                }
                break;
            case 9:
                if (jogo[2][2] == "") {
                    jogo[2][2] = "X";
                    quemJoga = 1;
                }
                break;
        }
        if (quemJoga == 1) {
            atualizaTabuleiro();
            verifica = verificaVitoria();
            if (verifica != "") {
                alert(verifica + " venceu");
                jogando = false;
            }
            jogada++;
            cpuJoga();
        }
    }
}

function atualizaTabuleiro() {
    for (var l = 0; l < 3; l++) {
        for (var c = 0; c < 3; c++) {
            if (jogo[l][c] == "X") {
                tabuleiro[l][c].innerHTML = "X";
                tabuleiro[l][c].style.cursor = "default";
            }
            else if (jogo[l][c] == "0") {
                tabuleiro[l][c].innerHTML = "0";
                tabuleiro[l][c].style.cursor = "default";
            }
            else {
                tabuleiro[l][c].innerHTML = "";
                tabuleiro[l][c].style.cursor = "pointer";
            }
        }
    }
}

function inicia() {
    jogando = true;
    jogadaCpu = 1;
    jogada=0;
    jogo = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ];
    tabuleiro = [
        [document.getElementById("p1"), document.getElementById("p2"), document.getElementById("p3")],
        [document.getElementById("p4"), document.getElementById("p5"), document.getElementById("p6")],
        [document.getElementById("p7"), document.getElementById("p8"), document.getElementById("p9")]
    ];
    atualizaTabuleiro();
    if (quemComeca == 1) {
        quemComeca = 0;
        quemJoga = quemComeca;
        document.getElementById("dvQuemComeca").innerHTML = "Quem começa: você";
    } else {
        quemComeca = 1;
        quemJoga = quemComeca;
        document.getElementById("dvQuemComeca").innerHTML = "Quem começa: CPU";
        cpuJoga();
    }
}

window.addEventListener("load", inicia)
