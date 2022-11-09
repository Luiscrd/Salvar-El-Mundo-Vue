const answers = [
    {
        id: 1,
        answ: '¿De dónde surge realmente la especie humana?',
        resp: [
            {
                r: 'a1',
                text: 'Todo es obra de dios'
            },
            {
                r: 'a2',
                text: 'Venimos del mono'
            },
            {
                r: 'a3',
                text: 'Somos obra de una especie superior'
            },
            {
                r: 'a4',
                text: 'Bacterias incrustadas en un asteroide'
            },
            {
                r: 'a5',
                text: 'Todo es un misterio'
            }
        ]
    },
    {
        id: 2,
        answ: '¿Alcanzaremos algún día la inmortalidad?',
        resp: [
            {
                r: 'a1',
                text: 'Lograremos vivir más tiempo, pero no eternamente'
            },
            {
                r: 'a2',
                text: 'Con ayuda de la cibernética lo conseguiremos'
            },
            {
                r: 'a3',
                text: 'Por culpa del cambio climático cada vez viviremos menos'
            },
            {
                r: 'a4',
                text: 'Eso es imposible'
            },
            {
                r: 'a5',
                text: 'Todo es posible'
            }
        ]
    },
    {
        id: 3,
        answ: '¿Evolucionaremos hacia otras especies humanas más desarrolladas e inteligentes que nosotros?',
        resp: [
            {
                r: 'a1',
                text: 'En un futuro la especie humana evolucionará mucho'
            },
            {
                r: 'a2',
                text: 'Seguramente involucionaremos'
            },
            {
                r: 'a3',
                text: 'Gracias a la biónica es como evolucionaremos'
            },
            {
                r: 'a4',
                text: 'Moriremos en pocos años'
            },
            {
                r: 'a5',
                text: 'Hemos alcanzado el nivel máximo de evolución'
            }
        ]
    },
    {
        id: 4,
        answ: '¿Cómo individuos o como especie podremos vivir y existir miles de años?',
        resp: [
            {
                r: 'a1',
                text: 'No estamos creados para vivir eternamente'
            },
            {
                r: 'a2',
                text: 'Lo conseguiremos, pero no en este planeta'
            },
            {
                r: 'a3',
                text: 'Viviremos más años pero no eternamente'
            },
            {
                r: 'a4',
                text: 'Lo logramos, pero eso llevará a una superpoblación'
            },
            {
                r: 'a5',
                text: 'Viviremos eternamente'
            }
        ]
    },
    {
        id: 5,
        answ: '¿Existen otros seres inteligentes en el universo?',
        resp: [
            {
                r: 'a1',
                text: 'No, somos la única especie inteligente'
            },
            {
                r: 'a2',
                text: 'Claro que existe, no estamos solos'
            },
            {
                r: 'a3',
                text: 'Es posible, pero nunca lo sabremos'
            },
            {
                r: 'a4',
                text: 'Existe vida pero no inteligente'
            },
            {
                r: 'a5',
                text: 'Han existido pero ya no existen'
            }
        ]
    },
    {
        id: 6,
        answ: '¿Esos seres intligentes han tenido alguna relación con nosotros?',
        resp: [
            {
                r: 'a1',
                text: 'Por supuesto, ellos ya nos han visitado'
            },
            {
                r: 'a2',
                text: 'No, ni creo que lo hagan nunca'
            },
            {
                r: 'a3',
                text: 'Es más probable que los visitemos nosotros antes'
            },
            {
                r: 'a4',
                text: 'Están entre nosotros'
            },
            {
                r: 'a5',
                text: 'Si, pero no se atreven a contactar'
            }
        ]
    },
    {
        id: 7,
        answ: '¿Qué es la energía y qué es la materia?',
        resp: [
            {
                r: 'a1',
                text: 'La energía es eso que sale de los enchufes'
            },
            {
                r: 'a2',
                text: 'Cuando morimos nos convertimos en energía'
            },
            {
                r: 'a3',
                text: 'Nosotros somos energía'
            },
            {
                r: 'a4',
                text: 'La materia es lo que podemos tocar'
            },
            {
                r: 'a5',
                text: 'Son teorías locas inventadas por alguien'
            }
        ]
    },
    {
        id: 8,
        answ: '¿La realidad es real, o hay distintos planos de realidad?',
        resp: [
            {
                r: 'a1',
                text: 'Vivimos en Matrix'
            },
            {
                r: 'a2',
                text: 'Existen distintos planos de realidad'
            },
            {
                r: 'a3',
                text: 'Eso no son más que patrañas'
            },
            {
                r: 'a4',
                text: 'No existen, pero lo harán'
            },
            {
                r: 'a5',
                text: 'Puede que existan pero nuca lo sabremos'
            }
        ]
    },
    {
        id: 9,
        answ: '¿Existe un sistema ético-moral mejor?',
        resp: [
            {
                r: 'a1',
                text: 'Nuestro sistema es el mejor'
            },
            {
                r: 'a2',
                text: 'En otras culturas lo tienen'
            },
            {
                r: 'a3',
                text: 'No, ya hemos llegado a ser lo más éticos que podemos'
            },
            {
                r: 'a4',
                text: 'Claro que existe pero no queremos implantarlo'
            },
            {
                r: 'a5',
                text: 'Con el tiempo iremos mejorando'
            }
        ]
    },
    {
        id: 10,
        answ: '¿Seremos capaces de controlar la inteligencia artificial para no ser destruidos por ella misma?',
        resp: [
            {
                r: 'a1',
                text: 'Claramente no, si no, no estarías aquí'
            },
            {
                r: 'a2',
                text: 'Somos capaces de controlar lo que creamos'
            },
            {
                r: 'a3',
                text: 'La It evolucionará pero no lo suficiente'
            },
            {
                r: 'a4',
                text: 'Viviremos en paz y armonía con ella'
            },
            {
                r: 'a5',
                text: 'Nunca podrán destruirnos'
            }
        ]
    }
]

export default answers