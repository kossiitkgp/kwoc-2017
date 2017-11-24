$(function() {
    var langColor = {
    "Mercury": "#ff2b2b",
    "TypeScript": "#2b7489",
    "PureBasic": "#5a6986",
    "Objective-C++": "#6866fb",
    "Self": "#0579aa",
    "edn": "#db5855",
    "NewLisp": "#87AED7",
    "Jupyter Notebook": "#DA5B0B",
    "Rebol": "#358a5b",
    "Frege": "#00cafe",
    "Dart": "#00B4AB",
    "AspectJ": "#a957b0",
    "Shell": "#89e051",
    "Web Ontology Language": "#9cc9dd",
    "xBase": "#403a40",
    "Eiffel": "#946d57",
    "Nix": "#7e7eff",
    "RAML": "#77d9fb",
    "MTML": "#b7e1f4",
    "Racket": "#22228f",
    "Elixir": "#6e4a7e",
    "SAS": "#B34936",
    "Agda": "#315665",
    "wisp": "#7582D1",
    "D": "#ba595e",
    "Kotlin": "#F18E33",
    "Opal": "#f7ede0",
    "Crystal": "#776791",
    "Objective-C": "#438eff",
    "ColdFusion CFC": "#ed2cd6",
    "Oz": "#fab738",
    "Mirah": "#c7a938",
    "Objective-J": "#ff0c5a",
    "Gosu": "#82937f",
    "FreeMarker": "#0050b2",
    "Ruby": "#701516",
    "Component Pascal": "#b0ce4e",
    "Arc": "#aa2afe",
    "Brainfuck": "#2F2530",
    "Nit": "#009917",
    "APL": "#5A8164",
    "Go": "#375eab",
    "Visual Basic": "#945db7",
    "PHP": "#4F5D95",
    "Cirru": "#ccccff",
    "SQF": "#3F3F3F",
    "Glyph": "#e4cc98",
    "Java": "#b07219",
    "MAXScript": "#00a6a6",
    "Scala": "#DC322F",
    "Makefile": "#427819",
    "ColdFusion": "#ed2cd6",
    "Perl": "#0298c3",
    "Lua": "#000080",
    "Vue": "#2c3e50",
    "Verilog": "#b2b7f8",
    "Factor": "#636746",
    "Haxe": "#df7900",
    "Pure Data": "#91de79",
    "Forth": "#341708",
    "Red": "#ee0000",
    "Hy": "#7790B2",
    "Volt": "#1F1F1F",
    "LSL": "#3d9970",
    "eC": "#913960",
    "CoffeeScript": "#244776",
    "HTML": "#e44b23",
    "Lex": "#DBCA00",
    "API Blueprint": "#2ACCA8",
    "Swift": "#ffac45",
    "C": "#555555",
    "AutoHotkey": "#6594b9",
    "Isabelle": "#FEFE00",
    "Metal": "#8f14e9",
    "Clarion": "#db901e",
    "JSONiq": "#40d47e",
    "Boo": "#d4bec1",
    "AutoIt": "#1C3552",
    "Clojure": "#db5855",
    "Rust": "#dea584",
    "Prolog": "#74283c",
    "SourcePawn": "#5c7611",
    "AMPL": "#E6EFBB",
    "FORTRAN": "#4d41b1",
    "ANTLR": "#9DC3FF",
    "Harbour": "#0e60e3",
    "Tcl": "#e4cc98",
    "BlitzMax": "#cd6400",
    "PigLatin": "#fcd7de",
    "Lasso": "#999999",
    "ECL": "#8a1267",
    "VHDL": "#adb2cb",
    "Elm": "#60B5CC",
    "Propeller Spin": "#7fa2a7",
    "X10": "#4B6BEF",
    "IDL": "#a3522f",
    "ATS": "#1ac620",
    "Ada": "#02f88c",
    "Unity3D Asset": "#ab69a1",
    "Nu": "#c9df40",
    "LFE": "#004200",
    "SuperCollider": "#46390b",
    "Oxygene": "#cdd0e3",
    "ASP": "#6a40fd",
    "Assembly": "#6E4C13",
    "Gnuplot": "#f0a9f0",
    "JFlex": "#DBCA00",
    "NetLinx": "#0aa0ff",
    "Turing": "#45f715",
    "Vala": "#fbe5cd",
    "Processing": "#0096D8",
    "Arduino": "#bd79d1",
    "FLUX": "#88ccff",
    "NetLogo": "#ff6375",
    "C Sharp": "#178600",
    "CSS": "#563d7c",
    "Emacs Lisp": "#c065db",
    "Stan": "#b2011d",
    "SaltStack": "#646464",
    "QML": "#44a51c",
    "Pike": "#005390",
    "LOLCODE": "#cc9900",
    "ooc": "#b0b77e",
    "Handlebars": "#01a9d6",
    "J": "#9EEDFF",
    "Mask": "#f97732",
    "EmberScript": "#FFF4F3",
    "TeX": "#3D6117",
    "Nemerle": "#3d3c6e",
    "KRL": "#28431f",
    "Ren'Py": "#ff7f7f",
    "Unified Parallel C": "#4e3617",
    "Golo": "#88562A",
    "Fancy": "#7b9db4",
    "OCaml": "#3be133",
    "Shen": "#120F14",
    "Pascal": "#b0ce4e",
    "F#": "#b845fc",
    "Puppet": "#302B6D",
    "ActionScript": "#882B0F",
    "Diff": "#88dddd",
    "Ragel in Ruby Host": "#9d5200",
    "Fantom": "#dbded5",
    "Zephir": "#118f9e",
    "Click": "#E4E6F3",
    "Smalltalk": "#596706",
    "DM": "#447265",
    "Ioke": "#078193",
    "PogoScript": "#d80074",
    "LiveScript": "#499886",
    "JavaScript": "#f1e05a",
    "VimL": "#199f4b",
    "PureScript": "#1D222D",
    "ABAP": "#E8274B",
    "Matlab": "#bb92ac",
    "Slash": "#007eff",
    "R": "#198ce7",
    "Erlang": "#B83998",
    "Pan": "#cc0000",
    "LookML": "#652B81",
    "Eagle": "#814C05",
    "Scheme": "#1e4aec",
    "PLSQL": "#dad8d8",
    "Python": "#3572A5",
    "Max": "#c4a79c",
    "Common Lisp": "#3fb68b",
    "Latte": "#A8FF97",
    "XQuery": "#5232e7",
    "Omgrofl": "#cabbff",
    "XC": "#99DA07",
    "Nimrod": "#37775b",
    "SystemVerilog": "#DAE1C2",
    "Chapel": "#8dc63f",
    "Groovy": "#e69f56",
    "Dylan": "#6c616e",
    "E": "#ccce35",
    "Parrot": "#f3ca0a",
    "Grammatical Framework": "#79aa7a",
    "Game Maker Language": "#8fb200",
    "Papyrus": "#6600cc",
    "NetLinx+ERB": "#747faa",
    "Clean": "#3F85AF",
    "Alloy": "#64C800",
    "Squirrel": "#800000",
    "PAWN": "#dbb284",
    "UnrealScript": "#a54c4d",
    "Standard ML": "#dc566d",
    "Slim": "#ff8f77",
    "Perl6": "#0000fb",
    "Julia": "#a270ba",
    "Haskell": "#29b544",
    "NCL": "#28431f",
    "Io": "#a9188d",
    "Rouge": "#cc0088",
    "cpp": "#f34b7d",
    "AGS Script": "#B9D9FF",
    "Dogescript": "#cca760",
    "nesC": "#94B0C7"
    };

    var randcolors = ["#3498db", "#9b59b6", "#8e44ad", "#f1c40f", "#e67e22", "#e74c3c", "#ecf0f1", "#95a5a6", "#f39c12", "#d35400", "#c0392b", "#bdc3c7", "#7f8c8d"]

    var cards = [
      {'img': 'https://github.com/Vipul999ujawane.png?size=50', 'mentor_email': 'vipul999ujawane@gmail.com', 'title': 'ACAD-SEARCH', 'btnid': 1001, 'intro': 'A central repository for notes, papers, lab manuals of all departments of IIT KGP. Backend based in django.', 'id': 1, 'tag': ['Python', 'Django', 'Javascript', 'Jquery', 'HTML', 'CSS'], 'link': 'https://github.com/Vipul999ujawane/acad-search', 'mentor': 'Vipul Ujawane', 'intro_full': 'A central repository for notes, papers, lab manuals of all departments of IIT KGP. Backend based in django.', 'comm': ' gitter.im/acad-search '},
{'img': 'https://github.com/NITDgpOS.png?size=50', 'mentor_email': 'aniqrah@gmail.com', 'title': 'AIRHOCKEY', 'btnid': 1002, 'intro': 'Air Hockey game created using pygame ', 'id': 2, 'tag': ['Python', 'AI', 'Game', 'Pygame', 'Physics'], 'link': 'https://github.com/NITDgpOS/AirHockey', 'mentor': 'Aniq Ur Rahman', 'intro_full': 'Air Hockey game created using pygame ', 'comm': 'https://gitter.im/AirHockey55/Lobby'},
{'img': 'https://github.com/alchemsynergy.png?size=50', 'mentor_email': 'techfreakworm@gmail.com | rajadelhi94@gmail.com | vipul.gyl12@gmail.com\n', 'title': 'ALCHEM DESKTOP', 'btnid': 1003, 'intro': 'An all-in-one inventory and accounts solution for Chemist shops (both wholesale and retail) as per new Indian taxation standards.', 'id': 3, 'tag': ['Java', 'JavaFX', 'XML', 'CSS', 'PostgreSQL'], 'link': 'https://github.com/alchemsynergy/alchem', 'mentor': 'Mayank Gupta | Ankit Kumar | Vipul Goyal', 'intro_full': 'An all-in-one inventory and accounts solution for Chemist shops (both wholesale and retail) as per new Indian taxation standards.', 'comm': 'https://join.slack.com/t/alchemsynergy/shared_invite/enQtMjU0NjUwMzAyNTgzLTM0OTNlMTg3ZDk1MmQ4ODdkYzM2YTA3MTE2MGM4ZTQ1ODU5ZTc3YTA4ODY5MWI2ZTAzZDM5MjEzOGM3N2FhYjY'},
{'img': 'https://github.com/americast.png?size=50', 'mentor_email': 'sayan.sinha@iitkgp.ac.in', 'title': 'ANN', 'btnid': 1004, 'intro': 'Artificial Neural Network from scratch in Julia', 'id': 4, 'tag': ['Julia', 'ANN', 'DL', 'ML'], 'link': 'https://github.com/americast/ANN', 'mentor': 'Sayan Sinha', 'intro_full': 'Artificial Neural Network from scratch in Julia', 'comm': 'https://gitter.im/ANN-julia/Lobby'},
{'img': 'https://github.com/iashris.png?size=50', 'mentor_email': 'ashris@mit.edu', 'title': 'ARCHDRAW', 'btnid': 1005, 'intro': 'An architecture automation tool that converts a pencil drawn sketch to a rendered plan instantly', 'id': 5, 'tag': ['javascript', 'p5js', 'design', 'image processing', 'computer vision'], 'link': 'https://github.com/iashris/archdraw', 'mentor': 'Ashris Choudhury', 'intro_full': 'An architecture automation tool that converts a pencil drawn sketch to a rendered plan instantly', 'comm': 'https://www.facebook.com/Ashris'},
{'img': 'https://github.com/icyflame.png?size=50', 'mentor_email': 'kannan.siddharth12@gmail.com', 'title': 'AWESOME SOCIAL SCIENCE', 'btnid': 1006, 'intro': ' A curated list of adages, psychological syndromes and behaviour explaining aphorisms. ', 'id': 6, 'tag': ['social science', 'psychology', 'syndromes', 'behavior', 'awesome-list', 'non programming'], 'link': 'https://github.com/icyflame/awesome-social-science', 'mentor': 'Siddharth Kannan', 'intro_full': ' A curated list of adages, psychological syndromes and behaviour explaining aphorisms. ', 'comm': 'https://groups.google.com/forum/#!forum/kwoc-2017-discussion-icyflame'},
{'img': 'https://github.com/the-ethan-hunt.png?size=50', 'mentor_email': 'dhruvgirishapte@gmail.com', 'title': 'B.E.N.J.I.', 'btnid': 1007, 'intro': 'B.E.N.J.I., short for Brilliant and Efficient non-Javascript enabled Intelligence is a digital assistant that can help do several regular tasks on the laptop...', 'id': 7, 'tag': ['Python', 'digital-assistant', 'speech-to-text', 'speech-recognition'], 'link': 'https://github.com/the-ethan-hunt/B.E.N.J.I.', 'mentor': 'Dhruv Apte', 'intro_full': 'B.E.N.J.I., short for Brilliant and Efficient non-Javascript enabled Intelligence is a digital assistant that can help do several regular tasks on the laptop. Its numerous tasks include searching on Google, Wiki search, opening any Webpage, fetching news from several news agencies. The assistant can be activated and operated using voice commands. The assistant is yet undergoing changes for operating in a Linux and MacOS operating system', 'comm': 'https://groups.google.com/forum/#!forum/benji-discussion'},
{'img': 'https://github.com/jajodiaraghav.png?size=50', 'mentor_email': 'jajodia.raghav@gmail.com', 'title': 'BREAKOUT', 'btnid': 1008, 'intro': 'Breakout is a Atari-Breakout(Smashing) desktop game developed using Electron and Javascript.', 'id': 8, 'tag': ['Electronjs', 'JavaScript', 'Desktop Game', 'Smashing'], 'link': 'https://github.com/jajodiaraghav/breakout', 'mentor': 'Raghav Jajodia', 'intro_full': 'Breakout is a Atari-Breakout(Smashing) desktop game developed using Electron and Javascript.', 'comm': 'https://gitter.im/breakout-electronjs/breakout'},
{'img': 'https://github.com/kaustubhhiware.png?size=50', 'mentor_email': 'hiwarekaustubh@gmail.com', 'title': 'C0DERUNR', 'btnid': 1009, 'intro': 'An attempt at a clear, minimalistic code compiler / interpreter.', 'id': 9, 'tag': ['Python', 'Django', 'UI', 'Natural Language Processing'], 'link': 'https://github.com/kaustubhhiware/c0derunR', 'mentor': 'Kaustubh Hiware', 'intro_full': 'An attempt at a clear, minimalistic code compiler / interpreter.', 'comm': 'https://groups.google.com/forum/#!forum/c0derunr'},
{'img': 'https://github.com/americast.png?size=50', 'mentor_email': 'sayan.sinha@iitkgp.ac.in', 'title': 'CASCADE SEGNET', 'btnid': 1010, 'intro': 'Implementation of Segnet on a cascading architecture', 'id': 10, 'tag': ['Python', 'AI', 'CNN', 'ML', 'DL', 'Encoder-decoder'], 'link': 'https://github.com/americast/cascade-segnet-tf', 'mentor': 'Sayan Sinha', 'intro_full': 'Implementation of Segnet on a cascading architecture', 'comm': 'https://gitter.im/Cascade-Segnet-TF/Lobby'},
{'img': 'https://github.com/metakgp.png?size=50', 'mentor_email': 'rameshwar.zorro@gmail.com', 'title': 'CHITRAGUPTA', 'btnid': 1011, 'intro': 'Wikibot to track user contributions', 'id': 11, 'tag': ['Python', 'Github-API', 'pywikibot'], 'link': 'https://github.com/metakgp/chitragupta/', 'mentor': 'Rameshwar Bhaskaran', 'intro_full': 'Wikibot to track user contributions', 'comm': 'https://groups.google.com/forum/?hl=en-GB#!forum/metakgp-chitragupta'},
{'img': 'https://github.com/icyflame.png?size=50', 'mentor_email': 'kannan.siddharth12@gmail.com', 'title': 'CLI CUBE TIMER', 'btnid': 1012, 'intro': "Find out how long it takes you to solve the Rubik's Cube: without leaving your command line", 'id': 12, 'tag': ['javascript', 'tools', 'nodejs', 'NPM', 'module', "rubik's cube", 'timer', 'state machine'], 'link': 'https://github.com/icyflame/cli-cube-timer/issues', 'mentor': 'Siddharth Kannan', 'intro_full': "Find out how long it takes you to solve the Rubik's Cube: without leaving your command line", 'comm': 'https://groups.google.com/forum/#!forum/kwoc-2017-discussion-icyflame'},
{'img': 'https://github.com/zishansami102.png?size=50', 'mentor_email': 'zishansami102@gmail.com', 'title': 'CNN-FROM-SCRATCH', 'btnid': 1013, 'intro': 'A scratch implementation of Convolutional Neural Network in python without the use of any deep learning library tested over data sets like CIFAR-10 for Objec...', 'id': 13, 'tag': ['Machine Learning', 'Deep Learning', 'Digit Recognition', 'Python', 'Flask', 'Javascript', 'HTML'], 'link': 'https://github.com/zishansami102/CNN-from-Scratch', 'mentor': 'Zishan Sami', 'intro_full': 'A scratch implementation of Convolutional Neural Network in python without the use of any deep learning library tested over data sets like CIFAR-10 for Object Detection & MNIST for Digit Recognition', 'comm': 'https://groups.google.com/forum/#!forum/cnn-from-scratch'},
{'img': 'https://github.com/coala.png?size=50', 'mentor_email': 'yash.nisar@somaiya.edu', 'title': 'COALA', 'btnid': 1014, 'intro': 'coala provides a unified interface for linting and fixing code with a single configuration file, regardless of the programming languages used. You can use co...', 'id': 14, 'tag': ['Python'], 'link': 'https://github.com/coala/', 'mentor': 'Yash Nisar', 'intro_full': 'coala provides a unified interface for linting and fixing code with a single configuration file, regardless of the programming languages used. You can use coala from within your favorite editor, integrate it with your CI, get the results as JSON, or customize it to your needs with its flexible configuration syntax.  coala has a set of official bears (plugins) for several languages, including popular languages such as C/C++, Python, JavaScript, CSS, Java and many more, in addition to some generic language independent algorithms.', 'comm': 'https://gitter.im/coala/coala'},
{'img': 'https://github.com/prateekiiest.png?size=50', 'mentor_email': 'prateekkol21@gmail.com', 'title': 'CODE SLEEP PYTHON', 'btnid': 1015, 'intro': 'This repository contains a curated list of some of the awesome small projects made in Python that you can code away this summer.  It includes analysis of dif...', 'id': 15, 'tag': ['Python', 'Games', 'Machine Learning', 'Algorithms ', 'Desktop Applications'], 'link': 'https://github.com/prateekiiest/Code-Sleep-Python', 'mentor': 'Prateek Chanda', 'intro_full': 'This repository contains a curated list of some of the awesome small projects made in Python that you can code away this summer.  It includes analysis of different Python modules, a deep analysis of the Python statistics modules and dataframes like Pandas.  It has some projects on classification, correlation and regression which are the fundamental building blocks of Machine Learning and Neural Networks. It also involves projects on Desktop Application and simple games. This repository hosts to 40 participants during Hacktoberfest', 'comm': 'https://code-sleep-python.slack.com/threads/'},
{'img': 'https://github.com/ncs-jss.png?size=50', 'mentor_email': 'ankitjain28may77@gmail.com', 'title': 'CODE-PAD', 'btnid': 1016, 'intro': 'It is a platform where students use to code online like many competative sites. It is a college competative platform for teacher-student interaction. Teacher...', 'id': 16, 'tag': ['php', 'Laravel', 'composer', 'html', 'css', 'javascript', 'jquery', 'bootstrap', 'mysql'], 'link': 'https://github.com/ncs-jss/Code-Pad', 'mentor': 'Ankit Jain', 'intro_full': 'It is a platform where students use to code online like many competative sites. It is a college competative platform for teacher-student interaction. Teachers organise events for the students. This improves the skills set of students.', 'comm': 'https://gitter.im/ankitjain28may/Code-Pad'},
{'img': 'https://github.com/athityakumar.png?size=50', 'mentor_email': 'athityakumar@gmail.com', 'title': 'COLORLS', 'btnid': 1017, 'intro': "A Ruby gem that beautifies the terminal's ls command, with color and font-awesome icons.", 'id': 17, 'tag': ['Ruby', 'CLI'], 'link': 'https://github.com/athityakumar/colorls', 'mentor': 'Athitya Kumar', 'intro_full': "A Ruby gem that beautifies the terminal's ls command, with color and font-awesome icons.", 'comm': 'athityakumar@gmail.com'},
{'img': 'https://github.com/sipah00.png?size=50', 'mentor_email': 'shubhamsipah00@gmail.com', 'title': 'CRICKFEV', 'btnid': 1018, 'intro': 'CLI for getting update of live cricket matches', 'id': 18, 'tag': ['Python', 'Scraping', 'click', 'cli'], 'link': 'https://github.com/sipah00/CrickFev', 'mentor': 'shubham maddhashiya', 'intro_full': 'CLI for getting update of live cricket matches', 'comm': 'https://join.slack.com/t/crickkwoc/shared_invite/enQtMjc0NDUyNTU3NzE1LWFmOGI5MDBhMzBmNmJjMTM0ZjhjMTBhNTIzY2VhNTI5N2ZkNjVhYTNkZTUyNGMyNmMwMGE0NjY2OGM1YmY4NDg'},
{'img': 'https://github.com/athityakumar.png?size=50', 'mentor_email': 'athityakumar@gmail.com', 'title': 'DATA', 'btnid': 1019, 'intro': 'A terminal-data controller with dynamic auto-complete features, that is built with ruby.', 'id': 19, 'tag': ['Ruby', 'CLI'], 'link': 'https://github.com/athityakumar/data', 'mentor': 'Athitya Kumar', 'intro_full': 'A terminal-data controller with dynamic auto-complete features, that is built with ruby.', 'comm': 'athityakumar@gmail.com'},
{'img': 'https://github.com/AvijitGhosh82.png?size=50', 'mentor_email': 'avijitg22@gmail.com', 'title': 'DEEPCHEM', 'btnid': 1020, 'intro': 'Using Deep Learning to predict properties of Chemicals', 'id': 20, 'tag': ['Python', 'Scraping', 'Tensorflow', 'Deep Learning', 'Neural Network', 'Data Collection', 'Word2Vec'], 'link': 'https://github.com/AvijitGhosh82/DeepChem', 'mentor': 'Avijit Ghosh', 'intro_full': 'Using Deep Learning to predict properties of Chemicals', 'comm': 'https://gitter.im/Deep-Chem'},
{'img': 'https://github.com/Parth-Vader.png?size=50', 'mentor_email': 'vermaparth97@gmail.com', 'title': 'FB-SPIDER', 'btnid': 1021, 'intro': 'A program which accepts the id of a Facebook page and transforms into a table of the latest posts and comments.', 'id': 21, 'tag': ['Python', 'Spider', 'Facebook-API', 'Graph-API'], 'link': 'https://github.com/Parth-Vader/FB-Spider', 'mentor': 'Parth Verma', 'intro_full': 'A program which accepts the id of a Facebook page and transforms into a table of the latest posts and comments.', 'comm': 'https://join.slack.com/t/kwoc2017-parth/shared_invite/enQtMjc1OTU3MDUwNzc0LTNkNzQzN2U5NzI0ZTNkM2I5MGM5MDIyYTYxMzFhNWYzNWYwMDIzMjNmYjM2MTA1NDc1NWU2Yjc0ZTYxNGZmNTA'},
{'img': 'https://github.com/amrit-choudhary.png?size=50', 'mentor_email': 'albela.amrit@gmail.com', 'title': 'GAME REWARDS SYSTEM', 'btnid': 1022, 'intro': 'A free, open-source, extensible and cross system for creating rewards, loots and drops to be used in games built on the Unity engine.', 'id': 22, 'tag': ['Gaming'], 'link': 'https://github.com/amrit-choudhary/UnityChestDropSystem', 'mentor': 'Amrit Choudhary', 'intro_full': 'A free, open-source, extensible and cross system for creating rewards, loots and drops to be used in games built on the Unity engine.', 'comm': 'https://groups.google.com/d/forum/game-rewards-system-channel'},
{'img': 'https://github.com/sangeet259.png?size=50', 'mentor_email': 'mail2sangeetmishra@gmail.com', 'title': 'GENERATIVE ADVERSARIAL NETWORKS(GANS)', 'btnid': 1023, 'intro': 'Implement GANs in Pytorch and Basic Numpy from the starter code', 'id': 23, 'tag': ['Python', 'PyTorch', 'Machine Learning', 'Deep Learning', 'Segmentation', 'Style Transfer'], 'link': 'https://github.com/sangeet259/Generative_Adversarial_Networks', 'mentor': 'Sangeet Kumar Mishra', 'intro_full': 'Implement GANs in Pytorch and Basic Numpy from the starter code', 'comm': 'https://kwoc-17.slack.com/'},
{'img': 'https://github.com/git.png?size=50', 'mentor_email': 'pranit.bauva@gmail.com', 'title': 'GIT', 'btnid': 1024, 'intro': 'Git - fast, scalable, distributed revision control system', 'id': 24, 'tag': ['C', 'Shell'], 'link': 'https://github.com/git/git/', 'mentor': 'Pranit Bauva', 'intro_full': 'Git - fast, scalable, distributed revision control system', 'comm': 'Mailing lists (git@vger.kernel.org)'},
{'img': 'https://github.com/demfier.png?size=50', 'mentor_email': 'sahu.gaurav719@gmail.com', 'title': 'GITPUB', 'btnid': 1025, 'intro': "A module to interact with github's public API. Good place to start open-source contribution.", 'id': 25, 'tag': ['Python Library', 'GithubAPI'], 'link': 'https://github.com/demfier/gitpub', 'mentor': 'Gaurav Sahu', 'intro_full': "A module to interact with github's public API. Good place to start open-source contribution.", 'comm': 'https://groups.google.com/forum/#!forum/gitpub'},
{'img': 'https://github.com/ashishkg0022.png?size=50', 'mentor_email': 'ashishkg0022@gmail.com', 'title': 'GMAIL-ATTACHMENTS', 'btnid': 1026, 'intro': "This program is a Python script that downloads all attachments found in the inbox of the user's Gmail account, based on a specific sender's address.", 'id': 26, 'tag': [' IMAP  ', 'Gmail', 'Python Script'], 'link': 'https://github.com/ashishkg0022/gmail-attachments', 'mentor': 'Ashish Kumar Gaurav', 'intro_full': "This program is a Python script that downloads all attachments found in the inbox of the user's Gmail account, based on a specific sender's address.", 'comm': 'https://groups.google.com/d/forum/gmail-attachments'},
{'img': 'https://github.com/nikhilkumarsingh.png?size=50', 'mentor_email': 'nikhilksingh97@gmail.com', 'title': 'GNEWSCLIENT', 'btnid': 1027, 'intro': 'An easy-to-use python client for Google News feeds.', 'id': 27, 'tag': ['python', 'scraping', 'news-client', 'python-package'], 'link': 'https://github.com/nikhilkumarsingh/gnewsclient', 'mentor': 'Nikhil Kumar Singh', 'intro_full': 'An easy-to-use python client for Google News feeds.', 'comm': 'https://groups.google.com/forum/#!forum/kwoc-gnewsclient'},
{'img': 'https://github.com/dibyadas.png?size=50', 'mentor_email': 'dibyadas998@gmail.com', 'title': 'GRAPHCLUSTERS', 'btnid': 1028, 'intro': 'A community clusters detection app that can take an edgelist as an input and generate an interactive force directed graph and different information like the ...', 'id': 28, 'tag': ['d3.js', 'graph', 'networkx', 'python', 'javascript'], 'link': 'https://github.com/dibyadas/d3-force-directed-graph/', 'mentor': 'Dibya Prakash Das', 'intro_full': 'A community clusters detection app that can take an edgelist as an input and generate an interactive force directed graph and different information like the degree centrality, betweenness centrality and clustering co-efficients are displayed.', 'comm': 'https://gitter.im/GraphClusters/Lobby'},
{'img': 'https://github.com/KgpKubs.png?size=50', 'mentor_email': 'ashishkg0022@gmail.com', 'title': 'GUI-PATHPLANNERS', 'btnid': 1029, 'intro': 'It helps anyone see paths drawn from different path planners and also tune the parameters', 'id': 29, 'tag': ['PyQt4 ', 'RRTs', 'ROS'], 'link': 'https://github.com/KgpKubs/Gui-PathPlanners', 'mentor': 'Ashish Kumar Gaurav', 'intro_full': 'It helps anyone see paths drawn from different path planners and also tune the parameters', 'comm': 'https://gitter.im/KgpKubs/Lobby'},
{'img': 'https://github.com/metakgp.png?size=50', 'mentor_email': 'i.nishantnikhil@gmail.com', 'title': 'GYFT (GET YOUR FREAKING TIMETABLE)', 'btnid': 1030, 'intro': 'Gets your timetable from ERP and adds it to your Google Calendar or gives you an ICS file which you can add in any common calendar application.', 'id': 30, 'tag': ['Python', 'Scraping', 'Google API', 'ERP'], 'link': 'https://github.com/metakgp/gyft', 'mentor': 'Nishant Nikhil', 'intro_full': 'Gets your timetable from ERP and adds it to your Google Calendar or gives you an ICS file which you can add in any common calendar application.', 'comm': 'https://slack.metakgp.org/'},
{'img': 'https://github.com/pv-912.png?size=50', 'mentor_email': 'nishant.sikarwar007@gmail.com', 'title': 'HACKATHON', 'btnid': 1031, 'intro': 'It was Idea to connect professor to  students via showing their availability in their office.  We have to make a firebase database which will be update the v...', 'id': 31, 'tag': ['Android', 'Databases'], 'link': 'https://github.com/pv-912/Hackathon', 'mentor': 'Nishant Singh Sikarwar', 'intro_full': 'It was Idea to connect professor to  students via showing their availability in their office.  We have to make a firebase database which will be update the values in the list items (Names) shown in the app.', 'comm': 'https://groups.google.com/forum/#!forum/kwoc_hackathon_project/join'},
{'img': 'https://github.com/djbarnwal.png?size=50', 'mentor_email': 'dhiraj@iitkgp.ac.in', 'title': 'HANGMAN REACT GAME', 'btnid': 1032, 'intro': 'A traditional hangman game build using React.', 'id': 32, 'tag': [' Web Development', ' JavaScript', 'CSS', 'ReactJS'], 'link': 'https://github.com/djbarnwal/hangman', 'mentor': 'Dhiraj Kumar', 'intro_full': 'A traditional hangman game build using React.', 'comm': 'https://www.facebook.com/groups/166681887253832'},
{'img': 'https://github.com/kshitij10496.png?size=50', 'mentor_email': 'kshitijsaraogi@gmail.com', 'title': 'LEXICO', 'btnid': 1033, 'intro': 'Command Line Tool for looking up words', 'id': 33, 'tag': ['Python', 'CLI', 'DBMS', 'SQL', 'OOP'], 'link': 'https://github.com/kshitij10496/lexico', 'mentor': 'Kshitij Saraogi', 'intro_full': 'Command Line Tool for looking up words', 'comm': 'mailto: kshitijsaraogi@gmail.com'},
{'img': 'https://github.com/sr6033.png?size=50', 'mentor_email': 'shubhamrath.iiitb@gmail.com', 'title': 'LTERM', 'btnid': 1034, 'intro': 'lterm is an online Terminal Eminulator. It is a step by step tutorial that will teach you the bash commands by making you execute them.', 'id': 34, 'tag': ['javascript', 'html', 'css', 'jquery'], 'link': 'https://github.com/sr6033/lterm', 'mentor': 'Shubham Rath', 'intro_full': 'lterm is an online Terminal Eminulator. It is a step by step tutorial that will teach you the bash commands by making you execute them.', 'comm': 'https://gitter.im/lterm/Lobby?utm_source=share-link&utm_medium=link&utm_campaign=share-link'},
{'img': 'https://github.com/vernwalrahul.png?size=50', 'mentor_email': 'vernwalrahul@gmail.com', 'title': 'MESSENGER BOT', 'btnid': 1035, 'intro': "This is a simple python template that uses Flask to build a webhook for Facebook's Messenger Bot API. The aim is to build interactive chatbot with some added...", 'id': 35, 'tag': ['Python', 'NLP', 'APIs', 'Virtual Assistant'], 'link': 'https://github.com/vernwalrahul/my-messenger-bot', 'mentor': 'Rahul Vernwal', 'intro_full': "This is a simple python template that uses Flask to build a webhook for Facebook's Messenger Bot API. The aim is to build interactive chatbot with some added features of virtual assistant.", 'comm': 'https://gitter.im/my-messenger-bot/Lobby'},
{'img': 'https://github.com/metakgp.png?size=50', 'mentor_email': 'kannan.siddharth12@gmail.com', 'title': 'METAKGP WIKI: DOCKERIZED FOR FUN', 'btnid': 1036, 'intro': 'Self-sufficient docker configuration for running the Metakgp Mediawiki instance', 'id': 36, 'tag': ['Docker', 'PHP', 'SysAdmin', 'Linux'], 'link': 'https://github.com/metakgp/metakgp-wiki', 'mentor': 'Siddharth Kannan', 'intro_full': 'Self-sufficient docker configuration for running the Metakgp Mediawiki instance', 'comm': 'https://slack.metakgp.org/'},
{'img': 'https://github.com/metakgp.png?size=50', 'mentor_email': 'athityakumar@gmail.com', 'title': 'MFQP', 'btnid': 1037, 'intro': 'IITKGP Question paper search', 'id': 37, 'tag': ['JS', 'Python', 'Ruby', 'JSON', 'Javascript'], 'link': 'https://github.com/metakgp/mfqp', 'mentor': 'Athitya Kumar', 'intro_full': 'IITKGP Question paper search', 'comm': 'http://metakgp-slack.herokuapp.com/'},
{'img': 'https://github.com/aribis369.png?size=50', 'mentor_email': 'aribis369@gmail.com', 'title': 'ML-STARTER-PACK', 'btnid': 1038, 'intro': 'A collection of Machine Learning algorithms written from sctrach. ', 'id': 38, 'tag': ['Python', 'Machine Learning'], 'link': 'https://github.com/aribis369/ML-Starter-Pack', 'mentor': 'Arindam Biswas', 'intro_full': 'A collection of Machine Learning algorithms written from sctrach. ', 'comm': 'https://groups.google.com/forum/#!forum/ml-starter-pack'},
{'img': 'https://github.com/Parth-Vader.png?size=50', 'mentor_email': 'vermaparth97@gmail.com', 'title': 'MOBOFF', 'btnid': 1039, 'intro': 'A command line tool to add your music and videos directly to several devices.', 'id': 39, 'tag': ['Python', 'Command-Line', 'Youtube-dl', 'Click'], 'link': 'https://github.com/Parth-Vader/MobOff', 'mentor': 'Parth Verma', 'intro_full': 'A command line tool to add your music and videos directly to several devices.', 'comm': 'https://join.slack.com/t/kwoc2017-parth/shared_invite/enQtMjc1OTU3MDUwNzc0LTNkNzQzN2U5NzI0ZTNkM2I5MGM5MDIyYTYxMzFhNWYzNWYwMDIzMjNmYjM2MTA1NDc1NWU2Yjc0ZTYxNGZmNTA'},
{'img': 'https://github.com/morse-talk.png?size=50', 'mentor_email': 'aribis369@gmail.com', 'title': 'MORSE-TALK', 'btnid': 1040, 'intro': ' A Python library written for Morse Code', 'id': 40, 'tag': ['Python', 'CLI', 'GUI', 'Tkinter', 'Matplotlib', 'Wave'], 'link': 'https://github.com/morse-talk/morse-talk', 'mentor': 'Arindam Biswas', 'intro_full': ' A Python library written for Morse Code', 'comm': 'https://gitter.im/OrkoHunter-kwoc/morse-talk'},
{'img': 'https://github.com/metakgp.png?size=50', 'mentor_email': 'sayan.sinha@iitkgp.ac.in', 'title': 'NAARAD', 'btnid': 1041, 'intro': 'Aggregating news since antiquity', 'id': 41, 'tag': ['Python', 'scrapping', 'GraphQL', 'API', 'Django'], 'link': 'https://github.com/metakgp/naarad-source', 'mentor': 'Sayan Sinha', 'intro_full': 'Aggregating news since antiquity', 'comm': 'https://slack.metakgp.org/'},
{'img': 'https://github.com/networkx.png?size=50', 'mentor_email': 'himanshu.mishra.kgp@gmail.com', 'title': 'NETWORKX', 'btnid': 1042, 'intro': 'NetworkX is a Python package for the Graph Theory and Complex Networks.', 'id': 42, 'tag': ['Python', 'Graph Theory', 'Algorithms', 'Library', 'Package'], 'link': 'https://github.com/networkx/networkx', 'mentor': 'Himanshu Mishra', 'intro_full': 'NetworkX is a Python package for the Graph Theory and Complex Networks.', 'comm': 'https://groups.google.com/forum/#!forum/networkx-discuss'},
{'img': 'https://github.com/athityakumar.png?size=50', 'mentor_email': 'athityakumar@gmail.com', 'title': 'NETWORKX.RB', 'btnid': 1043, 'intro': "A Ruby implementation of Python's well known Graph library : networkx", 'id': 43, 'tag': ['Ruby', 'Gem', 'Networkx', 'Graph Theory'], 'link': 'https://github.com/athityakumar/networkx.rb', 'mentor': 'Athitya Kumar', 'intro_full': "A Ruby implementation of Python's well known Graph library : networkx", 'comm': 'athityakumar@gmail.com'},
{'img': 'https://github.com/ankita132.png?size=50', 'mentor_email': '2ankitasahoo13@gmail.com', 'title': 'NOTES APP', 'btnid': 1044, 'intro': 'An app on PHP to add, delete and edit notes ', 'id': 44, 'tag': ['css', 'javascript', 'PHP', 'ajax'], 'link': 'https://github.com/ankita132/notes_app', 'mentor': 'Ankita Sahoo', 'intro_full': 'An app on PHP to add, delete and edit notes ', 'comm': 'https://groups.google.com/forum/#!forum/notes_app'},
{'img': 'https://github.com/kaustubhhiware.png?size=50', 'mentor_email': 'hiwarekaustubh@gmail.com', 'title': 'NOTIFYRE', 'btnid': 1045, 'intro': 'A terminal task-notifier that works across different command line emulators', 'id': 45, 'tag': ['Bash', 'Terminal', 'Linux'], 'link': 'https://github.com/kaustubhhiware/NotiFyre', 'mentor': 'Kaustubh Hiware', 'intro_full': 'A terminal task-notifier that works across different command line emulators', 'comm': 'https://www.facebook.com/groups/552015885141292/'},
{'img': 'https://github.com/ankitjain28may.png?size=50', 'mentor_email': 'ankitjain28may77@gmail.com', 'title': 'OPENCHAT', 'btnid': 1046, 'intro': 'OpenChat is an Open Source messaging platform where people can send messages to anyone registered to this platform', 'id': 46, 'tag': ['php', 'composer', 'JavaScript', 'ajax', 'websockets', 'html', 'css', 'jquery', 'gulp'], 'link': 'http://github.com/ankitjain28may/openchat', 'mentor': 'Ankit Jain', 'intro_full': 'OpenChat is an Open Source messaging platform where people can send messages to anyone registered to this platform', 'comm': 'https://gitter.im/ankitjain28may/openchat'},
{'img': 'https://github.com/harishnandan.png?size=50', 'mentor_email': 'harishshivam@gmail.com', 'title': 'PACMAN-LVL1', 'btnid': 1047, 'intro': 'A very basic android implementation of the Pacman Game.', 'id': 47, 'tag': ['Java', 'Android'], 'link': 'https://github.com/harishnandan/Pacman-lvl1', 'mentor': 'Harish Nandan', 'intro_full': 'A very basic android implementation of the Pacman Game.', 'comm': 'https://www.facebook.com/groups/127895284549751'},
{'img': 'https://github.com/Pritom14.png?size=50', 'mentor_email': 'pritommazumdar1995@gmail.com', 'title': 'PASSWORD-STORAGE', 'btnid': 1048, 'intro': 'Android application for storing all your passwords.', 'id': 48, 'tag': ['Android', 'Java'], 'link': 'https://github.com/Pritom14/Password-Storage', 'mentor': 'Pritom Mazumdar', 'intro_full': 'Android application for storing all your passwords.', 'comm': 'https://gitter.im/Password-Storage/Lobby'},
{'img': 'https://github.com/OrkoHunter.png?size=50', 'mentor_email': 'himanshu.mishra.kgp@gmail.com', 'title': 'PEP8SPEAKS', 'btnid': 1049, 'intro': 'A GitHub integration to automatically review Python code style over Pull Requests', 'id': 49, 'tag': ['Python', 'Backend'], 'link': 'https://github.com/OrkoHunter/pep8speaks', 'mentor': 'Himanshu Mishra', 'intro_full': 'A GitHub integration to automatically review Python code style over Pull Requests', 'comm': 'https://gitter.im/OrkoHunter-kwoc/pep8speaks'},
{'img': 'https://github.com/nitdgpos.png?size=50', 'mentor_email': 'naveenkumarsangi@protonmail.com', 'title': 'PIZILLA', 'btnid': 1050, 'intro': 'A file sharing web application over local network.', 'id': 50, 'tag': ['javascript', 'reactJS', 'file-uploads'], 'link': 'https://github.com/nitdgpos/pizilla', 'mentor': 'Naveen Kumar Sangi', 'intro_full': 'A file sharing web application over local network.', 'comm': 'https://gitter.im/nit-dgp/general'},
{'img': 'https://github.com/nishnik.png?size=50', 'mentor_email': 'i.nishantnikhil@gmail.com', 'title': 'PLAY NEXT', 'btnid': 1051, 'intro': 'Create a dynamic queue in YouTube.', 'id': 51, 'tag': ['JavaScript', 'YouTube', 'Chrome Extension'], 'link': 'https://github.com/nishnik/Play_Next', 'mentor': 'Nishant Nikhil', 'intro_full': 'Create a dynamic queue in YouTube.', 'comm': 'https://slack.metakgp.org/'},
{'img': 'https://github.com/codeIIEST.png?size=50', 'mentor_email': 'prateekkol21@gmail.com', 'title': 'PLAYING WITH ALGORITHMS', 'btnid': 1052, 'intro': 'A Repository to store implementation of some of the famous Data Structures and Algorithms (mainly in C/C++/Java/Python) for everyone to learn and contribute.', 'id': 52, 'tag': ['Python', 'Algorithms', 'Data Structures', 'C++', 'Java'], 'link': 'https://github.com/codeIIEST/Algorithms', 'mentor': 'Prateek Chanda', 'intro_full': 'A Repository to store implementation of some of the famous Data Structures and Algorithms (mainly in C/C++/Java/Python) for everyone to learn and contribute.', 'comm': 'https://gitter.im/codeIIEST/Algorithms'},
{'img': 'https://github.com/NITDgpOS.png?size=50', 'mentor_email': 'djmdeveloper060796@gmail.com', 'title': 'PLOTIT', 'btnid': 1053, 'intro': 'A terminal and GUI based tool for quick visualisation of mathematical functions.', 'id': 53, 'tag': ['Python', 'Plotting', 'Terminal', 'GUI'], 'link': 'https://github.com/NITDgpOS/PlotIt', 'mentor': 'Deepjyoti Mondal', 'intro_full': 'A terminal and GUI based tool for quick visualisation of mathematical functions.', 'comm': 'https://gitter.im/PlotIt/Lobby'},
{'img': 'https://github.com/himanshub16.png?size=50', 'mentor_email': 'himanshushekharb16@gmail.com', 'title': 'PROXYMAN', 'btnid': 1054, 'intro': 'Tool to configure system-wide proxy settings in Linux.', 'id': 54, 'tag': ['bash', 'shell', 'linux', 'proxy', 'script'], 'link': 'https://github.com/himanshub16/ProxyMan', 'mentor': 'Himanshu Shekhar', 'intro_full': 'Tool to configure system-wide proxy settings in Linux.', 'comm': 'https://github.com/himanshub16/ProxyMan/issues'},
{'img': 'https://github.com/ankita132.png?size=50', 'mentor_email': '2ankitasahoo13@gmail.com', 'title': 'REACT GOOGLE MAP', 'btnid': 1055, 'intro': 'An app on react where you can upload and view images at various locations on the earth', 'id': 55, 'tag': ['reactjs', 'firebase', 'css'], 'link': 'https://github.com/ankita132/react_google_map', 'mentor': 'Ankita Sahoo', 'intro_full': 'An app on react where you can upload and view images at various locations on the earth', 'comm': 'https://groups.google.com/forum/#!forum/kwoc17-react_google_map'},
{'img': 'https://github.com/dibyadas.png?size=50', 'mentor_email': 'dibyadas998@gmail.com', 'title': 'READ-IT', 'btnid': 1056, 'intro': 'A chrome extension for mail tracking', 'id': 56, 'tag': ['Python', 'Chrome Extension', 'flask', 'gmail'], 'link': 'https://github.com/dibyadas/read-it', 'mentor': 'Dibya Prakash Das', 'intro_full': 'A chrome extension for mail tracking', 'comm': 'https://gitter.im/read-it/'},
{'img': 'https://github.com/harishnandan.png?size=50', 'mentor_email': 'harishshivam@gmail.com', 'title': 'REFLEXIO', 'btnid': 1057, 'intro': 'A web game based on reflection.', 'id': 57, 'tag': ['CSS', 'Javascript', 'HTML'], 'link': 'https://github.com/harishnandan/reflexio', 'mentor': 'Harish Nandan', 'intro_full': 'A web game based on reflection.', 'comm': 'https://www.facebook.com/groups/136133120486393/'},
{'img': 'https://github.com/icyflame.png?size=50', 'mentor_email': 'kannan.siddharth12@gmail.com', 'title': 'RELATIVE DATE: REVERSE', 'btnid': 1058, 'intro': 'Convert relative dates back to a date representation: 3 days ago => A date object for today - 3 days', 'id': 58, 'tag': ['javascript', 'datetime', 'utility', 'tools', 'nodejs', 'NPM', 'module'], 'link': 'https://github.com/icyflame/relative-date-reverse/issues', 'mentor': 'Siddharth Kannan', 'intro_full': 'Convert relative dates back to a date representation: 3 days ago => A date object for today - 3 days', 'comm': 'https://groups.google.com/forum/#!forum/kwoc-2017-discussion-icyflame'},
{'img': 'https://github.com/KgpKubs.png?size=50', 'mentor_email': 'sayan.sinha@iitkgp.ac.in', 'title': 'RRT', 'btnid': 1059, 'intro': 'Collection of variants of RRT Path Planners', 'id': 59, 'tag': ['C++', 'AI', 'Path planning'], 'link': 'https://github.com/KgpKubs/RRT', 'mentor': 'Sayan Sinha', 'intro_full': 'Collection of variants of RRT Path Planners', 'comm': 'https://gitter.im/KgpKubs/Lobby'},
{'img': 'https://github.com/jajodiaraghav.png?size=50', 'mentor_email': 'jajodia.raghav@gmail.com', 'title': 'RTUNES', 'btnid': 1060, 'intro': 'Web application developed on Angular2 that uses API provided by last.fm. Find artists and display albums and tracks listings.', 'id': 60, 'tag': ['Angular2', 'JavaScript', 'Web Application', 'SPA', 'TypeScript'], 'link': 'https://github.com/jajodiaraghav/rTunes', 'mentor': 'Raghav Jajodia', 'intro_full': 'Web application developed on Angular2 that uses API provided by last.fm. Find artists and display albums and tracks listings.', 'comm': 'https://gitter.im/rTunes-angular2/Lobby'},
{'img': 'https://github.com/vivonk.png?size=50', 'mentor_email': 'nirmalsarswat400@gmail.com', 'title': 'SAFEANDROID', 'btnid': 1061, 'intro': "In Android there are many privacy issues, every time some application fetch your details that you don't want to let ope to anyone. To ensure that your data i...", 'id': 61, 'tag': ['Android ', 'Security', 'Network'], 'link': 'https://github.com/vivonk/SaveMore', 'mentor': 'Nirmal Sarswat', 'intro_full': "In Android there are many privacy issues, every time some application fetch your details that you don't want to let ope to anyone. To ensure that your data is private I have the project in which we have to fake all possible bugs of privacy in Android and fix them into a small android app. Every time when ever some data travel from one end of user to some where else, we will notify about the privacy.", 'comm': 'https://join.slack.com/t/kwoc/shared_invite/enQtMjc2Njk1MTA5ODk0LTk4MTc4ODY5MjEzYWExNTcyYWM2NTRiMjQ1YzRhMzE3YWZlOTkzNDdkZTMzOWYxMDYxMDM3NzQ5MjdlNjFiYTY'},
{'img': 'https://github.com/djokester.png?size=50', 'mentor_email': 'samriddhidjokestersinha@gmail.com', 'title': 'SANGITA', 'btnid': 1062, 'intro': 'A Natural Language Processing Toolkit for Indian Lamguages that utilize LSTMs for POS tagging.', 'id': 62, 'tag': ['Python', 'NLP', 'Machine Learning', 'Scraping'], 'link': 'https://github.com/djokester/sangita', 'mentor': 'Samriddhi Sinha', 'intro_full': 'A Natural Language Processing Toolkit for Indian Lamguages that utilize LSTMs for POS tagging.', 'comm': 'https://groups.google.com/d/forum/sangitanlp'},
{'img': 'https://github.com/the-ethan-hunt.png?size=50', 'mentor_email': 'dhruvgirishapte@gmail.com', 'title': 'SCIRUBY-EXAMPLES', 'btnid': 1063, 'intro': 'SciRuby-examples is a guide for a newbie to dive into machine learning and natural language processing using an unconventional language: Ruby', 'id': 63, 'tag': ['Ruby', 'Natural Language Processing', 'Deep Learning', 'Machine Learning', ' IRuby notebook'], 'link': 'https://github.com/the-ethan-hunt/sciruby-examples', 'mentor': 'Dhruv Apte', 'intro_full': 'SciRuby-examples is a guide for a newbie to dive into machine learning and natural language processing using an unconventional language: Ruby', 'comm': 'https://groups.google.com/forum/#!forum/sciruby-examples-discus'},
{'img': 'https://github.com/scrapy.png?size=50', 'mentor_email': 'vermaparth97@gmail.com', 'title': 'SCRAPY BENCH SPEEDCENTER', 'btnid': 1064, 'intro': 'A Django web app for collecting various results for scrapy-bench and uploading it to web.', 'id': 64, 'tag': ['Python', 'Scrapy', 'Scraping', 'Benchmarking', 'Django'], 'link': 'https://github.com/scrapy/scrapy-bench-speedcenter', 'mentor': 'Parth Verma', 'intro_full': 'A Django web app for collecting various results for scrapy-bench and uploading it to web.', 'comm': 'https://join.slack.com/t/kwoc2017-parth/shared_invite/enQtMjc1OTU3MDUwNzc0LTNkNzQzN2U5NzI0ZTNkM2I5MGM5MDIyYTYxMzFhNWYzNWYwMDIzMjNmYjM2MTA1NDc1NWU2Yjc0ZTYxNGZmNTA'},
{'img': 'https://github.com/scrapy.png?size=50', 'mentor_email': 'vermaparth97@gmail.com', 'title': 'SCRAPY-BENCH', 'btnid': 1065, 'intro': 'A command-line interface for bench-marking Scrapy, that reflects real-world usage.', 'id': 65, 'tag': ['Python', 'Click', 'Scrapy', 'Scraping', 'Benchmarking', 'Memory-Profiling', 'Command-Line'], 'link': 'https://github.com/scrapy/scrapy-bench', 'mentor': 'Parth Verma', 'intro_full': 'A command-line interface for bench-marking Scrapy, that reflects real-world usage.', 'comm': 'https://join.slack.com/t/kwoc2017-parth/shared_invite/enQtMjc1OTU3MDUwNzc0LTNkNzQzN2U5NzI0ZTNkM2I5MGM5MDIyYTYxMzFhNWYzNWYwMDIzMjNmYjM2MTA1NDc1NWU2Yjc0ZTYxNGZmNTA'},
{'img': 'https://github.com/NITDgpOS.png?size=50', 'mentor_email': 'aniqrah@gmail.com', 'title': 'SECURESNAPS', 'btnid': 1066, 'intro': 'Image Codec using Private-key cryptography ', 'id': 66, 'tag': ['Python', 'Image', 'codec', 'encryption', 'cryptography'], 'link': 'https://github.com/NITDgpOS/SecureSnaps', 'mentor': 'Aniq Ur Rahman', 'intro_full': 'Image Codec using Private-key cryptography ', 'comm': 'https://gitter.im/SecureSnaps55/Lobby'},
{'img': 'https://github.com/jtoy.png?size=50', 'mentor_email': 'jtoy@jtoy.net', 'title': 'SENSENET', 'btnid': 1067, 'intro': 'TouchNet: a large scale dataset of 3D objects and a simulator for manipulating these objects for the purpose of researching and training AIs to learn and rea...', 'id': 67, 'tag': ['Python', 'machinelearning', 'deeplearning', 'neuroscience', 'numpy', 'tensorflow', 'pytorch'], 'link': 'https://github.com/jtoy/sensenet', 'mentor': 'Jason Toy', 'intro_full': 'TouchNet: a large scale dataset of 3D objects and a simulator for manipulating these objects for the purpose of researching and training AIs to learn and reason about their world via sensorimotor neural systems and touch.', 'comm': 'https://join.slack.com/t/sensenetai/shared_invite/enQtMjc4MzQ5ODUzNzgzLThjYTNmMzE4MGQ1MGMyN2NiMWIxNzI1NTYwMjI5ODE4NWY5MDNmN2U5OTkwMGE4OTFiNjNjYmQ0YjgwNjBmZWU'},
{'img': 'https://github.com/nishnik.png?size=50', 'mentor_email': 'i.nishantnikhil@gmail.com', 'title': 'SHERLOCKED', 'btnid': 1068, 'intro': 'Investigating properties of neural networks', 'id': 68, 'tag': ['Python', 'Neural Networks', 'Deep Learning'], 'link': 'https://github.com/nishnik/sherlocked', 'mentor': 'Nishant Nikhil', 'intro_full': 'Investigating properties of neural networks', 'comm': 'https://gitter.im/nn_sherlocked'},
{'img': 'https://github.com/jajodiaraghav.png?size=50', 'mentor_email': 'jajodia.raghav@gmail.com', 'title': 'SNAKE', 'btnid': 1069, 'intro': 'Popular Snake game build using Pygame for desktop', 'id': 69, 'tag': ['Python', 'Pygame', 'Snake'], 'link': 'https://github.com/jajodiaraghav/Snake', 'mentor': 'Raghav Jajodia', 'intro_full': 'Popular Snake game build using Pygame for desktop', 'comm': 'https://gitter.im/Snake-pygame/Lobby'},
{'img': 'https://github.com/americast.png?size=50', 'mentor_email': 'sayan.sinha@iitkgp.ac.in', 'title': 'SNAKES', 'btnid': 1070, 'intro': 'A simple game of snakes implemented in C++ and OpenCV', 'id': 70, 'tag': ['C++', 'Gaming', 'OpenCV'], 'link': 'https://github.com/americast/Snakes', 'mentor': 'Sayan Sinha', 'intro_full': 'A simple game of snakes implemented in C++ and OpenCV', 'comm': 'https://gitter.im/opencv-Snakes/Lobby'},
{'img': 'https://github.com/ankitjain28may.png?size=50', 'mentor_email': 'ankitjain28may77@gmail.com', 'title': 'SOCIAL-MEDIA-REVIEW-PLATFORM', 'btnid': 1071, 'intro': 'It is a platform to keep an eye on all the posts shared, liked and commented by the people hired by you for marketing.', 'id': 71, 'tag': ['Python', 'Scraping', 'php', 'sentiment analysis', 'machine learning', 'laravel', 'facebook api', 'twitter api', 'HTML', 'CSS', 'Jquery', 'Javascript', 'Bootstrap'], 'link': 'https://github.com/ankitjain28may/Social-Media-Review-Platform', 'mentor': 'Ankit Jain', 'intro_full': 'It is a platform to keep an eye on all the posts shared, liked and commented by the people hired by you for marketing.', 'comm': 'https://gitter.im/ankitjain28may/Social-Media-Review-Platform'},
{'img': 'https://github.com/sourishg.png?size=50', 'mentor_email': 'ragnarok0211@gmail.com', 'title': 'STEREO CAMERA CALIBRATION', 'btnid': 1072, 'intro': 'Often for complicated tasks in computer vision it is required that a camera be calibrated. Camera calibration is a necessary step in 3D computer vision in or...', 'id': 72, 'tag': ['Camera Calibration', 'Computer Vision', 'C++', 'OpenCV'], 'link': 'https://github.com/sourishg/stereo-calibration', 'mentor': 'Sourish Ghosh', 'intro_full': 'Often for complicated tasks in computer vision it is required that a camera be calibrated. Camera calibration is a necessary step in 3D computer vision in order to extract metric information from 2D images. Stereo calibration is used to find the geometric transformations between two cameras, and the relationship between two image projections of a particular 3D scene. More details here: http://sourishghosh.com/2016/stereo-calibration-cpp-opencv/', 'comm': 'https://cvkgp.slack.com'},
{'img': 'https://github.com/sunpy.png?size=50', 'mentor_email': 'nitin.iitkgp23@gmail.com', 'title': 'SUNPY', 'btnid': 1073, 'intro': 'SunPy is a community-developed free and open-source software package for solar physics. It aims to be provide a comprehensive data analysis environment that ...', 'id': 73, 'tag': ['Python', 'astronomy', 'sun', 'gsoc', 'scientific'], 'link': 'https://github.com/sunpy/sunpy', 'mentor': 'Nitin Choudhary', 'intro_full': 'SunPy is a community-developed free and open-source software package for solar physics. It aims to be provide a comprehensive data analysis environment that allows researchers within the field of solar physics to carry out their tasks with the minimal effort.  SunPy is written using the Python programming language and is build upon the scientific Python environment which includes several core packages such as NumPy, SciPy, Matplotlib and Pandas. Since SunPy deals with key astrophysical concepts, its development is closely associated with that of Astropy, which is a fundamental package within the Python astronomy ecosystem.', 'comm': 'https://riot.im/app/#/room/#sunpy-kwoc:matrix.org'},
{'img': 'https://github.com/sympy.png?size=50', 'mentor_email': 'shivamvats.iitkgp@gmail.com', 'title': 'SYMPY', 'btnid': 1074, 'intro': 'A Python Library for symbolic Maths.', 'id': 74, 'tag': ['Python', 'Maths ', 'Computation'], 'link': 'https://github.com/sympy/sympy', 'mentor': 'Shivam Vats', 'intro_full': 'A Python Library for symbolic Maths.', 'comm': 'https://gitter.im/sympy/sympy'},
{'img': 'https://github.com/Pro-Panda.png?size=50', 'mentor_email': 'f2016015@pilani.bits-pilani.ac.in', 'title': 'TERMI-NALANDA', 'btnid': 1075, 'intro': 'CLI version of a moodle based "Nalanda: E-LMS of BITS Pilani" to show updates', 'id': 75, 'tag': ['Python', 'Scraping', 'GUI', 'CLI'], 'link': 'https://github.com/Pro-Panda/Termi-Nalanda', 'mentor': 'Rahul Bothra', 'intro_full': 'CLI version of a moodle based "Nalanda: E-LMS of BITS Pilani" to show updates', 'comm': 'https://www.facebook.com/groups/301389363707310/'},
{'img': 'https://github.com/athityakumar.png?size=50', 'mentor_email': 'athityakumar@gmail.com', 'title': 'TIMETABLE', 'btnid': 1076, 'intro': 'A tool to display the timetable. A Terminal timetable, if you will.', 'id': 76, 'tag': ['Ruby', 'CLI'], 'link': 'https://github.com/athityakumar/timetable', 'mentor': 'Athitya Kumar', 'intro_full': 'A tool to display the timetable. A Terminal timetable, if you will.', 'comm': 'athityakumar@gmail.com'},
{'img': 'https://github.com/prateekiiest.png?size=50', 'mentor_email': 'prateekkol21@gmail.com', 'title': 'TITANIC SURVIVAL EXPLORATION', 'btnid': 1077, 'intro': 'It is a project on Machine Learning which aims to predict survival of passengers on Titanic. Contributing to this will aim to create a concrete understanding...', 'id': 77, 'tag': ['Python', 'Machine Learning', 'ipython notebook', 'statistical analysis'], 'link': 'https://github.com/prateekiiest/titanic_survival_exploration', 'mentor': 'Prateek Chanda', 'intro_full': 'It is a project on Machine Learning which aims to predict survival of passengers on Titanic. Contributing to this will aim to create a concrete understanding of ML for beginners and also help them go forward in Open Source', 'comm': 'https://titanic-survival.slack.com/'},
{'img': 'https://github.com/aribis369.png?size=50', 'mentor_email': 'aribis369@gmail.com', 'title': 'TREND-ANALYZER', 'btnid': 1078, 'intro': "Analyses trends in upcoming movie's anticipation. ", 'id': 78, 'tag': ['Python', 'Scraping', 'Machine Learning', 'MongoDB'], 'link': 'https://github.com/aribis369/Trend-Analyzer', 'mentor': 'Arindam Biswas', 'intro_full': "Analyses trends in upcoming movie's anticipation. ", 'comm': 'https://groups.google.com/forum/#!forum/trend-analyzer'},
{'img': 'https://github.com/athityakumar.png?size=50', 'mentor_email': 'athityakumar@gmail.com', 'title': 'TVSERIES', 'btnid': 1079, 'intro': "TV Series is a tool that scrapes Episode Synopsis' of popular TV Series' from websites like Wikipedia / IMDb and show in one place with a user-friendly navig...", 'id': 79, 'tag': ['Web Scraping', 'Ruby', 'Website', 'Frontend'], 'link': 'https://github.com/athityakumar/tvseries', 'mentor': 'Athitya Kumar', 'intro_full': "TV Series is a tool that scrapes Episode Synopsis' of popular TV Series' from websites like Wikipedia / IMDb and show in one place with a user-friendly navigation UI.", 'comm': 'athityakumar@gmail.com'},
{'img': 'https://github.com/mubaris.png?size=50', 'mentor_email': 'mubarishassannk@gmail.com', 'title': 'URBAN ROBOT', 'btnid': 1080, 'intro': 'Reddit bot which replies to sarcastic comments', 'id': 80, 'tag': ['Python', 'Machine Learning', 'NLP', 'Natural Language Processing'], 'link': 'https://github.com/mubaris/urban-robot', 'mentor': 'Mubaris NK', 'intro_full': 'Reddit bot which replies to sarcastic comments', 'comm': 'https://gitter.im/urban-robot/Lobby'},
{'img': 'https://github.com/mayank-kgp.png?size=50', 'mentor_email': 'mayank.jindal5@gmail.com', 'title': 'VOICE CALCULATOR', 'btnid': 1081, 'intro': 'The goal of this project is to build a calculator which has speech reconition ability for input.', 'id': 81, 'tag': ['Android', 'Java'], 'link': 'https://github.com/mayank-kgp/VoiceCalculator', 'mentor': 'Mayank Jindal', 'intro_full': 'The goal of this project is to build a calculator which has speech reconition ability for input.', 'comm': 'https://gitter.im/VoiceCalculator'},
{'img': 'https://github.com/rava-dosa.png?size=50', 'mentor_email': 'apoorvakumar169@gmail.com', 'title': 'WEED', 'btnid': 1082, 'intro': 'A video chat for LAN based on tcp. Beginner friendly project', 'id': 82, 'tag': ['C++', 'Socket', 'OpenCv'], 'link': 'https://github.com/rava-dosa/Weed', 'mentor': 'Apoorva Kumar', 'intro_full': 'A video chat for LAN based on tcp. Beginner friendly project', 'comm': 'https://groups.google.com/forum/#!forum/weedongit'},
{'img': 'https://github.com/aribis369.png?size=50', 'mentor_email': 'aribis369@gmail.com', 'title': 'WHATS-IN-THE-NEWS-GEEK', 'btnid': 1083, 'intro': 'A CLI tool to bring all the latest news to your terminal.', 'id': 83, 'tag': ['Python', 'CLI', 'API'], 'link': 'https://github.com/aribis369/Whats-in-the-news-GEEK', 'mentor': 'Arindam Biswas', 'intro_full': 'A CLI tool to bring all the latest news to your terminal.', 'comm': 'https://groups.google.com/forum/#!forum/whats-in-the-news-geek'},
{'img': 'https://github.com/Parth-Vader.png?size=50', 'mentor_email': 'vermaparth97@gmail.com', 'title': 'YOUTUBE DATA COLLECTOR', 'btnid': 1084, 'intro': 'Searches for recent Youtube videos opened and displays them in a list form.', 'id': 84, 'tag': ['Chrome', 'Extension', 'JavaScript', 'Data-Analytics', 'Databases'], 'link': 'https://github.com/Parth-Vader/YoutubeDataCollector', 'mentor': 'Parth Verma', 'intro_full': 'Searches for recent Youtube videos opened and displays them in a list form.', 'comm': 'https://join.slack.com/t/kwoc2017-parth/shared_invite/enQtMjc1OTU3MDUwNzc0LTNkNzQzN2U5NzI0ZTNkM2I5MGM5MDIyYTYxMzFhNWYzNWYwMDIzMjNmYjM2MTA1NDc1NWU2Yjc0ZTYxNGZmNTA'},
{'img': 'https://github.com/udiboy1209.png?size=50', 'mentor_email': 'mudeshi1209@gmail.com', 'title': 'YOUTUBE FAST PLAYLIST', 'btnid': 1085, 'intro': 'If you use YouTube to listen to music constantly while working or studying, this WebApp is for you. It works like a Music Player for YouTube, where you can r...', 'id': 85, 'tag': ['javascript', 'web-app', ' youtube-api', 'jquery'], 'link': 'https://github.com/udiboy1209/fast_playlist', 'mentor': 'Meet Udeshi', 'intro_full': 'If you use YouTube to listen to music constantly while working or studying, this WebApp is for you. It works like a Music Player for YouTube, where you can rapidly create a playlist by searching videos and adding them. Fast re-ordering, Repeat All, Repeat One, Shuffle features make it feel like a music player.', 'comm': 'https://gitter.im/fast-playlist'},

    ];

    var searchRes = cards;

    function findMatches(wordToMatch, cards) {
        if (wordToMatch === '') {
            return cards;
        } else {
            var options = {
              findAllMatches: true,
              threshold: 0.3,
              location: 0,
              distance: 100,
              maxPatternLength: 50,
              minMatchCharLength: 1,
              keys: [
                "intro_full",
                "link",
                "tag"
            ]
            };
            var fuse = new Fuse(cards, options);
            var result = fuse.search(wordToMatch);
            return result;
        }
    }

    var isEqual = function (value, other) {

        // Get the value type
        var type = Object.prototype.toString.call(value);

        // If the two objects are not the same type, return false
        if (type !== Object.prototype.toString.call(other)) return false;

        // If items are not an object or array, return false
        if (['[object Array]', '[object Object]'].indexOf(type) < 0) return false;

        // Compare the length of the length of the two items
        var valueLen = type === '[object Array]' ? value.length : Object.keys(value).length;
        var otherLen = type === '[object Array]' ? other.length : Object.keys(other).length;
        if (valueLen !== otherLen) return false;

        // Compare two items
        var compare = function (item1, item2) {

            // Get the object type
            var itemType = Object.prototype.toString.call(item1);

            // If an object or array, compare recursively
            if (['[object Array]', '[object Object]'].indexOf(itemType) >= 0) {
                if (!isEqual(item1, item2)) return false;
            }

            // Otherwise, do a simple comparison
            else {

                // If the two items are not the same type, return false
                if (itemType !== Object.prototype.toString.call(item2)) return false;

                // Else if it's a function, convert to a string and compare
                // Otherwise, just compare
                if (itemType === '[object Function]') {
                    if (item1.toString() !== item2.toString()) return false;
                } else {
                    if (item1 !== item2) return false;
                }

            }
        };

        // Compare properties
        if (type === '[object Array]') {
            for (var i = 0; i < valueLen; i++) {
                if (compare(value[i], other[i]) === false) return false;
            }
        } else {
            for (var key in value) {
                if (value.hasOwnProperty(key)) {
                    if (compare(value[key], other[key]) === false) return false;
                }
            }
        }

        // If nothing failed, return true
        return true;

    };


    var searchInput = $('.searchTerm');
    function displayMatches() {
        var matchArray = findMatches(searchInput.val(), cards)
        if(!isEqual(searchRes, matchArray)) {
            searchRes = matchArray
            displayRes()
        }
    };

    searchInput.keyup(displayMatches);

    function displayRes() {
        var str = "";
      $.each(searchRes , function(k,v){
        var list="";
        var i = 0;
        var tagcolor = "#8e44ad";
        var len = v.tag.length;
        for(i = 0; i<len; i++){
          tagcolor = langColor[v.tag[i]] || randcolors[Math.floor(Math.random()*randcolors.length)]
          list +='<li style="background: '+tagcolor+'" >\
              <div class="tag click-to-search">'+v.tag[i]+'</div>\
            </li>';
        }

        str +='<div class="cards">\
            <div class="card-item">\
              <div class="card-info">\
                <h2 class="card-title">'+v.title+'</h2>\
                <p class="card-intro">'+v.intro+'</p>\
            </div>\
            <div class="mentor"><p>Mentored by : <span>'+v.mentor+'</span></p></div>\
            <form id="form">\
          <ul class="tags custom">'+list+'\
          </ul>\
        </form>\
        <div class="wrap">\
             <a href="#" onclick="return false;" class="button2" id="'+v.btnid+'" class="modal-btn">Details</a>\
         </div>\
            </div>\
          </div>\
          <div class="modal" id="'+v.id+'">\
            <div class="modal-content">\
              <div class="modal-header">\
                <h3 class="header-title"><i class><img src="'+v.img+'" height="50" width="50"></i>'+'<a target="_blank" href="'+v.link+'">'+v.title+'</a>'+'</h3>\
                <div class="close fa fa-close"></div>\
              </div>\
              <div class="modal-body">\
                <p>'+v.intro_full+'</p>\
                <ul class="tags custom"><span class="icon-pricetags i-extra-small-box"></span>'+list+'\
                </ul>\
                <ul class="qwe">\
                <span>Mentor(s) : </span>\
                  <li>\
                    <div class="tag">'+v.mentor+' ( '+v.mentor_email+' ) '+'</div>\
                  </li>\
                </ul>\
               <ul class="qwe">\
                <span>Communication channel : </span>\
                  <li>\
                    <div class="tag comm" style="word-break: break-all;">'+v.comm+'</div>\
                  </li>\
                </ul>\
              </div>\
              <div class="modal-footer">\
                 <a href="'+v.link+'" target="_blank" " class="highlight-button-dark btn btn-round button xs-margin-bottom-five">\
                 </i><span>View Project</span></a>\
              </div>\
            </div>\
          </div>';

      });

      $('.container2').html(str);

      var btnno, no;
      var modBtn, modal, close,modContent;
      $('.button2').click(function() {
           btnno = $(this).attr('id');
           no = btnno - 1000;
           console.log(btnno);
           console.log(no);
           modBtn  = $('#' + btnno);
           modal  = $('#' + no);
           console.log(modBtn);
           close   = modal.find('.close'),
           modContent = modal.find('.modal-content');
           modal.css('display', 'block');
           modContent.removeClass('modal-animated-out').addClass('modal-animated-in');
        });

        // close modal when click on close button or somewhere out the modal content
        $(document).on('click', function(e) {
          var target = $(e.target);
          if(target.is(modal) || target.is(close)) {
            modContent.removeClass('modal-animated-in').addClass('modal-animated-out').delay(300).queue(function(next) {
              modal.css('display', 'none');
              next();
            });
          }
        });

    // When a tag is clicked, it goes to the search bar
    function onTagClick() {
        let tagText = this.innerText;
        searchInput.val(tagText)
        displayMatches()
    }

    v = $('.tag.click-to-search')
    v.click(onTagClick)

    v.css("cursor", "pointer")


    }

    displayRes();

});
