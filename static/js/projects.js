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
      {'btnid': 1001, 'id': 1, 'comm': ' gitter.im/acad-search ', 'img': 'https://github.com/Vipul999ujawane.png?size=50', 'intro': 'A central repository for notes, papers, lab manuals of all departments of IIT KGP. Backend based in django.', 'mentor_email': 'vipul999ujawane@gmail.com', 'tag': ['Python', 'Django', 'Javascript', 'Jquery', 'HTML', 'CSS'], 'intro_full': 'A central repository for notes, papers, lab manuals of all departments of IIT KGP. Backend based in django.', 'mentor': 'Vipul Ujawane', 'link': 'https://github.com/Vipul999ujawane/acad-search', 'title': 'ACAD-SEARCH'},
{'btnid': 1002, 'id': 2, 'comm': 'https://gitter.im/AirHockey55/Lobby', 'img': 'https://github.com/NITDgpOS.png?size=50', 'intro': 'Air Hockey game created using pygame ', 'mentor_email': 'aniqrah@gmail.com', 'tag': ['Python', 'AI', 'Game', 'Pygame', 'Physics'], 'intro_full': 'Air Hockey game created using pygame ', 'mentor': 'Aniq Ur Rahman', 'link': 'https://github.com/NITDgpOS/AirHockey', 'title': 'AIRHOCKEY'},
{'btnid': 1003, 'id': 3, 'comm': 'https://join.slack.com/t/alchemsynergy/shared_invite/enQtMjU0NjUwMzAyNTgzLTM0OTNlMTg3ZDk1MmQ4ODdkYzM2YTA3MTE2MGM4ZTQ1ODU5ZTc3YTA4ODY5MWI2ZTAzZDM5MjEzOGM3N2FhYjY', 'img': 'https://github.com/alchemsynergy.png?size=50', 'intro': 'An all-in-one inventory and accounts solution for Chemist shops (both wholesale and retail) as per new Indian taxation standards.', 'mentor_email': 'techfreakworm@gmail.com | rajadelhi94@gmail.com | vipul.gyl12@gmail.com\n', 'tag': ['Java', 'JavaFX', 'XML', 'CSS', 'PostgreSQL'], 'intro_full': 'An all-in-one inventory and accounts solution for Chemist shops (both wholesale and retail) as per new Indian taxation standards.', 'mentor': 'Mayank Gupta | Ankit Kumar | Vipul Goyal', 'link': 'https://github.com/alchemsynergy/alchem', 'title': 'ALCHEM DESKTOP'},
{'btnid': 1004, 'id': 4, 'comm': 'https://gitter.im/ANN-julia/Lobby', 'img': 'https://github.com/americast.png?size=50', 'intro': 'Artificial Neural Network from scratch in Julia', 'mentor_email': 'sayan.sinha@iitkgp.ac.in', 'tag': ['Julia', 'ANN', 'DL', 'ML'], 'intro_full': 'Artificial Neural Network from scratch in Julia', 'mentor': 'Sayan Sinha', 'link': 'https://github.com/americast/ANN', 'title': 'ANN'},
{'btnid': 1005, 'id': 5, 'comm': 'https://www.facebook.com/Ashris', 'img': 'https://github.com/iashris.png?size=50', 'intro': 'An architecture automation tool that converts a pencil drawn sketch to a rendered plan instantly', 'mentor_email': 'ashris@mit.edu', 'tag': ['javascript', 'p5js', 'design', 'image processing', 'computer vision'], 'intro_full': 'An architecture automation tool that converts a pencil drawn sketch to a rendered plan instantly', 'mentor': 'Ashris Choudhury', 'link': 'https://github.com/iashris/archdraw', 'title': 'ARCHDRAW'},
{'btnid': 1006, 'id': 6, 'comm': 'https://groups.google.com/forum/#!forum/kwoc-2017-discussion-icyflame', 'img': 'https://github.com/icyflame.png?size=50', 'intro': ' A curated list of adages, psychological syndromes and behaviour explaining aphorisms. ', 'mentor_email': 'kannan.siddharth12@gmail.com', 'tag': ['social science', 'psychology', 'syndromes', 'behavior', 'awesome-list', 'non programming'], 'intro_full': ' A curated list of adages, psychological syndromes and behaviour explaining aphorisms. ', 'mentor': 'Siddharth Kannan', 'link': 'https://github.com/icyflame/awesome-social-science', 'title': 'AWESOME SOCIAL SCIENCE'},
{'btnid': 1007, 'id': 7, 'comm': 'https://groups.google.com/forum/#!forum/benji-discussion', 'img': 'https://github.com/the-ethan-hunt.png?size=50', 'intro': 'B.E.N.J.I., short for Brilliant and Efficient non-Javascript enabled Intelligence is a digital assistant that can help do several regular tasks on the laptop...', 'mentor_email': 'dhruvgirishapte@gmail.com', 'tag': ['Python', 'digital-assistant', 'speech-to-text', 'speech-recognition'], 'intro_full': 'B.E.N.J.I., short for Brilliant and Efficient non-Javascript enabled Intelligence is a digital assistant that can help do several regular tasks on the laptop. Its numerous tasks include searching on Google, Wiki search, opening any Webpage, fetching news from several news agencies. The assistant can be activated and operated using voice commands. The assistant is yet undergoing changes for operating in a Linux and MacOS operating system', 'mentor': 'Dhruv Apte', 'link': 'https://github.com/the-ethan-hunt/B.E.N.J.I.', 'title': 'B.E.N.J.I.'},
{'btnid': 1008, 'id': 8, 'comm': 'https://gitter.im/gmonetix/BooksPivot-KWOC', 'img': 'https://github.com/gmonetix.png?size=50', 'intro': '--- A book sharing (PDF/EBOOK) platform ---  The project contains both   1. Android App   2. Website User can access the server from both.  Giving users the ...', 'mentor_email': 'gmonetix@gmail.com', 'tag': ['Java', 'Android Studio', 'Firebase', 'Web Server', 'Web-D'], 'intro_full': '--- A book sharing (PDF/EBOOK) platform ---  The project contains both   1. Android App   2. Website User can access the server from both.  Giving users the opportunity to upload/download infinite number of files. Each download of a file will be counted on server and based on higest number of downloads and ratings, the reputation of the user profile will be updated.', 'mentor': 'Gaurav Bordoloi', 'link': 'https://github.com/gmonetix/BooksPivot', 'title': 'BOOKS PIVOT'},
{'btnid': 1009, 'id': 9, 'comm': 'https://gitter.im/breakout-electronjs/breakout', 'img': 'https://github.com/jajodiaraghav.png?size=50', 'intro': 'Breakout is a Atari-Breakout(Smashing) desktop game developed using Electron and Javascript.', 'mentor_email': 'jajodia.raghav@gmail.com', 'tag': ['Electronjs', 'JavaScript', 'Desktop Game', 'Smashing'], 'intro_full': 'Breakout is a Atari-Breakout(Smashing) desktop game developed using Electron and Javascript.', 'mentor': 'Raghav Jajodia', 'link': 'https://github.com/jajodiaraghav/breakout', 'title': 'BREAKOUT'},
{'btnid': 1010, 'id': 10, 'comm': 'https://slack.metakgp.org/', 'img': 'https://github.com/lttkgp.png?size=50', 'intro': "The goal of this project would be to use Facebook's graph API to fetch all the latest songs posted to the Facebook group Listen To This KGP and link them wit...", 'mentor_email': 'ghostwriternr@gmail.com', 'tag': ['Public APIs', 'Databases', 'Machine Learning', 'Python'], 'intro_full': "The goal of this project would be to use Facebook's graph API to fetch all the latest songs posted to the Facebook group Listen To This KGP and link them with proper metadata from one of the popular public music metadata APIs like Musixmatch. Once fetched, all this information is to be properly stored in a database for later access from APIs and for running machine learning models to identify listening trends, clustering users and giving recommendations.", 'mentor': 'Naresh', 'link': 'https://github.com/lttkgp/C-3PO', 'title': 'C-3PO'},
{'btnid': 1011, 'id': 11, 'comm': 'https://groups.google.com/forum/#!forum/c0derunr', 'img': 'https://github.com/kaustubhhiware.png?size=50', 'intro': 'An attempt at a clear, minimalistic code compiler / interpreter.', 'mentor_email': 'hiwarekaustubh@gmail.com', 'tag': ['Python', 'Django', 'UI', 'Natural Language Processing'], 'intro_full': 'An attempt at a clear, minimalistic code compiler / interpreter.', 'mentor': 'Kaustubh Hiware', 'link': 'https://github.com/kaustubhhiware/c0derunR', 'title': 'C0DERUNR'},
{'btnid': 1012, 'id': 12, 'comm': 'https://gitter.im/Cascade-Segnet-TF/Lobby', 'img': 'https://github.com/americast.png?size=50', 'intro': 'Implementation of Segnet on a cascading architecture', 'mentor_email': 'sayan.sinha@iitkgp.ac.in', 'tag': ['Python', 'AI', 'CNN', 'ML', 'DL', 'Encoder-decoder'], 'intro_full': 'Implementation of Segnet on a cascading architecture', 'mentor': 'Sayan Sinha', 'link': 'https://github.com/americast/cascade-segnet-tf', 'title': 'CASCADE SEGNET'},
{'btnid': 1013, 'id': 13, 'comm': 'https://groups.google.com/forum/?hl=en-GB#!forum/metakgp-chitragupta', 'img': 'https://github.com/metakgp.png?size=50', 'intro': 'Wikibot to track user contributions', 'mentor_email': 'rameshwar.zorro@gmail.com', 'tag': ['Python', 'Github-API', 'pywikibot'], 'intro_full': 'Wikibot to track user contributions', 'mentor': 'Rameshwar Bhaskaran', 'link': 'https://github.com/metakgp/chitragupta/', 'title': 'CHITRAGUPTA'},
{'btnid': 1014, 'id': 14, 'comm': 'https://groups.google.com/forum/#!forum/kwoc-2017-discussion-icyflame', 'img': 'https://github.com/icyflame.png?size=50', 'intro': "Find out how long it takes you to solve the Rubik's Cube: without leaving your command line", 'mentor_email': 'kannan.siddharth12@gmail.com', 'tag': ['javascript', 'tools', 'nodejs', 'NPM', 'module', "rubik's cube", 'timer', 'state machine'], 'intro_full': "Find out how long it takes you to solve the Rubik's Cube: without leaving your command line", 'mentor': 'Siddharth Kannan', 'link': 'https://github.com/icyflame/cli-cube-timer/issues', 'title': 'CLI CUBE TIMER'},
{'btnid': 1015, 'id': 15, 'comm': 'https://groups.google.com/forum/#!forum/cnn-from-scratch', 'img': 'https://github.com/zishansami102.png?size=50', 'intro': 'A scratch implementation of Convolutional Neural Network in python without the use of any deep learning library tested over data sets like CIFAR-10 for Objec...', 'mentor_email': 'zishansami102@gmail.com', 'tag': ['Machine Learning', 'Deep Learning', 'Digit Recognition', 'Python', 'Flask', 'Javascript', 'HTML'], 'intro_full': 'A scratch implementation of Convolutional Neural Network in python without the use of any deep learning library tested over data sets like CIFAR-10 for Object Detection & MNIST for Digit Recognition', 'mentor': 'Zishan Sami', 'link': 'https://github.com/zishansami102/CNN-from-Scratch', 'title': 'CNN-FROM-SCRATCH'},
{'btnid': 1016, 'id': 16, 'comm': 'https://gitter.im/coala/coala', 'img': 'https://github.com/coala.png?size=50', 'intro': 'coala provides a unified interface for linting and fixing code with a single configuration file, regardless of the programming languages used. You can use co...', 'mentor_email': 'yash.nisar@somaiya.edu', 'tag': ['Python'], 'intro_full': 'coala provides a unified interface for linting and fixing code with a single configuration file, regardless of the programming languages used. You can use coala from within your favorite editor, integrate it with your CI, get the results as JSON, or customize it to your needs with its flexible configuration syntax.  coala has a set of official bears (plugins) for several languages, including popular languages such as C/C++, Python, JavaScript, CSS, Java and many more, in addition to some generic language independent algorithms.', 'mentor': 'Yash Nisar', 'link': 'https://github.com/coala/', 'title': 'COALA'},
{'btnid': 1017, 'id': 17, 'comm': 'https://code-sleep-python.slack.com/threads/', 'img': 'https://github.com/prateekiiest.png?size=50', 'intro': 'This repository contains a curated list of some of the awesome small projects made in Python that you can code away this summer.  It includes analysis of dif...', 'mentor_email': 'prateekkol21@gmail.com', 'tag': ['Python', 'Games', 'Machine Learning', 'Algorithms ', 'Desktop Applications'], 'intro_full': 'This repository contains a curated list of some of the awesome small projects made in Python that you can code away this summer.  It includes analysis of different Python modules, a deep analysis of the Python statistics modules and dataframes like Pandas.  It has some projects on classification, correlation and regression which are the fundamental building blocks of Machine Learning and Neural Networks. It also involves projects on Desktop Application and simple games. This repository hosts to 40 participants during Hacktoberfest', 'mentor': 'Prateek Chanda', 'link': 'https://github.com/prateekiiest/Code-Sleep-Python', 'title': 'CODE SLEEP PYTHON'},
{'btnid': 1018, 'id': 18, 'comm': 'https://gitter.im/ankitjain28may/Code-Pad', 'img': 'https://github.com/ncs-jss.png?size=50', 'intro': 'It is a platform where students use to code online like many competative sites. It is a college competative platform for teacher-student interaction. Teacher...', 'mentor_email': 'ankitjain28may77@gmail.com', 'tag': ['php', 'Laravel', 'composer', 'html', 'css', 'javascript', 'jquery', 'bootstrap', 'mysql'], 'intro_full': 'It is a platform where students use to code online like many competative sites. It is a college competative platform for teacher-student interaction. Teachers organise events for the students. This improves the skills set of students.', 'mentor': 'Ankit Jain', 'link': 'https://github.com/ncs-jss/Code-Pad', 'title': 'CODE-PAD'},
{'btnid': 1019, 'id': 19, 'comm': 'athityakumar@gmail.com', 'img': 'https://github.com/athityakumar.png?size=50', 'intro': "A Ruby gem that beautifies the terminal's ls command, with color and font-awesome icons.", 'mentor_email': 'athityakumar@gmail.com', 'tag': ['Ruby', 'CLI'], 'intro_full': "A Ruby gem that beautifies the terminal's ls command, with color and font-awesome icons.", 'mentor': 'Athitya Kumar', 'link': 'https://github.com/athityakumar/colorls', 'title': 'COLORLS'},
{'btnid': 1020, 'id': 20, 'comm': 'https://join.slack.com/t/crickkwoc/shared_invite/enQtMjc0NDUyNTU3NzE1LWFmOGI5MDBhMzBmNmJjMTM0ZjhjMTBhNTIzY2VhNTI5N2ZkNjVhYTNkZTUyNGMyNmMwMGE0NjY2OGM1YmY4NDg', 'img': 'https://github.com/sipah00.png?size=50', 'intro': 'CLI for getting update of live cricket matches', 'mentor_email': 'shubhamsipah00@gmail.com', 'tag': ['Python', 'Scraping', 'click', 'cli'], 'intro_full': 'CLI for getting update of live cricket matches', 'mentor': 'shubham maddhashiya', 'link': 'https://github.com/sipah00/CrickFev', 'title': 'CRICKFEV'},
{'btnid': 1021, 'id': 21, 'comm': 'https://slack.metakgp.org/', 'img': 'https://github.com/ghostwriternr.png?size=50', 'intro': 'The dashboard would serve as the central access point for several projects under MetaKGP. The goal is to provide the KGP community an easy to use dashboard w...', 'mentor_email': 'ghostwriternr@gmail.com', 'tag': ['React', 'Javascript', 'Frontend'], 'intro_full': 'The dashboard would serve as the central access point for several projects under MetaKGP. The goal is to provide the KGP community an easy to use dashboard with useful utilities meant for students.', 'mentor': 'Naresh', 'link': 'https://github.com/ghostwriternr/dashboard', 'title': 'DASHBOARD'},
{'btnid': 1022, 'id': 22, 'comm': 'athityakumar@gmail.com', 'img': 'https://github.com/athityakumar.png?size=50', 'intro': 'A terminal-data controller with dynamic auto-complete features, that is built with ruby.', 'mentor_email': 'athityakumar@gmail.com', 'tag': ['Ruby', 'CLI'], 'intro_full': 'A terminal-data controller with dynamic auto-complete features, that is built with ruby.', 'mentor': 'Athitya Kumar', 'link': 'https://github.com/athityakumar/data', 'title': 'DATA'},
{'btnid': 1023, 'id': 23, 'comm': 'https://gitter.im/Deep-Chem', 'img': 'https://github.com/AvijitGhosh82.png?size=50', 'intro': 'Using Deep Learning to predict properties of Chemicals', 'mentor_email': 'avijitg22@gmail.com', 'tag': ['Python', 'Scraping', 'Tensorflow', 'Deep Learning', 'Neural Network', 'Data Collection', 'Word2Vec'], 'intro_full': 'Using Deep Learning to predict properties of Chemicals', 'mentor': 'Avijit Ghosh', 'link': 'https://github.com/AvijitGhosh82/DeepChem', 'title': 'DEEPCHEM'},
{'btnid': 1024, 'id': 24, 'comm': 'https://join.slack.com/t/kwoc2017-parth/shared_invite/enQtMjc1OTU3MDUwNzc0LTNkNzQzN2U5NzI0ZTNkM2I5MGM5MDIyYTYxMzFhNWYzNWYwMDIzMjNmYjM2MTA1NDc1NWU2Yjc0ZTYxNGZmNTA', 'img': 'https://github.com/Parth-Vader.png?size=50', 'intro': 'A program which accepts the id of a Facebook page and transforms into a table of the latest posts and comments.', 'mentor_email': 'vermaparth97@gmail.com', 'tag': ['Python', 'Spider', 'Facebook-API', 'Graph-API'], 'intro_full': 'A program which accepts the id of a Facebook page and transforms into a table of the latest posts and comments.', 'mentor': 'Parth Verma', 'link': 'https://github.com/Parth-Vader/FB-Spider', 'title': 'FB-SPIDER'},
{'btnid': 1025, 'id': 25, 'comm': 'https://groups.google.com/d/forum/game-rewards-system-channel', 'img': 'https://github.com/amrit-choudhary.png?size=50', 'intro': 'A free, open-source, extensible and cross system for creating rewards, loots and drops to be used in games built on the Unity engine.', 'mentor_email': 'albela.amrit@gmail.com', 'tag': ['Gaming'], 'intro_full': 'A free, open-source, extensible and cross system for creating rewards, loots and drops to be used in games built on the Unity engine.', 'mentor': 'Amrit Choudhary', 'link': 'https://github.com/amrit-choudhary/UnityChestDropSystem', 'title': 'GAME REWARDS SYSTEM'},
{'btnid': 1026, 'id': 26, 'comm': 'https://kwoc-17.slack.com/', 'img': 'https://github.com/sangeet259.png?size=50', 'intro': 'Implement GANs in Pytorch and Basic Numpy from the starter code', 'mentor_email': 'mail2sangeetmishra@gmail.com', 'tag': ['Python', 'PyTorch', 'Machine Learning', 'Deep Learning', 'Segmentation', 'Style Transfer'], 'intro_full': 'Implement GANs in Pytorch and Basic Numpy from the starter code', 'mentor': 'Sangeet Kumar Mishra', 'link': 'https://github.com/sangeet259/Generative_Adversarial_Networks', 'title': 'GENERATIVE ADVERSARIAL NETWORKS(GANS)'},
{'btnid': 1027, 'id': 27, 'comm': 'Mailing lists (git@vger.kernel.org)', 'img': 'https://github.com/git.png?size=50', 'intro': 'Git - fast, scalable, distributed revision control system', 'mentor_email': 'pranit.bauva@gmail.com', 'tag': ['C', 'Shell'], 'intro_full': 'Git - fast, scalable, distributed revision control system', 'mentor': 'Pranit Bauva', 'link': 'https://github.com/git/git/', 'title': 'GIT'},
{'btnid': 1028, 'id': 28, 'comm': 'https://groups.google.com/forum/#!forum/gitpub', 'img': 'https://github.com/demfier.png?size=50', 'intro': "A module to interact with github's public API. Good place to start open-source contribution.", 'mentor_email': 'sahu.gaurav719@gmail.com', 'tag': ['Python Library', 'GithubAPI'], 'intro_full': "A module to interact with github's public API. Good place to start open-source contribution.", 'mentor': 'Gaurav Sahu', 'link': 'https://github.com/demfier/gitpub', 'title': 'GITPUB'},
{'btnid': 1029, 'id': 29, 'comm': 'https://groups.google.com/d/forum/gmail-attachments', 'img': 'https://github.com/ashishkg0022.png?size=50', 'intro': "This program is a Python script that downloads all attachments found in the inbox of the user's Gmail account, based on a specific sender's address.", 'mentor_email': 'ashishkg0022@gmail.com', 'tag': [' IMAP  ', 'Gmail', 'Python Script'], 'intro_full': "This program is a Python script that downloads all attachments found in the inbox of the user's Gmail account, based on a specific sender's address.", 'mentor': 'Ashish Kumar Gaurav', 'link': 'https://github.com/ashishkg0022/gmail-attachments', 'title': 'GMAIL-ATTACHMENTS'},
{'btnid': 1030, 'id': 30, 'comm': 'https://groups.google.com/forum/#!forum/kwoc-gnewsclient', 'img': 'https://github.com/nikhilkumarsingh.png?size=50', 'intro': 'An easy-to-use python client for Google News feeds.', 'mentor_email': 'nikhilksingh97@gmail.com', 'tag': ['python', 'scraping', 'news-client', 'python-package'], 'intro_full': 'An easy-to-use python client for Google News feeds.', 'mentor': 'Nikhil Kumar Singh', 'link': 'https://github.com/nikhilkumarsingh/gnewsclient', 'title': 'GNEWSCLIENT'},
{'btnid': 1031, 'id': 31, 'comm': 'https://gitter.im/GraphClusters/Lobby', 'img': 'https://github.com/dibyadas.png?size=50', 'intro': 'A community clusters detection app that can take an edgelist as an input and generate an interactive force directed graph and different information like the ...', 'mentor_email': 'dibyadas998@gmail.com', 'tag': ['d3.js', 'graph', 'networkx', 'python', 'javascript'], 'intro_full': 'A community clusters detection app that can take an edgelist as an input and generate an interactive force directed graph and different information like the degree centrality, betweenness centrality and clustering co-efficients are displayed.', 'mentor': 'Dibya Prakash Das', 'link': 'https://github.com/dibyadas/d3-force-directed-graph/', 'title': 'GRAPHCLUSTERS'},
{'btnid': 1032, 'id': 32, 'comm': 'https://gitter.im/KgpKubs/Lobby', 'img': 'https://github.com/KgpKubs.png?size=50', 'intro': 'It helps anyone see paths drawn from different path planners and also tune the parameters', 'mentor_email': 'ashishkg0022@gmail.com', 'tag': ['PyQt4 ', 'RRTs', 'ROS'], 'intro_full': 'It helps anyone see paths drawn from different path planners and also tune the parameters', 'mentor': 'Ashish Kumar Gaurav', 'link': 'https://github.com/KgpKubs/Gui-PathPlanners', 'title': 'GUI-PATHPLANNERS'},
{'btnid': 1033, 'id': 33, 'comm': 'https://slack.metakgp.org/', 'img': 'https://github.com/metakgp.png?size=50', 'intro': 'Gets your timetable from ERP and adds it to your Google Calendar or gives you an ICS file which you can add in any common calendar application.', 'mentor_email': 'i.nishantnikhil@gmail.com', 'tag': ['Python', 'Scraping', 'Google API', 'ERP'], 'intro_full': 'Gets your timetable from ERP and adds it to your Google Calendar or gives you an ICS file which you can add in any common calendar application.', 'mentor': 'Nishant Nikhil', 'link': 'https://github.com/metakgp/gyft', 'title': 'GYFT (GET YOUR FREAKING TIMETABLE)'},
{'btnid': 1034, 'id': 34, 'comm': 'https://groups.google.com/forum/#!forum/kwoc_hackathon_project/join', 'img': 'https://github.com/pv-912.png?size=50', 'intro': 'It was Idea to connect professor to  students via showing their availability in their office.  We have to make a firebase database which will be update the v...', 'mentor_email': 'nishant.sikarwar007@gmail.com', 'tag': ['Android', 'Databases'], 'intro_full': 'It was Idea to connect professor to  students via showing their availability in their office.  We have to make a firebase database which will be update the values in the list items (Names) shown in the app.', 'mentor': 'Nishant Singh Sikarwar', 'link': 'https://github.com/pv-912/Hackathon', 'title': 'HACKATHON'},
{'btnid': 1035, 'id': 35, 'comm': 'https://www.facebook.com/groups/166681887253832', 'img': 'https://github.com/djbarnwal.png?size=50', 'intro': 'A traditional hangman game build using React.', 'mentor_email': 'dhiraj@iitkgp.ac.in', 'tag': [' Web Development', ' JavaScript', 'CSS', 'ReactJS'], 'intro_full': 'A traditional hangman game build using React.', 'mentor': 'Dhiraj Kumar', 'link': 'https://github.com/djbarnwal/hangman', 'title': 'HANGMAN REACT GAME'},
{'btnid': 1036, 'id': 36, 'comm': 'https://slack.metakgp.org/', 'img': 'https://github.com/ghostwriternr.png?size=50', 'intro': 'The goal of this project is to create an API for KGP. Like with any API, the KGP API should be able to handle all sorts of data about say, departments, profe...', 'mentor_email': 'ghostwriternr@gmail.com', 'tag': ['Backend', 'API', 'Python', 'Databases'], 'intro_full': 'The goal of this project is to create an API for KGP. Like with any API, the KGP API should be able to handle all sorts of data about say, departments, professors or places.', 'mentor': 'Naresh', 'link': 'https://github.com/ghostwriternr/api', 'title': 'KGP API'},
{'btnid': 1037, 'id': 37, 'comm': 'mailto: kshitijsaraogi@gmail.com', 'img': 'https://github.com/kshitij10496.png?size=50', 'intro': 'Command Line Tool for looking up words', 'mentor_email': 'kshitijsaraogi@gmail.com', 'tag': ['Python', 'CLI', 'DBMS', 'SQL', 'OOP'], 'intro_full': 'Command Line Tool for looking up words', 'mentor': 'Kshitij Saraogi', 'link': 'https://github.com/kshitij10496/lexico', 'title': 'LEXICO'},
{'btnid': 1038, 'id': 38, 'comm': 'https://gitter.im/lterm/Lobby?utm_source=share-link&utm_medium=link&utm_campaign=share-link', 'img': 'https://github.com/sr6033.png?size=50', 'intro': 'lterm is an online Terminal Eminulator. It is a step by step tutorial that will teach you the bash commands by making you execute them.', 'mentor_email': 'shubhamrath.iiitb@gmail.com', 'tag': ['javascript', 'html', 'css', 'jquery'], 'intro_full': 'lterm is an online Terminal Eminulator. It is a step by step tutorial that will teach you the bash commands by making you execute them.', 'mentor': 'Shubham Rath', 'link': 'https://github.com/sr6033/lterm', 'title': 'LTERM'},
{'btnid': 1039, 'id': 39, 'comm': 'https://gitter.im/my-messenger-bot/Lobby', 'img': 'https://github.com/vernwalrahul.png?size=50', 'intro': "This is a simple python template that uses Flask to build a webhook for Facebook's Messenger Bot API. The aim is to build interactive chatbot with some added...", 'mentor_email': 'vernwalrahul@gmail.com', 'tag': ['Python', 'NLP', 'APIs', 'Virtual Assistant'], 'intro_full': "This is a simple python template that uses Flask to build a webhook for Facebook's Messenger Bot API. The aim is to build interactive chatbot with some added features of virtual assistant.", 'mentor': 'Rahul Vernwal', 'link': 'https://github.com/vernwalrahul/my-messenger-bot', 'title': 'MESSENGER BOT'},
{'btnid': 1040, 'id': 40, 'comm': 'https://slack.metakgp.org/', 'img': 'https://github.com/metakgp.png?size=50', 'intro': 'Self-sufficient docker configuration for running the Metakgp Mediawiki instance', 'mentor_email': 'kannan.siddharth12@gmail.com', 'tag': ['Docker', 'PHP', 'SysAdmin', 'Linux'], 'intro_full': 'Self-sufficient docker configuration for running the Metakgp Mediawiki instance', 'mentor': 'Siddharth Kannan', 'link': 'https://github.com/metakgp/metakgp-wiki', 'title': 'METAKGP WIKI: DOCKERIZED FOR FUN'},
{'btnid': 1041, 'id': 41, 'comm': 'http://metakgp-slack.herokuapp.com/', 'img': 'https://github.com/metakgp.png?size=50', 'intro': 'IITKGP Question paper search', 'mentor_email': 'athityakumar@gmail.com', 'tag': ['JS', 'Python', 'Ruby', 'JSON', 'Javascript'], 'intro_full': 'IITKGP Question paper search', 'mentor': 'Athitya Kumar', 'link': 'https://github.com/metakgp/mfqp', 'title': 'MFQP'},
{'btnid': 1042, 'id': 42, 'comm': 'https://groups.google.com/forum/#!forum/ml-starter-pack', 'img': 'https://github.com/aribis369.png?size=50', 'intro': 'A collection of Machine Learning algorithms written from sctrach. ', 'mentor_email': 'aribis369@gmail.com', 'tag': ['Python', 'Machine Learning'], 'intro_full': 'A collection of Machine Learning algorithms written from sctrach. ', 'mentor': 'Arindam Biswas', 'link': 'https://github.com/aribis369/ML-Starter-Pack', 'title': 'ML-STARTER-PACK'},
{'btnid': 1043, 'id': 43, 'comm': 'https://join.slack.com/t/kwoc2017-parth/shared_invite/enQtMjc1OTU3MDUwNzc0LTNkNzQzN2U5NzI0ZTNkM2I5MGM5MDIyYTYxMzFhNWYzNWYwMDIzMjNmYjM2MTA1NDc1NWU2Yjc0ZTYxNGZmNTA', 'img': 'https://github.com/Parth-Vader.png?size=50', 'intro': 'A command line tool to add your music and videos directly to several devices.', 'mentor_email': 'vermaparth97@gmail.com', 'tag': ['Python', 'Command-Line', 'Youtube-dl', 'Click'], 'intro_full': 'A command line tool to add your music and videos directly to several devices.', 'mentor': 'Parth Verma', 'link': 'https://github.com/Parth-Vader/MobOff', 'title': 'MOBOFF'},
{'btnid': 1044, 'id': 44, 'comm': 'https://gitter.im/OrkoHunter-kwoc/morse-talk', 'img': 'https://github.com/morse-talk.png?size=50', 'intro': ' A Python library written for Morse Code', 'mentor_email': 'aribis369@gmail.com', 'tag': ['Python', 'CLI', 'GUI', 'Tkinter', 'Matplotlib', 'Wave'], 'intro_full': ' A Python library written for Morse Code', 'mentor': 'Arindam Biswas', 'link': 'https://github.com/morse-talk/morse-talk', 'title': 'MORSE-TALK'},
{'btnid': 1045, 'id': 45, 'comm': 'https://slack.metakgp.org/', 'img': 'https://github.com/metakgp.png?size=50', 'intro': 'Aggregating news since antiquity', 'mentor_email': 'sayan.sinha@iitkgp.ac.in', 'tag': ['Python', 'scrapping', 'GraphQL', 'API', 'Django'], 'intro_full': 'Aggregating news since antiquity', 'mentor': 'Sayan Sinha', 'link': 'https://github.com/metakgp/naarad-source', 'title': 'NAARAD'},
{'btnid': 1046, 'id': 46, 'comm': 'https://groups.google.com/forum/#!forum/networkx-discuss', 'img': 'https://github.com/networkx.png?size=50', 'intro': 'NetworkX is a Python package for the Graph Theory and Complex Networks.', 'mentor_email': 'himanshu.mishra.kgp@gmail.com', 'tag': ['Python', 'Graph Theory', 'Algorithms', 'Library', 'Package'], 'intro_full': 'NetworkX is a Python package for the Graph Theory and Complex Networks.', 'mentor': 'Himanshu Mishra', 'link': 'https://github.com/networkx/networkx', 'title': 'NETWORKX'},
{'btnid': 1047, 'id': 47, 'comm': 'athityakumar@gmail.com', 'img': 'https://github.com/athityakumar.png?size=50', 'intro': "A Ruby implementation of Python's well known Graph library : networkx", 'mentor_email': 'athityakumar@gmail.com', 'tag': ['Ruby', 'Gem', 'Networkx', 'Graph Theory'], 'intro_full': "A Ruby implementation of Python's well known Graph library : networkx", 'mentor': 'Athitya Kumar', 'link': 'https://github.com/athityakumar/networkx.rb', 'title': 'NETWORKX.RB'},
{'btnid': 1048, 'id': 48, 'comm': 'https://groups.google.com/forum/#!forum/notes_app', 'img': 'https://github.com/ankita132.png?size=50', 'intro': 'An app on PHP to add, delete and edit notes ', 'mentor_email': '2ankitasahoo13@gmail.com', 'tag': ['css', 'javascript', 'PHP', 'ajax'], 'intro_full': 'An app on PHP to add, delete and edit notes ', 'mentor': 'Ankita Sahoo', 'link': 'https://github.com/ankita132/notes_app', 'title': 'NOTES APP'},
{'btnid': 1049, 'id': 49, 'comm': 'https://www.facebook.com/groups/552015885141292/', 'img': 'https://github.com/kaustubhhiware.png?size=50', 'intro': 'A terminal task-notifier that works across different command line emulators', 'mentor_email': 'hiwarekaustubh@gmail.com', 'tag': ['Bash', 'Terminal', 'Linux'], 'intro_full': 'A terminal task-notifier that works across different command line emulators', 'mentor': 'Kaustubh Hiware', 'link': 'https://github.com/kaustubhhiware/NotiFyre', 'title': 'NOTIFYRE'},
{'btnid': 1050, 'id': 50, 'comm': 'https://gitter.im/ankitjain28may/openchat', 'img': 'https://github.com/ankitjain28may.png?size=50', 'intro': 'OpenChat is an Open Source messaging platform where people can send messages to anyone registered to this platform', 'mentor_email': 'ankitjain28may77@gmail.com', 'tag': ['php', 'composer', 'JavaScript', 'ajax', 'websockets', 'html', 'css', 'jquery', 'gulp'], 'intro_full': 'OpenChat is an Open Source messaging platform where people can send messages to anyone registered to this platform', 'mentor': 'Ankit Jain', 'link': 'http://github.com/ankitjain28may/openchat', 'title': 'OPENCHAT'},
{'btnid': 1051, 'id': 51, 'comm': 'https://www.facebook.com/groups/127895284549751', 'img': 'https://github.com/harishnandan.png?size=50', 'intro': 'A very basic android implementation of the Pacman Game.', 'mentor_email': 'harishshivam@gmail.com', 'tag': ['Java', 'Android'], 'intro_full': 'A very basic android implementation of the Pacman Game.', 'mentor': 'Harish Nandan', 'link': 'https://github.com/harishnandan/Pacman-lvl1', 'title': 'PACMAN-LVL1'},
{'btnid': 1052, 'id': 52, 'comm': 'https://gitter.im/Password-Storage/Lobby', 'img': 'https://github.com/Pritom14.png?size=50', 'intro': 'Android application for storing all your passwords.', 'mentor_email': 'pritommazumdar1995@gmail.com', 'tag': ['Android', 'Java'], 'intro_full': 'Android application for storing all your passwords.', 'mentor': 'Pritom Mazumdar', 'link': 'https://github.com/Pritom14/Password-Storage', 'title': 'PASSWORD-STORAGE'},
{'btnid': 1053, 'id': 53, 'comm': 'https://gitter.im/OrkoHunter-kwoc/pep8speaks', 'img': 'https://github.com/OrkoHunter.png?size=50', 'intro': 'A GitHub integration to automatically review Python code style over Pull Requests', 'mentor_email': 'himanshu.mishra.kgp@gmail.com', 'tag': ['Python', 'Backend'], 'intro_full': 'A GitHub integration to automatically review Python code style over Pull Requests', 'mentor': 'Himanshu Mishra', 'link': 'https://github.com/OrkoHunter/pep8speaks', 'title': 'PEP8SPEAKS'},
{'btnid': 1054, 'id': 54, 'comm': 'https://gitter.im/nit-dgp/general', 'img': 'https://github.com/nitdgpos.png?size=50', 'intro': 'A file sharing web application over local network.', 'mentor_email': 'naveenkumarsangi@protonmail.com', 'tag': ['javascript', 'reactJS', 'file-uploads'], 'intro_full': 'A file sharing web application over local network.', 'mentor': 'Naveen Kumar Sangi', 'link': 'https://github.com/nitdgpos/pizilla', 'title': 'PIZILLA'},
{'btnid': 1055, 'id': 55, 'comm': 'https://slack.metakgp.org/', 'img': 'https://github.com/nishnik.png?size=50', 'intro': 'Create a dynamic queue in YouTube.', 'mentor_email': 'i.nishantnikhil@gmail.com', 'tag': ['JavaScript', 'YouTube', 'Chrome Extension'], 'intro_full': 'Create a dynamic queue in YouTube.', 'mentor': 'Nishant Nikhil', 'link': 'https://github.com/nishnik/Play_Next', 'title': 'PLAY NEXT'},
{'btnid': 1056, 'id': 56, 'comm': 'https://gitter.im/codeIIEST/Algorithms', 'img': 'https://github.com/codeIIEST.png?size=50', 'intro': 'A Repository to store implementation of some of the famous Data Structures and Algorithms (mainly in C/C++/Java/Python) for everyone to learn and contribute.', 'mentor_email': 'prateekkol21@gmail.com', 'tag': ['Python', 'Algorithms', 'Data Structures', 'C++', 'Java'], 'intro_full': 'A Repository to store implementation of some of the famous Data Structures and Algorithms (mainly in C/C++/Java/Python) for everyone to learn and contribute.', 'mentor': 'Prateek Chanda', 'link': 'https://github.com/codeIIEST/Algorithms', 'title': 'PLAYING WITH ALGORITHMS'},
{'btnid': 1057, 'id': 57, 'comm': 'https://gitter.im/PlotIt/Lobby', 'img': 'https://github.com/NITDgpOS.png?size=50', 'intro': 'A terminal and GUI based tool for quick visualisation of mathematical functions.', 'mentor_email': 'djmdeveloper060796@gmail.com', 'tag': ['Python', 'Plotting', 'Terminal', 'GUI'], 'intro_full': 'A terminal and GUI based tool for quick visualisation of mathematical functions.', 'mentor': 'Deepjyoti Mondal', 'link': 'https://github.com/NITDgpOS/PlotIt', 'title': 'PLOTIT'},
{'btnid': 1058, 'id': 58, 'comm': 'https://github.com/himanshub16/ProxyMan/issues', 'img': 'https://github.com/himanshub16.png?size=50', 'intro': 'Tool to configure system-wide proxy settings in Linux.', 'mentor_email': 'himanshushekharb16@gmail.com', 'tag': ['bash', 'shell', 'linux', 'proxy', 'script'], 'intro_full': 'Tool to configure system-wide proxy settings in Linux.', 'mentor': 'Himanshu Shekhar', 'link': 'https://github.com/himanshub16/ProxyMan', 'title': 'PROXYMAN'},
{'btnid': 1059, 'id': 59, 'comm': 'https://groups.google.com/forum/#!forum/kwoc17-react_google_map', 'img': 'https://github.com/ankita132.png?size=50', 'intro': 'An app on react where you can upload and view images at various locations on the earth', 'mentor_email': '2ankitasahoo13@gmail.com', 'tag': ['reactjs', 'firebase', 'css'], 'intro_full': 'An app on react where you can upload and view images at various locations on the earth', 'mentor': 'Ankita Sahoo', 'link': 'https://github.com/ankita132/react_google_map', 'title': 'REACT GOOGLE MAP'},
{'btnid': 1060, 'id': 60, 'comm': 'https://gitter.im/read-it/', 'img': 'https://github.com/dibyadas.png?size=50', 'intro': 'A chrome extension for mail tracking', 'mentor_email': 'dibyadas998@gmail.com', 'tag': ['Python', 'Chrome Extension', 'flask', 'gmail'], 'intro_full': 'A chrome extension for mail tracking', 'mentor': 'Dibya Prakash Das', 'link': 'https://github.com/dibyadas/read-it', 'title': 'READ-IT'},
{'btnid': 1061, 'id': 61, 'comm': 'https://www.facebook.com/groups/136133120486393/', 'img': 'https://github.com/harishnandan.png?size=50', 'intro': 'A web game based on reflection.', 'mentor_email': 'harishshivam@gmail.com', 'tag': ['CSS', 'Javascript', 'HTML'], 'intro_full': 'A web game based on reflection.', 'mentor': 'Harish Nandan', 'link': 'https://github.com/harishnandan/reflexio', 'title': 'REFLEXIO'},
{'btnid': 1062, 'id': 62, 'comm': 'https://groups.google.com/forum/#!forum/kwoc-2017-discussion-icyflame', 'img': 'https://github.com/icyflame.png?size=50', 'intro': 'Convert relative dates back to a date representation: 3 days ago => A date object for today - 3 days', 'mentor_email': 'kannan.siddharth12@gmail.com', 'tag': ['javascript', 'datetime', 'utility', 'tools', 'nodejs', 'NPM', 'module'], 'intro_full': 'Convert relative dates back to a date representation: 3 days ago => A date object for today - 3 days', 'mentor': 'Siddharth Kannan', 'link': 'https://github.com/icyflame/relative-date-reverse/issues', 'title': 'RELATIVE DATE: REVERSE'},
{'btnid': 1063, 'id': 63, 'comm': 'https://gitter.im/KgpKubs/Lobby', 'img': 'https://github.com/KgpKubs.png?size=50', 'intro': 'Collection of variants of RRT Path Planners', 'mentor_email': 'sayan.sinha@iitkgp.ac.in', 'tag': ['C++', 'AI', 'Path planning'], 'intro_full': 'Collection of variants of RRT Path Planners', 'mentor': 'Sayan Sinha', 'link': 'https://github.com/KgpKubs/RRT', 'title': 'RRT'},
{'btnid': 1064, 'id': 64, 'comm': 'https://gitter.im/rTunes-angular2/Lobby', 'img': 'https://github.com/jajodiaraghav.png?size=50', 'intro': 'Web application developed on Angular2 that uses API provided by last.fm. Find artists and display albums and tracks listings.', 'mentor_email': 'jajodia.raghav@gmail.com', 'tag': ['Angular2', 'JavaScript', 'Web Application', 'SPA', 'TypeScript'], 'intro_full': 'Web application developed on Angular2 that uses API provided by last.fm. Find artists and display albums and tracks listings.', 'mentor': 'Raghav Jajodia', 'link': 'https://github.com/jajodiaraghav/rTunes', 'title': 'RTUNES'},
{'btnid': 1065, 'id': 65, 'comm': 'https://join.slack.com/t/kwoc/shared_invite/enQtMjc2Njk1MTA5ODk0LTk4MTc4ODY5MjEzYWExNTcyYWM2NTRiMjQ1YzRhMzE3YWZlOTkzNDdkZTMzOWYxMDYxMDM3NzQ5MjdlNjFiYTY', 'img': 'https://github.com/vivonk.png?size=50', 'intro': "In Android there are many privacy issues, every time some application fetch your details that you don't want to let ope to anyone. To ensure that your data i...", 'mentor_email': 'nirmalsarswat400@gmail.com', 'tag': ['Android ', 'Security', 'Network'], 'intro_full': "In Android there are many privacy issues, every time some application fetch your details that you don't want to let ope to anyone. To ensure that your data is private I have the project in which we have to fake all possible bugs of privacy in Android and fix them into a small android app. Every time when ever some data travel from one end of user to some where else, we will notify about the privacy.", 'mentor': 'Nirmal Sarswat', 'link': 'https://github.com/vivonk/SaveMore', 'title': 'SAFEANDROID'},
{'btnid': 1066, 'id': 66, 'comm': 'https://groups.google.com/d/forum/sangitanlp', 'img': 'https://github.com/djokester.png?size=50', 'intro': 'A Natural Language Processing Toolkit for Indian Lamguages that utilize LSTMs for POS tagging.', 'mentor_email': 'samriddhidjokestersinha@gmail.com', 'tag': ['Python', 'NLP', 'Machine Learning', 'Scraping'], 'intro_full': 'A Natural Language Processing Toolkit for Indian Lamguages that utilize LSTMs for POS tagging.', 'mentor': 'Samriddhi Sinha', 'link': 'https://github.com/djokester/sangita', 'title': 'SANGITA'},
{'btnid': 1067, 'id': 67, 'comm': 'https://groups.google.com/forum/#!forum/sciruby-examples-discus', 'img': 'https://github.com/the-ethan-hunt.png?size=50', 'intro': 'SciRuby-examples is a guide for a newbie to dive into machine learning and natural language processing using an unconventional language: Ruby', 'mentor_email': 'dhruvgirishapte@gmail.com', 'tag': ['Ruby', 'Natural Language Processing', 'Deep Learning', 'Machine Learning', ' IRuby notebook'], 'intro_full': 'SciRuby-examples is a guide for a newbie to dive into machine learning and natural language processing using an unconventional language: Ruby', 'mentor': 'Dhruv Apte', 'link': 'https://github.com/the-ethan-hunt/sciruby-examples', 'title': 'SCIRUBY-EXAMPLES'},
{'btnid': 1068, 'id': 68, 'comm': 'https://join.slack.com/t/kwoc2017-parth/shared_invite/enQtMjc1OTU3MDUwNzc0LTNkNzQzN2U5NzI0ZTNkM2I5MGM5MDIyYTYxMzFhNWYzNWYwMDIzMjNmYjM2MTA1NDc1NWU2Yjc0ZTYxNGZmNTA', 'img': 'https://github.com/scrapy.png?size=50', 'intro': 'A Django web app for collecting various results for scrapy-bench and uploading it to web.', 'mentor_email': 'vermaparth97@gmail.com', 'tag': ['Python', 'Scrapy', 'Scraping', 'Benchmarking', 'Django'], 'intro_full': 'A Django web app for collecting various results for scrapy-bench and uploading it to web.', 'mentor': 'Parth Verma', 'link': 'https://github.com/scrapy/scrapy-bench-speedcenter', 'title': 'SCRAPY BENCH SPEEDCENTER'},
{'btnid': 1069, 'id': 69, 'comm': 'https://join.slack.com/t/kwoc2017-parth/shared_invite/enQtMjc1OTU3MDUwNzc0LTNkNzQzN2U5NzI0ZTNkM2I5MGM5MDIyYTYxMzFhNWYzNWYwMDIzMjNmYjM2MTA1NDc1NWU2Yjc0ZTYxNGZmNTA', 'img': 'https://github.com/scrapy.png?size=50', 'intro': 'A command-line interface for bench-marking Scrapy, that reflects real-world usage.', 'mentor_email': 'vermaparth97@gmail.com', 'tag': ['Python', 'Click', 'Scrapy', 'Scraping', 'Benchmarking', 'Memory-Profiling', 'Command-Line'], 'intro_full': 'A command-line interface for bench-marking Scrapy, that reflects real-world usage.', 'mentor': 'Parth Verma', 'link': 'https://github.com/scrapy/scrapy-bench', 'title': 'SCRAPY-BENCH'},
{'btnid': 1070, 'id': 70, 'comm': 'https://gitter.im/SecureSnaps55/Lobby', 'img': 'https://github.com/NITDgpOS.png?size=50', 'intro': 'Image Codec using Private-key cryptography ', 'mentor_email': 'aniqrah@gmail.com', 'tag': ['Python', 'Image', 'codec', 'encryption', 'cryptography'], 'intro_full': 'Image Codec using Private-key cryptography ', 'mentor': 'Aniq Ur Rahman', 'link': 'https://github.com/NITDgpOS/SecureSnaps', 'title': 'SECURESNAPS'},
{'btnid': 1071, 'id': 71, 'comm': 'https://join.slack.com/t/sensenetai/shared_invite/enQtMjc4MzQ5ODUzNzgzLThjYTNmMzE4MGQ1MGMyN2NiMWIxNzI1NTYwMjI5ODE4NWY5MDNmN2U5OTkwMGE4OTFiNjNjYmQ0YjgwNjBmZWU', 'img': 'https://github.com/jtoy.png?size=50', 'intro': 'TouchNet: a large scale dataset of 3D objects and a simulator for manipulating these objects for the purpose of researching and training AIs to learn and rea...', 'mentor_email': 'jtoy@jtoy.net', 'tag': ['Python', 'machinelearning', 'deeplearning', 'neuroscience', 'numpy', 'tensorflow', 'pytorch'], 'intro_full': 'TouchNet: a large scale dataset of 3D objects and a simulator for manipulating these objects for the purpose of researching and training AIs to learn and reason about their world via sensorimotor neural systems and touch.', 'mentor': 'Jason Toy', 'link': 'https://github.com/jtoy/sensenet', 'title': 'SENSENET'},
{'btnid': 1072, 'id': 72, 'comm': 'https://gitter.im/nn_sherlocked', 'img': 'https://github.com/nishnik.png?size=50', 'intro': 'Investigating properties of neural networks', 'mentor_email': 'i.nishantnikhil@gmail.com', 'tag': ['Python', 'Neural Networks', 'Deep Learning'], 'intro_full': 'Investigating properties of neural networks', 'mentor': 'Nishant Nikhil', 'link': 'https://github.com/nishnik/sherlocked', 'title': 'SHERLOCKED'},
{'btnid': 1073, 'id': 73, 'comm': 'https://seq2seq-git.slack.com', 'img': 'https://github.com/guillaume-chevalier.png?size=50', 'intro': 'Signal prediction with a Sequence-to-Sequence (seq2seq) Recurrent Neural Network (RNN) model in TensorFlow', 'mentor_email': 'guillaume-chevalier@outlook.com', 'tag': ['Python', 'Deep Learning', ' Machine Learning', ' Signal Prediction', 'RNN', 'seq2seq'], 'intro_full': 'Signal prediction with a Sequence-to-Sequence (seq2seq) Recurrent Neural Network (RNN) model in TensorFlow', 'mentor': 'Guillaume Chevalier', 'link': 'https://github.com/guillaume-chevalier/seq2seq-signal-prediction', 'title': 'SIGNAL PREDICTION WITH A SEQ2SEQ RNN'},
{'btnid': 1074, 'id': 74, 'comm': 'https://gitter.im/Snake-pygame/Lobby', 'img': 'https://github.com/jajodiaraghav.png?size=50', 'intro': 'Popular Snake game build using Pygame for desktop', 'mentor_email': 'jajodia.raghav@gmail.com', 'tag': ['Python', 'Pygame', 'Snake'], 'intro_full': 'Popular Snake game build using Pygame for desktop', 'mentor': 'Raghav Jajodia', 'link': 'https://github.com/jajodiaraghav/Snake', 'title': 'SNAKE'},
{'btnid': 1075, 'id': 75, 'comm': 'https://gitter.im/opencv-Snakes/Lobby', 'img': 'https://github.com/americast.png?size=50', 'intro': 'A simple game of snakes implemented in C++ and OpenCV', 'mentor_email': 'sayan.sinha@iitkgp.ac.in', 'tag': ['C++', 'Gaming', 'OpenCV'], 'intro_full': 'A simple game of snakes implemented in C++ and OpenCV', 'mentor': 'Sayan Sinha', 'link': 'https://github.com/americast/Snakes', 'title': 'SNAKES'},
{'btnid': 1076, 'id': 76, 'comm': 'https://gitter.im/ankitjain28may/Social-Media-Review-Platform', 'img': 'https://github.com/ankitjain28may.png?size=50', 'intro': 'It is a platform to keep an eye on all the posts shared, liked and commented by the people hired by you for marketing.', 'mentor_email': 'ankitjain28may77@gmail.com', 'tag': ['Python', 'Scraping', 'php', 'sentiment analysis', 'machine learning', 'laravel', 'facebook api', 'twitter api', 'HTML', 'CSS', 'Jquery', 'Javascript', 'Bootstrap'], 'intro_full': 'It is a platform to keep an eye on all the posts shared, liked and commented by the people hired by you for marketing.', 'mentor': 'Ankit Jain', 'link': 'https://github.com/ankitjain28may/Social-Media-Review-Platform', 'title': 'SOCIAL-MEDIA-REVIEW-PLATFORM'},
{'btnid': 1077, 'id': 77, 'comm': 'https://cvkgp.slack.com', 'img': 'https://github.com/sourishg.png?size=50', 'intro': 'Often for complicated tasks in computer vision it is required that a camera be calibrated. Camera calibration is a necessary step in 3D computer vision in or...', 'mentor_email': 'ragnarok0211@gmail.com', 'tag': ['Camera Calibration', 'Computer Vision', 'C++', 'OpenCV'], 'intro_full': 'Often for complicated tasks in computer vision it is required that a camera be calibrated. Camera calibration is a necessary step in 3D computer vision in order to extract metric information from 2D images. Stereo calibration is used to find the geometric transformations between two cameras, and the relationship between two image projections of a particular 3D scene. More details here: http://sourishghosh.com/2016/stereo-calibration-cpp-opencv/', 'mentor': 'Sourish Ghosh', 'link': 'https://github.com/sourishg/stereo-calibration', 'title': 'STEREO CAMERA CALIBRATION'},
{'btnid': 1078, 'id': 78, 'comm': 'https://riot.im/app/#/room/#sunpy-kwoc:matrix.org', 'img': 'https://github.com/sunpy.png?size=50', 'intro': 'SunPy is a community-developed free and open-source software package for solar physics. It aims to be provide a comprehensive data analysis environment that ...', 'mentor_email': 'nitin.iitkgp23@gmail.com', 'tag': ['Python', 'astronomy', 'sun', 'gsoc', 'scientific'], 'intro_full': 'SunPy is a community-developed free and open-source software package for solar physics. It aims to be provide a comprehensive data analysis environment that allows researchers within the field of solar physics to carry out their tasks with the minimal effort.  SunPy is written using the Python programming language and is build upon the scientific Python environment which includes several core packages such as NumPy, SciPy, Matplotlib and Pandas. Since SunPy deals with key astrophysical concepts, its development is closely associated with that of Astropy, which is a fundamental package within the Python astronomy ecosystem.', 'mentor': 'Nitin Choudhary', 'link': 'https://github.com/sunpy/sunpy', 'title': 'SUNPY'},
{'btnid': 1079, 'id': 79, 'comm': 'https://gitter.im/sympy/sympy', 'img': 'https://github.com/sympy.png?size=50', 'intro': 'A Python Library for symbolic Maths.', 'mentor_email': 'shivamvats.iitkgp@gmail.com', 'tag': ['Python', 'Maths ', 'Computation'], 'intro_full': 'A Python Library for symbolic Maths.', 'mentor': 'Shivam Vats', 'link': 'https://github.com/sympy/sympy', 'title': 'SYMPY'},
{'btnid': 1080, 'id': 80, 'comm': 'https://www.facebook.com/groups/301389363707310/', 'img': 'https://github.com/Pro-Panda.png?size=50', 'intro': 'CLI version of a moodle based "Nalanda: E-LMS of BITS Pilani" to show updates', 'mentor_email': 'f2016015@pilani.bits-pilani.ac.in', 'tag': ['Python', 'Scraping', 'GUI', 'CLI'], 'intro_full': 'CLI version of a moodle based "Nalanda: E-LMS of BITS Pilani" to show updates', 'mentor': 'Rahul Bothra', 'link': 'https://github.com/Pro-Panda/Termi-Nalanda', 'title': 'TERMI-NALANDA'},
{'btnid': 1081, 'id': 81, 'comm': 'athityakumar@gmail.com', 'img': 'https://github.com/athityakumar.png?size=50', 'intro': 'A tool to display the timetable. A Terminal timetable, if you will.', 'mentor_email': 'athityakumar@gmail.com', 'tag': ['Ruby', 'CLI'], 'intro_full': 'A tool to display the timetable. A Terminal timetable, if you will.', 'mentor': 'Athitya Kumar', 'link': 'https://github.com/athityakumar/timetable', 'title': 'TIMETABLE'},
{'btnid': 1082, 'id': 82, 'comm': 'https://titanic-survival.slack.com/', 'img': 'https://github.com/prateekiiest.png?size=50', 'intro': 'It is a project on Machine Learning which aims to predict survival of passengers on Titanic. Contributing to this will aim to create a concrete understanding...', 'mentor_email': 'prateekkol21@gmail.com', 'tag': ['Python', 'Machine Learning', 'ipython notebook', 'statistical analysis'], 'intro_full': 'It is a project on Machine Learning which aims to predict survival of passengers on Titanic. Contributing to this will aim to create a concrete understanding of ML for beginners and also help them go forward in Open Source', 'mentor': 'Prateek Chanda', 'link': 'https://github.com/prateekiiest/titanic_survival_exploration', 'title': 'TITANIC SURVIVAL EXPLORATION'},
{'btnid': 1083, 'id': 83, 'comm': 'https://groups.google.com/forum/#!forum/trend-analyzer', 'img': 'https://github.com/aribis369.png?size=50', 'intro': "Analyses trends in upcoming movie's anticipation. ", 'mentor_email': 'aribis369@gmail.com', 'tag': ['Python', 'Scraping', 'Machine Learning', 'MongoDB'], 'intro_full': "Analyses trends in upcoming movie's anticipation. ", 'mentor': 'Arindam Biswas', 'link': 'https://github.com/aribis369/Trend-Analyzer', 'title': 'TREND-ANALYZER'},
{'btnid': 1084, 'id': 84, 'comm': 'athityakumar@gmail.com', 'img': 'https://github.com/athityakumar.png?size=50', 'intro': "TV Series is a tool that scrapes Episode Synopsis' of popular TV Series' from websites like Wikipedia / IMDb and show in one place with a user-friendly navig...", 'mentor_email': 'athityakumar@gmail.com', 'tag': ['Web Scraping', 'Ruby', 'Website', 'Frontend'], 'intro_full': "TV Series is a tool that scrapes Episode Synopsis' of popular TV Series' from websites like Wikipedia / IMDb and show in one place with a user-friendly navigation UI.", 'mentor': 'Athitya Kumar', 'link': 'https://github.com/athityakumar/tvseries', 'title': 'TVSERIES'},
{'btnid': 1085, 'id': 85, 'comm': 'gitter.im/Typometer', 'img': 'https://github.com/himanshukumar660.png?size=50', 'intro': 'A cross platform application built on QT for measuring typing speed.', 'mentor_email': 'himanshukumar660@gmail.com', 'tag': ['C++', 'Qt', 'QMake'], 'intro_full': 'A cross platform application built on QT for measuring typing speed.', 'mentor': 'Himanshu Kumar', 'link': 'https://github.com/himanshukumar660/Typometer', 'title': 'TYPOMETER'},
{'btnid': 1086, 'id': 86, 'comm': 'https://gitter.im/urban-robot/Lobby', 'img': 'https://github.com/mubaris.png?size=50', 'intro': 'Reddit bot which replies to sarcastic comments', 'mentor_email': 'mubarishassannk@gmail.com', 'tag': ['Python', 'Machine Learning', 'NLP', 'Natural Language Processing'], 'intro_full': 'Reddit bot which replies to sarcastic comments', 'mentor': 'Mubaris NK', 'link': 'https://github.com/mubaris/urban-robot', 'title': 'URBAN ROBOT'},
{'btnid': 1087, 'id': 87, 'comm': 'https://gitter.im/modihere', 'img': 'https://github.com/modihere.png?size=50', 'intro': 'A basic URL-shortener made in Django framework.', 'mentor_email': 'nit.vivek@hotmail.com', 'tag': ['Python'], 'intro_full': 'A basic URL-shortener made in Django framework.', 'mentor': 'Vivek Modi', 'link': 'https://github.com/modihere/url-shortener', 'title': 'URL-SHORTENER'},
{'btnid': 1088, 'id': 88, 'comm': 'https://gitter.im/VoiceCalculator', 'img': 'https://github.com/mayank-kgp.png?size=50', 'intro': 'The goal of this project is to build a calculator which has speech reconition ability for input.', 'mentor_email': 'mayank.jindal5@gmail.com', 'tag': ['Android', 'Java'], 'intro_full': 'The goal of this project is to build a calculator which has speech reconition ability for input.', 'mentor': 'Mayank Jindal', 'link': 'https://github.com/mayank-kgp/VoiceCalculator', 'title': 'VOICE CALCULATOR'},
{'btnid': 1089, 'id': 89, 'comm': 'https://groups.google.com/forum/#!forum/weedongit', 'img': 'https://github.com/rava-dosa.png?size=50', 'intro': 'A video chat for LAN based on tcp. Beginner friendly project', 'mentor_email': 'apoorvakumar169@gmail.com', 'tag': ['C++', 'Socket', 'OpenCv'], 'intro_full': 'A video chat for LAN based on tcp. Beginner friendly project', 'mentor': 'Apoorva Kumar', 'link': 'https://github.com/rava-dosa/Weed', 'title': 'WEED'},
{'btnid': 1090, 'id': 90, 'comm': 'https://groups.google.com/forum/#!forum/whats-in-the-news-geek', 'img': 'https://github.com/aribis369.png?size=50', 'intro': 'A CLI tool to bring all the latest news to your terminal.', 'mentor_email': 'aribis369@gmail.com', 'tag': ['Python', 'CLI', 'API'], 'intro_full': 'A CLI tool to bring all the latest news to your terminal.', 'mentor': 'Arindam Biswas', 'link': 'https://github.com/aribis369/Whats-in-the-news-GEEK', 'title': 'WHATS-IN-THE-NEWS-GEEK'},
{'btnid': 1091, 'id': 91, 'comm': 'https://join.slack.com/t/kwoc2017-parth/shared_invite/enQtMjc1OTU3MDUwNzc0LTNkNzQzN2U5NzI0ZTNkM2I5MGM5MDIyYTYxMzFhNWYzNWYwMDIzMjNmYjM2MTA1NDc1NWU2Yjc0ZTYxNGZmNTA', 'img': 'https://github.com/Parth-Vader.png?size=50', 'intro': 'Searches for recent Youtube videos opened and displays them in a list form.', 'mentor_email': 'vermaparth97@gmail.com', 'tag': ['Chrome', 'Extension', 'JavaScript', 'Data-Analytics', 'Databases'], 'intro_full': 'Searches for recent Youtube videos opened and displays them in a list form.', 'mentor': 'Parth Verma', 'link': 'https://github.com/Parth-Vader/YoutubeDataCollector', 'title': 'YOUTUBE DATA COLLECTOR'},
{'btnid': 1092, 'id': 92, 'comm': 'https://gitter.im/fast-playlist', 'img': 'https://github.com/udiboy1209.png?size=50', 'intro': 'If you use YouTube to listen to music constantly while working or studying, this WebApp is for you. It works like a Music Player for YouTube, where you can r...', 'mentor_email': 'mudeshi1209@gmail.com', 'tag': ['javascript', 'web-app', ' youtube-api', 'jquery'], 'intro_full': 'If you use YouTube to listen to music constantly while working or studying, this WebApp is for you. It works like a Music Player for YouTube, where you can rapidly create a playlist by searching videos and adding them. Fast re-ordering, Repeat All, Repeat One, Shuffle features make it feel like a music player.', 'mentor': 'Meet Udeshi', 'link': 'https://github.com/udiboy1209/fast_playlist', 'title': 'YOUTUBE FAST PLAYLIST'},

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
