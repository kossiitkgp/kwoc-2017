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
      {'btnid': 1001, 'intro': 'A pygame implementation of the game 2048.', 'link': 'https://github.com/tibrewalpratik17/2048_.git', 'id': 1, 'mentor_email': 'tibrewalpratik17@gmail.com', 'img': 'https://github.com/tibrewalpratik17.png?size=50', 'title': '2048_', 'tag': ['Python', 'Pygame'], 'mentor': 'Pratik Tibrewal', 'comm': 'https://groups.google.com/d/forum/kwoc2017_project2048_', 'intro_full': 'A pygame implementation of the game 2048.'},
{'btnid': 1002, 'intro': 'A central repository for notes, papers, lab manuals of all departments of IIT KGP. Backend based in django.', 'link': 'https://github.com/Vipul999ujawane/acad-search', 'id': 2, 'mentor_email': 'vipul999ujawane@gmail.com', 'img': 'https://github.com/Vipul999ujawane.png?size=50', 'title': 'ACAD-SEARCH', 'tag': ['Python', 'Django', 'Javascript', 'Jquery', 'HTML', 'CSS'], 'mentor': 'Vipul Ujawane', 'comm': ' gitter.im/acad-search ', 'intro_full': 'A central repository for notes, papers, lab manuals of all departments of IIT KGP. Backend based in django.'},
{'btnid': 1003, 'intro': 'Air Hockey game created using pygame ', 'link': 'https://github.com/NITDgpOS/AirHockey', 'id': 3, 'mentor_email': 'aniqrah@gmail.com', 'img': 'https://github.com/NITDgpOS.png?size=50', 'title': 'AIRHOCKEY', 'tag': ['Python', 'AI', 'Game', 'Pygame', 'Physics'], 'mentor': 'Aniq Ur Rahman', 'comm': 'https://gitter.im/AirHockey55/Lobby', 'intro_full': 'Air Hockey game created using pygame '},
{'btnid': 1004, 'intro': 'An all-in-one inventory and accounts solution for Chemist shops (both wholesale and retail) as per new Indian taxation standards.', 'link': 'https://github.com/alchemsynergy/alchem', 'id': 4, 'mentor_email': 'techfreakworm@gmail.com | rajadelhi94@gmail.com | vipul.gyl12@gmail.com\r\n', 'img': 'https://github.com/alchemsynergy.png?size=50', 'title': 'ALCHEM DESKTOP', 'tag': ['Java', 'JavaFX', 'XML', 'CSS', 'PostgreSQL'], 'mentor': 'Mayank Gupta | Ankit Kumar | Vipul Goyal', 'comm': 'https://join.slack.com/t/alchemsynergy/shared_invite/enQtMjU0NjUwMzAyNTgzLTM0OTNlMTg3ZDk1MmQ4ODdkYzM2YTA3MTE2MGM4ZTQ1ODU5ZTc3YTA4ODY5MWI2ZTAzZDM5MjEzOGM3N2FhYjY', 'intro_full': 'An all-in-one inventory and accounts solution for Chemist shops (both wholesale and retail) as per new Indian taxation standards.'},
{'btnid': 1005, 'intro': 'Artificial Neural Network from scratch in Julia', 'link': 'https://github.com/americast/ANN', 'id': 5, 'mentor_email': 'sayan.sinha@iitkgp.ac.in', 'img': 'https://github.com/americast.png?size=50', 'title': 'ANN', 'tag': ['Julia', 'ANN', 'DL', 'ML'], 'mentor': 'Sayan Sinha', 'comm': 'https://gitter.im/ANN-julia/Lobby', 'intro_full': 'Artificial Neural Network from scratch in Julia'},
{'btnid': 1006, 'intro': 'Personal Assistant for google chrome', 'link': 'https://github.com/Anna-Assistant/Anna', 'id': 6, 'mentor_email': 'iim2014008@iiita.ac.in', 'img': 'https://github.com/Anna-Assistant.png?size=50', 'title': 'ANNA ASSISTANT', 'tag': ['javascript', 'chrome extension', 'html', 'css'], 'mentor': 'Gautham Santhosh', 'comm': 'https://anna.zulipchat.com/', 'intro_full': 'Personal Assistant for google chrome'},
{'btnid': 1007, 'intro': 'An architecture automation tool that converts a pencil drawn sketch to a rendered plan instantly', 'link': 'https://github.com/iashris/archdraw', 'id': 7, 'mentor_email': 'ashris@mit.edu', 'img': 'https://github.com/iashris.png?size=50', 'title': 'ARCHDRAW', 'tag': ['javascript', 'p5js', 'design', 'image processing', 'computer vision'], 'mentor': 'Ashris Choudhury', 'comm': 'https://www.facebook.com/Ashris', 'intro_full': 'An architecture automation tool that converts a pencil drawn sketch to a rendered plan instantly'},
{'btnid': 1008, 'intro': ' A curated list of adages, psychological syndromes and behaviour explaining aphorisms. ', 'link': 'https://github.com/icyflame/awesome-social-science', 'id': 8, 'mentor_email': 'kannan.siddharth12@gmail.com', 'img': 'https://github.com/icyflame.png?size=50', 'title': 'AWESOME SOCIAL SCIENCE', 'tag': ['social science', 'psychology', 'syndromes', 'behavior', 'awesome-list', 'non programming'], 'mentor': 'Siddharth Kannan', 'comm': 'https://groups.google.com/forum/#!forum/kwoc-2017-discussion-icyflame', 'intro_full': ' A curated list of adages, psychological syndromes and behaviour explaining aphorisms. '},
{'btnid': 1009, 'intro': 'B.E.N.J.I., short for Brilliant and Efficient non-Javascript enabled Intelligence is a digital assistant that can help do several regular tasks on the laptop...', 'link': 'https://github.com/the-ethan-hunt/B.E.N.J.I.', 'id': 9, 'mentor_email': 'dhruvgirishapte@gmail.com', 'img': 'https://github.com/the-ethan-hunt.png?size=50', 'title': 'B.E.N.J.I.', 'tag': ['Python', 'digital-assistant', 'speech-to-text', 'speech-recognition'], 'mentor': 'Dhruv Apte', 'comm': 'https://groups.google.com/forum/#!forum/benji-discussion', 'intro_full': 'B.E.N.J.I., short for Brilliant and Efficient non-Javascript enabled Intelligence is a digital assistant that can help do several regular tasks on the laptop. Its numerous tasks include searching on Google, Wiki search, opening any Webpage, fetching news from several news agencies. The assistant can be activated and operated using voice commands. The assistant is yet undergoing changes for operating in a Linux and MacOS operating system'},
{'btnid': 1010, 'intro': '--- A book sharing (PDF/EBOOK) platform ---  The project contains both   1. Android App   2. Website User can access the server from both.  Giving users the ...', 'link': 'https://github.com/gmonetix/BooksPivot', 'id': 10, 'mentor_email': 'gmonetix@gmail.com', 'img': 'https://github.com/gmonetix.png?size=50', 'title': 'BOOKS PIVOT', 'tag': ['Java', 'Android Studio', 'Firebase', 'Web Server', 'Web-D'], 'mentor': 'Gaurav Bordoloi', 'comm': 'https://gitter.im/gmonetix/BooksPivot-KWOC', 'intro_full': '--- A book sharing (PDF/EBOOK) platform ---  The project contains both   1. Android App   2. Website User can access the server from both.  Giving users the opportunity to upload/download infinite number of files. Each download of a file will be counted on server and based on higest number of downloads and ratings, the reputation of the user profile will be updated.'},
{'btnid': 1011, 'intro': 'Breakout is a Atari-Breakout(Smashing) desktop game developed using Electron and Javascript.', 'link': 'https://github.com/jajodiaraghav/breakout', 'id': 11, 'mentor_email': 'jajodia.raghav@gmail.com', 'img': 'https://github.com/jajodiaraghav.png?size=50', 'title': 'BREAKOUT', 'tag': ['Electronjs', 'JavaScript', 'Desktop Game', 'Smashing'], 'mentor': 'Raghav Jajodia', 'comm': 'https://gitter.im/breakout-electronjs/breakout', 'intro_full': 'Breakout is a Atari-Breakout(Smashing) desktop game developed using Electron and Javascript.'},
{'btnid': 1012, 'intro': "The goal of this project would be to use Facebook's graph API to fetch all the latest songs posted to the Facebook group Listen To This KGP and link them wit...", 'link': 'https://github.com/lttkgp/C-3PO', 'id': 12, 'mentor_email': 'ghostwriternr@gmail.com', 'img': 'https://github.com/lttkgp.png?size=50', 'title': 'C-3PO', 'tag': ['Public APIs', 'Databases', 'Machine Learning', 'Python'], 'mentor': 'Naresh', 'comm': 'https://slack.metakgp.org/', 'intro_full': "The goal of this project would be to use Facebook's graph API to fetch all the latest songs posted to the Facebook group Listen To This KGP and link them with proper metadata from one of the popular public music metadata APIs like Musixmatch. Once fetched, all this information is to be properly stored in a database for later access from APIs and for running machine learning models to identify listening trends, clustering users and giving recommendations."},
{'btnid': 1013, 'intro': 'An attempt at a clear, minimalistic code compiler / interpreter.', 'link': 'https://github.com/kaustubhhiware/c0derunR', 'id': 13, 'mentor_email': 'hiwarekaustubh@gmail.com', 'img': 'https://github.com/kaustubhhiware.png?size=50', 'title': 'C0DERUNR', 'tag': ['Python', 'Django', 'UI', 'Natural Language Processing'], 'mentor': 'Kaustubh Hiware', 'comm': 'https://groups.google.com/forum/#!forum/c0derunr', 'intro_full': 'An attempt at a clear, minimalistic code compiler / interpreter.'},
{'btnid': 1014, 'intro': 'Packagement management system for haskell similar to npm for node.js', 'link': 'https://github.com/haskell/cabal', 'id': 14, 'mentor_email': 'pranit.bauva@gmail.com', 'img': 'https://github.com/haskell.png?size=50', 'title': 'CABAL', 'tag': ['haskell ', 'cabal', 'Package Management'], 'mentor': 'Pranit Bauva', 'comm': '#cabal on freenode IRC and Github issues', 'intro_full': 'Packagement management system for haskell similar to npm for node.js'},
{'btnid': 1015, 'intro': 'Implementation of Segnet on a cascading architecture', 'link': 'https://github.com/americast/cascade-segnet-tf', 'id': 15, 'mentor_email': 'sayan.sinha@iitkgp.ac.in', 'img': 'https://github.com/americast.png?size=50', 'title': 'CASCADE SEGNET', 'tag': ['Python', 'AI', 'CNN', 'ML', 'DL', 'Encoder-decoder'], 'mentor': 'Sayan Sinha', 'comm': 'https://gitter.im/Cascade-Segnet-TF/Lobby', 'intro_full': 'Implementation of Segnet on a cascading architecture'},
{'btnid': 1016, 'intro': 'Wikibot to track user contributions', 'link': 'https://github.com/metakgp/chitragupta/', 'id': 16, 'mentor_email': 'rameshwar.zorro@gmail.com', 'img': 'https://github.com/metakgp.png?size=50', 'title': 'CHITRAGUPTA', 'tag': ['Python', 'Github-API', 'pywikibot'], 'mentor': 'Rameshwar Bhaskaran', 'comm': 'https://groups.google.com/forum/?hl=en-GB#!forum/metakgp-chitragupta', 'intro_full': 'Wikibot to track user contributions'},
{'btnid': 1017, 'intro': "Find out how long it takes you to solve the Rubik's Cube: without leaving your command line", 'link': 'https://github.com/icyflame/cli-cube-timer/issues', 'id': 17, 'mentor_email': 'kannan.siddharth12@gmail.com', 'img': 'https://github.com/icyflame.png?size=50', 'title': 'CLI CUBE TIMER', 'tag': ['javascript', 'tools', 'nodejs', 'NPM', 'module', "rubik's cube", 'timer', 'state machine'], 'mentor': 'Siddharth Kannan', 'comm': 'https://groups.google.com/forum/#!forum/kwoc-2017-discussion-icyflame', 'intro_full': "Find out how long it takes you to solve the Rubik's Cube: without leaving your command line"},
{'btnid': 1018, 'intro': 'A scratch implementation of Convolutional Neural Network in python without the use of any deep learning library tested over data sets like CIFAR-10 for Objec...', 'link': 'https://github.com/zishansami102/CNN-from-Scratch', 'id': 18, 'mentor_email': 'zishansami102@gmail.com', 'img': 'https://github.com/zishansami102.png?size=50', 'title': 'CNN-FROM-SCRATCH', 'tag': ['Machine Learning', 'Deep Learning', 'Digit Recognition', 'Python', 'Flask', 'Javascript', 'HTML'], 'mentor': 'Zishan Sami', 'comm': 'https://groups.google.com/forum/#!forum/cnn-from-scratch', 'intro_full': 'A scratch implementation of Convolutional Neural Network in python without the use of any deep learning library tested over data sets like CIFAR-10 for Object Detection & MNIST for Digit Recognition'},
{'btnid': 1019, 'intro': 'coala provides a unified interface for linting and fixing code with a single configuration file, regardless of the programming languages used. You can use co...', 'link': 'https://github.com/coala/', 'id': 19, 'mentor_email': 'yash.nisar@somaiya.edu', 'img': 'https://github.com/coala.png?size=50', 'title': 'COALA', 'tag': ['Python', 'code-analysis', 'linter', 'languages', 'generic'], 'mentor': 'Yash Nisar', 'comm': 'https://gitter.im/coala/coala', 'intro_full': 'coala provides a unified interface for linting and fixing code with a single configuration file, regardless of the programming languages used. You can use coala from within your favorite editor, integrate it with your CI, get the results as JSON, or customize it to your needs with its flexible configuration syntax.  coala has a set of official bears (plugins) for several languages, including popular languages such as C/C++, Python, JavaScript, CSS, Java and many more, in addition to some generic language independent algorithms.'},
{'btnid': 1020, 'intro': 'This repository contains a curated list of some of the awesome small projects made in Python that you can code away this summer.  It includes analysis of dif...', 'link': 'https://github.com/prateekiiest/Code-Sleep-Python', 'id': 20, 'mentor_email': 'prateekkol21@gmail.com', 'img': 'https://github.com/prateekiiest.png?size=50', 'title': 'CODE SLEEP PYTHON', 'tag': ['Python', 'Games', 'Machine Learning', 'Algorithms ', 'Desktop Applications'], 'mentor': 'Prateek Chanda', 'comm': 'https://code-sleep-python.slack.com/threads/', 'intro_full': 'This repository contains a curated list of some of the awesome small projects made in Python that you can code away this summer.  It includes analysis of different Python modules, a deep analysis of the Python statistics modules and dataframes like Pandas.  It has some projects on classification, correlation and regression which are the fundamental building blocks of Machine Learning and Neural Networks. It also involves projects on Desktop Application and simple games. This repository hosts to 40 participants during Hacktoberfest'},
{'btnid': 1021, 'intro': 'It is a platform where students use to code online like many competative sites. It is a college competative platform for teacher-student interaction. Teacher...', 'link': 'https://github.com/ncs-jss/Code-Pad', 'id': 21, 'mentor_email': 'ankitjain28may77@gmail.com', 'img': 'https://github.com/ncs-jss.png?size=50', 'title': 'CODE-PAD', 'tag': ['php', 'Laravel', 'composer', 'html', 'css', 'javascript', 'jquery', 'bootstrap', 'mysql'], 'mentor': 'Ankit Jain', 'comm': 'https://gitter.im/ankitjain28may/Code-Pad', 'intro_full': 'It is a platform where students use to code online like many competative sites. It is a college competative platform for teacher-student interaction. Teachers organise events for the students. This improves the skills set of students.'},
{'btnid': 1022, 'intro': "A Ruby gem that beautifies the terminal's ls command, with color and font-awesome icons.", 'link': 'https://github.com/athityakumar/colorls', 'id': 22, 'mentor_email': 'athityakumar@gmail.com', 'img': 'https://github.com/athityakumar.png?size=50', 'title': 'COLORLS', 'tag': ['Ruby', 'CLI'], 'mentor': 'Athitya Kumar', 'comm': 'athityakumar@gmail.com', 'intro_full': "A Ruby gem that beautifies the terminal's ls command, with color and font-awesome icons."},
{'btnid': 1023, 'intro': 'CLI for getting update of live cricket matches', 'link': 'https://github.com/sipah00/CrickFev', 'id': 23, 'mentor_email': 'shubhamsipah00@gmail.com', 'img': 'https://github.com/sipah00.png?size=50', 'title': 'CRICKFEV', 'tag': ['Python', 'Scraping', 'click', 'cli'], 'mentor': 'shubham maddhashiya', 'comm': 'https://join.slack.com/t/crickkwoc/shared_invite/enQtMjc0NDUyNTU3NzE1LWFmOGI5MDBhMzBmNmJjMTM0ZjhjMTBhNTIzY2VhNTI5N2ZkNjVhYTNkZTUyNGMyNmMwMGE0NjY2OGM1YmY4NDg', 'intro_full': 'CLI for getting update of live cricket matches'},
{'btnid': 1024, 'intro': 'Amazing Github Projects as a Feed', 'link': 'https://github.com/mubaris/curiosity', 'id': 24, 'mentor_email': 'mubarishassannk@gmail.com', 'img': 'https://github.com/mubaris.png?size=50', 'title': 'CURIOSITY', 'tag': ['Javascript', 'Node.js', 'MongoDB', 'API', 'Github API', 'WebApp'], 'mentor': 'Mubaris NK', 'comm': 'https://gitter.im/curiositylab/curiosity', 'intro_full': 'Amazing Github Projects as a Feed'},
{'btnid': 1025, 'intro': 'The dashboard would serve as the central access point for several projects under MetaKGP. The goal is to provide the KGP community an easy to use dashboard w...', 'link': 'https://github.com/ghostwriternr/dashboard', 'id': 25, 'mentor_email': 'ghostwriternr@gmail.com', 'img': 'https://github.com/ghostwriternr.png?size=50', 'title': 'DASHBOARD', 'tag': ['React', 'Javascript', 'Frontend'], 'mentor': 'Naresh', 'comm': 'https://slack.metakgp.org/', 'intro_full': 'The dashboard would serve as the central access point for several projects under MetaKGP. The goal is to provide the KGP community an easy to use dashboard with useful utilities meant for students.'},
{'btnid': 1026, 'intro': 'A terminal-data controller with dynamic auto-complete features, that is built with ruby.', 'link': 'https://github.com/athityakumar/data', 'id': 26, 'mentor_email': 'athityakumar@gmail.com', 'img': 'https://github.com/athityakumar.png?size=50', 'title': 'DATA', 'tag': ['Ruby', 'CLI'], 'mentor': 'Athitya Kumar', 'comm': 'athityakumar@gmail.com', 'intro_full': 'A terminal-data controller with dynamic auto-complete features, that is built with ruby.'},
{'btnid': 1027, 'intro': 'Using Deep Learning to predict properties of Chemicals', 'link': 'https://github.com/AvijitGhosh82/DeepChem', 'id': 27, 'mentor_email': 'avijitg22@gmail.com', 'img': 'https://github.com/AvijitGhosh82.png?size=50', 'title': 'DEEPCHEM', 'tag': ['Python', 'Scraping', 'Tensorflow', 'Deep Learning', 'Neural Network', 'Data Collection', 'Word2Vec'], 'mentor': 'Avijit Ghosh', 'comm': 'https://gitter.im/Deep-Chem', 'intro_full': 'Using Deep Learning to predict properties of Chemicals'},
{'btnid': 1028, 'intro': 'It is an hybrid app to be developed for mess related activities and in-hall notifications for increasing convenience to boarders and bringing transparency in...', 'link': 'https://github.com/sandeepsharma-kgp/DigiNehruApk', 'id': 28, 'mentor_email': 'sandeepsharma.iit@gmail.com', 'img': 'https://github.com/sandeepsharma-kgp.png?size=50', 'title': 'DIGINEHRU', 'tag': ['Python', 'Django', 'JavaScript', 'Android', 'iOS', 'AWS'], 'mentor': 'Sandeep Sharma', 'comm': 'https://diginehruapp.slack.com/, https://www.facebook.com/sandeepsharma.iit', 'intro_full': 'It is an hybrid app to be developed for mess related activities and in-hall notifications for increasing convenience to boarders and bringing transparency into mess system of hall.'},
{'btnid': 1029, 'intro': 'A program which accepts the id of a Facebook page and transforms into a table of the latest posts and comments.', 'link': 'https://github.com/Parth-Vader/FB-Spider', 'id': 29, 'mentor_email': 'vermaparth97@gmail.com', 'img': 'https://github.com/Parth-Vader.png?size=50', 'title': 'FB-SPIDER', 'tag': ['Python', 'Spider', 'Facebook-API', 'Graph-API'], 'mentor': 'Parth Verma', 'comm': 'https://join.slack.com/t/kwoc2017-parth/shared_invite/enQtMjc1OTU3MDUwNzc0LTNkNzQzN2U5NzI0ZTNkM2I5MGM5MDIyYTYxMzFhNWYzNWYwMDIzMjNmYjM2MTA1NDc1NWU2Yjc0ZTYxNGZmNTA', 'intro_full': 'A program which accepts the id of a Facebook page and transforms into a table of the latest posts and comments.'},
{'btnid': 1030, 'intro': 'A free, open-source, extensible and cross system for creating rewards, loots and drops to be used in games built on the Unity engine.', 'link': 'https://github.com/amrit-choudhary/UnityChestDropSystem', 'id': 30, 'mentor_email': 'albela.amrit@gmail.com', 'img': 'https://github.com/amrit-choudhary.png?size=50', 'title': 'GAME REWARDS SYSTEM', 'tag': ['Gaming'], 'mentor': 'Amrit Choudhary', 'comm': 'https://groups.google.com/d/forum/game-rewards-system-channel', 'intro_full': 'A free, open-source, extensible and cross system for creating rewards, loots and drops to be used in games built on the Unity engine.'},
{'btnid': 1031, 'intro': 'Implement GANs in Pytorch and Basic Numpy from the starter code', 'link': 'https://github.com/sangeet259/Generative_Adversarial_Networks', 'id': 31, 'mentor_email': 'mail2sangeetmishra@gmail.com', 'img': 'https://github.com/sangeet259.png?size=50', 'title': 'GENERATIVE ADVERSARIAL NETWORKS(GANS)', 'tag': ['Python', 'PyTorch', 'Machine Learning', 'Deep Learning', 'Segmentation', 'Style Transfer'], 'mentor': 'Sangeet Kumar Mishra', 'comm': 'https://kwoc-17.slack.com/', 'intro_full': 'Implement GANs in Pytorch and Basic Numpy from the starter code'},
{'btnid': 1032, 'intro': 'Git - fast, scalable, distributed revision control system', 'link': 'https://github.com/git/git/', 'id': 32, 'mentor_email': 'pranit.bauva@gmail.com', 'img': 'https://github.com/git.png?size=50', 'title': 'GIT', 'tag': ['C', 'Shell'], 'mentor': 'Pranit Bauva', 'comm': 'Mailing lists (git@vger.kernel.org)', 'intro_full': 'Git - fast, scalable, distributed revision control system'},
{'btnid': 1033, 'intro': "A module to interact with github's public API. Good place to start open-source contribution.", 'link': 'https://github.com/demfier/gitpub', 'id': 33, 'mentor_email': 'sahu.gaurav719@gmail.com', 'img': 'https://github.com/demfier.png?size=50', 'title': 'GITPUB', 'tag': ['Python Library', 'GithubAPI'], 'mentor': 'Gaurav Sahu', 'comm': 'https://groups.google.com/forum/#!forum/gitpub', 'intro_full': "A module to interact with github's public API. Good place to start open-source contribution."},
{'btnid': 1034, 'intro': "This program is a Python script that downloads all attachments found in the inbox of the user's Gmail account, based on a specific sender's address.", 'link': 'https://github.com/ashishkg0022/gmail-attachments', 'id': 34, 'mentor_email': 'ashishkg0022@gmail.com', 'img': 'https://github.com/ashishkg0022.png?size=50', 'title': 'GMAIL-ATTACHMENTS', 'tag': [' IMAP  ', 'Gmail', 'Python Script'], 'mentor': 'Ashish Kumar Gaurav', 'comm': 'https://groups.google.com/d/forum/gmail-attachments', 'intro_full': "This program is a Python script that downloads all attachments found in the inbox of the user's Gmail account, based on a specific sender's address."},
{'btnid': 1035, 'intro': 'An easy-to-use python client for Google News feeds.', 'link': 'https://github.com/nikhilkumarsingh/gnewsclient', 'id': 35, 'mentor_email': 'nikhilksingh97@gmail.com', 'img': 'https://github.com/nikhilkumarsingh.png?size=50', 'title': 'GNEWSCLIENT', 'tag': ['python', 'scraping', 'news-client', 'python-package'], 'mentor': 'Nikhil Kumar Singh', 'comm': 'https://groups.google.com/forum/#!forum/kwoc-gnewsclient', 'intro_full': 'An easy-to-use python client for Google News feeds.'},
{'btnid': 1036, 'intro': 'A community clusters detection app that can take an edgelist as an input and generate an interactive force directed graph and different information like the ...', 'link': 'https://github.com/dibyadas/d3-force-directed-graph/', 'id': 36, 'mentor_email': 'dibyadas998@gmail.com', 'img': 'https://github.com/dibyadas.png?size=50', 'title': 'GRAPHCLUSTERS', 'tag': ['d3.js', 'graph', 'networkx', 'python', 'javascript'], 'mentor': 'Dibya Prakash Das', 'comm': 'https://gitter.im/GraphClusters/Lobby', 'intro_full': 'A community clusters detection app that can take an edgelist as an input and generate an interactive force directed graph and different information like the degree centrality, betweenness centrality and clustering co-efficients are displayed.'},
{'btnid': 1037, 'intro': 'It helps anyone see paths drawn from different path planners and also tune the parameters', 'link': 'https://github.com/KgpKubs/Gui-PathPlanners', 'id': 37, 'mentor_email': 'ashishkg0022@gmail.com', 'img': 'https://github.com/KgpKubs.png?size=50', 'title': 'GUI-PATHPLANNERS', 'tag': ['PyQt4 ', 'RRTs', 'ROS'], 'mentor': 'Ashish Kumar Gaurav', 'comm': 'https://gitter.im/KgpKubs/Lobby', 'intro_full': 'It helps anyone see paths drawn from different path planners and also tune the parameters'},
{'btnid': 1038, 'intro': 'Gets your timetable from ERP and adds it to your Google Calendar or gives you an ICS file which you can add in any common calendar application.', 'link': 'https://github.com/metakgp/gyft', 'id': 38, 'mentor_email': 'i.nishantnikhil@gmail.com', 'img': 'https://github.com/metakgp.png?size=50', 'title': 'GYFT (GET YOUR FREAKING TIMETABLE)', 'tag': ['Python', 'Scraping', 'Google API', 'ERP'], 'mentor': 'Nishant Nikhil', 'comm': 'https://slack.metakgp.org/', 'intro_full': 'Gets your timetable from ERP and adds it to your Google Calendar or gives you an ICS file which you can add in any common calendar application.'},
{'btnid': 1039, 'intro': 'It was Idea to connect professor to  students via showing their availability in their office.  We have to make a firebase database which will be update the v...', 'link': 'https://github.com/pv-912/Hackathon', 'id': 39, 'mentor_email': 'nishant.sikarwar007@gmail.com', 'img': 'https://github.com/pv-912.png?size=50', 'title': 'HACKATHON', 'tag': ['Android', 'Databases'], 'mentor': 'Nishant Singh Sikarwar', 'comm': 'https://groups.google.com/forum/#!forum/kwoc_hackathon_project/join', 'intro_full': 'It was Idea to connect professor to  students via showing their availability in their office.  We have to make a firebase database which will be update the values in the list items (Names) shown in the app.'},
{'btnid': 1040, 'intro': 'A traditional hangman game build using React.', 'link': 'https://github.com/djbarnwal/hangman', 'id': 40, 'mentor_email': 'dhiraj@iitkgp.ac.in', 'img': 'https://github.com/djbarnwal.png?size=50', 'title': 'HANGMAN REACT GAME', 'tag': [' Web Development', ' JavaScript', 'CSS', 'ReactJS'], 'mentor': 'Dhiraj Kumar', 'comm': 'https://www.facebook.com/groups/166681887253832', 'intro_full': 'A traditional hangman game build using React.'},
{'btnid': 1041, 'intro': 'A 3 step portfolio generator.Enter details and get your portfolio generated in the form of a static website.', 'link': 'https://github.com/Anupam-dagar/Portfolio-Generator', 'id': 41, 'mentor_email': 'iit2016128@iiita.ac.in', 'img': 'https://github.com/Anupam-dagar.png?size=50', 'title': 'HOXNOX - PORTFOLIOS MADE EASY', 'tag': ['Python', 'Django', 'HTML', 'CSS', 'Javascript', 'jquery'], 'mentor': 'Anupam Dagar', 'comm': 'https://hoxnox.zulipchat.com', 'intro_full': 'A 3 step portfolio generator.Enter details and get your portfolio generated in the form of a static website.'},
{'btnid': 1042, 'intro': 'The goal of this project is to create an API for KGP. Like with any API, the KGP API should be able to handle all sorts of data about say, departments, profe...', 'link': 'https://github.com/ghostwriternr/api', 'id': 42, 'mentor_email': 'ghostwriternr@gmail.com', 'img': 'https://github.com/ghostwriternr.png?size=50', 'title': 'KGP API', 'tag': ['Backend', 'API', 'Python', 'Databases'], 'mentor': 'Naresh', 'comm': 'https://slack.metakgp.org/', 'intro_full': 'The goal of this project is to create an API for KGP. Like with any API, the KGP API should be able to handle all sorts of data about say, departments, professors or places.'},
{'btnid': 1043, 'intro': 'Command Line Tool for looking up words', 'link': 'https://github.com/kshitij10496/lexico', 'id': 43, 'mentor_email': 'kshitijsaraogi@gmail.com', 'img': 'https://github.com/kshitij10496.png?size=50', 'title': 'LEXICO', 'tag': ['Python', 'CLI', 'DBMS', 'SQL', 'OOP'], 'mentor': 'Kshitij Saraogi', 'comm': 'mailto: kshitijsaraogi@gmail.com', 'intro_full': 'Command Line Tool for looking up words'},
{'btnid': 1044, 'intro': 'lterm is an online Terminal Eminulator. It is a step by step tutorial that will teach you the bash commands by making you execute them.', 'link': 'https://github.com/sr6033/lterm', 'id': 44, 'mentor_email': 'shubhamrath.iiitb@gmail.com', 'img': 'https://github.com/sr6033.png?size=50', 'title': 'LTERM', 'tag': ['javascript', 'html', 'css', 'jquery'], 'mentor': 'Shubham Rath', 'comm': 'https://gitter.im/lterm/Lobby?utm_source=share-link&utm_medium=link&utm_campaign=share-link', 'intro_full': 'lterm is an online Terminal Eminulator. It is a step by step tutorial that will teach you the bash commands by making you execute them.'},
{'btnid': 1045, 'intro': "This is a simple python template that uses Flask to build a webhook for Facebook's Messenger Bot API. The aim is to build interactive chatbot with some added...", 'link': 'https://github.com/vernwalrahul/my-messenger-bot', 'id': 45, 'mentor_email': 'vernwalrahul@gmail.com', 'img': 'https://github.com/vernwalrahul.png?size=50', 'title': 'MESSENGER BOT', 'tag': ['Python', 'NLP', 'APIs', 'Virtual Assistant'], 'mentor': 'Rahul Vernwal', 'comm': 'https://gitter.im/my-messenger-bot/Lobby', 'intro_full': "This is a simple python template that uses Flask to build a webhook for Facebook's Messenger Bot API. The aim is to build interactive chatbot with some added features of virtual assistant."},
{'btnid': 1046, 'intro': 'Self-sufficient docker configuration for running the Metakgp Mediawiki instance', 'link': 'https://github.com/metakgp/metakgp-wiki', 'id': 46, 'mentor_email': 'kannan.siddharth12@gmail.com', 'img': 'https://github.com/metakgp.png?size=50', 'title': 'METAKGP WIKI: DOCKERIZED FOR FUN', 'tag': ['Docker', 'PHP', 'SysAdmin', 'Linux'], 'mentor': 'Siddharth Kannan', 'comm': 'https://slack.metakgp.org/', 'intro_full': 'Self-sufficient docker configuration for running the Metakgp Mediawiki instance'},
{'btnid': 1047, 'intro': 'IITKGP Question paper search', 'link': 'https://github.com/metakgp/mfqp', 'id': 47, 'mentor_email': 'athityakumar@gmail.com', 'img': 'https://github.com/metakgp.png?size=50', 'title': 'MFQP', 'tag': ['JS', 'Python', 'Ruby', 'JSON', 'Javascript'], 'mentor': 'Athitya Kumar', 'comm': 'http://metakgp-slack.herokuapp.com/', 'intro_full': 'IITKGP Question paper search'},
{'btnid': 1048, 'intro': 'A collection of Machine Learning algorithms written from sctrach. ', 'link': 'https://github.com/aribis369/ML-Starter-Pack', 'id': 48, 'mentor_email': 'aribis369@gmail.com', 'img': 'https://github.com/aribis369.png?size=50', 'title': 'ML-STARTER-PACK', 'tag': ['Python', 'Machine Learning'], 'mentor': 'Arindam Biswas', 'comm': 'https://groups.google.com/forum/#!forum/ml-starter-pack', 'intro_full': 'A collection of Machine Learning algorithms written from sctrach. '},
{'btnid': 1049, 'intro': 'A command line tool to add your music and videos directly to several devices.', 'link': 'https://github.com/Parth-Vader/MobOff', 'id': 49, 'mentor_email': 'vermaparth97@gmail.com', 'img': 'https://github.com/Parth-Vader.png?size=50', 'title': 'MOBOFF', 'tag': ['Python', 'Command-Line', 'Youtube-dl', 'Click'], 'mentor': 'Parth Verma', 'comm': 'https://join.slack.com/t/kwoc2017-parth/shared_invite/enQtMjc1OTU3MDUwNzc0LTNkNzQzN2U5NzI0ZTNkM2I5MGM5MDIyYTYxMzFhNWYzNWYwMDIzMjNmYjM2MTA1NDc1NWU2Yjc0ZTYxNGZmNTA', 'intro_full': 'A command line tool to add your music and videos directly to several devices.'},
{'btnid': 1050, 'intro': ' A Python library written for Morse Code', 'link': 'https://github.com/morse-talk/morse-talk', 'id': 50, 'mentor_email': 'aribis369@gmail.com', 'img': 'https://github.com/morse-talk.png?size=50', 'title': 'MORSE-TALK', 'tag': ['Python', 'CLI', 'GUI', 'Tkinter', 'Matplotlib', 'Wave'], 'mentor': 'Arindam Biswas', 'comm': 'https://gitter.im/OrkoHunter-kwoc/morse-talk', 'intro_full': ' A Python library written for Morse Code'},
{'btnid': 1051, 'intro': 'A simple program to inspire you with motivational quotes. Highly influenced by linux command fortune.', 'link': 'https://github.com/mubaris/motivate', 'id': 51, 'mentor_email': 'mubarishassannk@gmail.com', 'img': 'https://github.com/mubaris.png?size=50', 'title': 'MOTIVATE', 'tag': ['Python', 'JSON', 'CLI', 'Terminal', 'Easy'], 'mentor': 'Mubaris NK', 'comm': 'https://gitter.im/pymotivate/Lobby', 'intro_full': 'A simple program to inspire you with motivational quotes. Highly influenced by linux command fortune.'},
{'btnid': 1052, 'intro': 'Aggregating news since antiquity', 'link': 'https://github.com/metakgp/naarad-source', 'id': 52, 'mentor_email': 'sayan.sinha@iitkgp.ac.in', 'img': 'https://github.com/metakgp.png?size=50', 'title': 'NAARAD', 'tag': ['Python', 'scrapping', 'GraphQL', 'API', 'Django'], 'mentor': 'Sayan Sinha', 'comm': 'https://slack.metakgp.org/', 'intro_full': 'Aggregating news since antiquity'},
{'btnid': 1053, 'intro': 'NetworkX is a Python package for the Graph Theory and Complex Networks.', 'link': 'https://github.com/networkx/networkx', 'id': 53, 'mentor_email': 'himanshu.mishra.kgp@gmail.com', 'img': 'https://github.com/networkx.png?size=50', 'title': 'NETWORKX', 'tag': ['Python', 'Graph Theory', 'Algorithms', 'Library', 'Package'], 'mentor': 'Himanshu Mishra', 'comm': 'https://groups.google.com/forum/#!forum/networkx-discuss', 'intro_full': 'NetworkX is a Python package for the Graph Theory and Complex Networks.'},
{'btnid': 1054, 'intro': "A Ruby implementation of Python's well known Graph library : networkx", 'link': 'https://github.com/athityakumar/networkx.rb', 'id': 54, 'mentor_email': 'athityakumar@gmail.com', 'img': 'https://github.com/athityakumar.png?size=50', 'title': 'NETWORKX.RB', 'tag': ['Ruby', 'Gem', 'Networkx', 'Graph Theory'], 'mentor': 'Athitya Kumar', 'comm': 'athityakumar@gmail.com', 'intro_full': "A Ruby implementation of Python's well known Graph library : networkx"},
{'btnid': 1055, 'intro': 'An app on PHP to add, delete and edit notes ', 'link': 'https://github.com/ankita132/notes_app', 'id': 55, 'mentor_email': '2ankitasahoo13@gmail.com', 'img': 'https://github.com/ankita132.png?size=50', 'title': 'NOTES APP', 'tag': ['css', 'javascript', 'PHP', 'ajax'], 'mentor': 'Ankita Sahoo', 'comm': 'https://groups.google.com/forum/#!forum/notes_app', 'intro_full': 'An app on PHP to add, delete and edit notes '},
{'btnid': 1056, 'intro': 'A terminal task-notifier that works across different command line emulators', 'link': 'https://github.com/kaustubhhiware/NotiFyre', 'id': 56, 'mentor_email': 'hiwarekaustubh@gmail.com', 'img': 'https://github.com/kaustubhhiware.png?size=50', 'title': 'NOTIFYRE', 'tag': ['Bash', 'Terminal', 'Linux'], 'mentor': 'Kaustubh Hiware', 'comm': 'https://www.facebook.com/groups/552015885141292/', 'intro_full': 'A terminal task-notifier that works across different command line emulators'},
{'btnid': 1057, 'intro': 'OpenChat is an Open Source messaging platform where people can send messages to anyone registered to this platform', 'link': 'http://github.com/ankitjain28may/openchat', 'id': 57, 'mentor_email': 'ankitjain28may77@gmail.com', 'img': 'https://github.com/ankitjain28may.png?size=50', 'title': 'OPENCHAT', 'tag': ['php', 'composer', 'JavaScript', 'ajax', 'websockets', 'html', 'css', 'jquery', 'gulp'], 'mentor': 'Ankit Jain', 'comm': 'https://gitter.im/ankitjain28may/openchat', 'intro_full': 'OpenChat is an Open Source messaging platform where people can send messages to anyone registered to this platform'},
{'btnid': 1058, 'intro': 'A Chrome browser extension for improving second-language vocabulary learning by making API calls to Oxford Dictionary API\xe2\x80\x99s.', 'link': 'https://github.com/himanshukumar660/Oxnary', 'id': 58, 'mentor_email': 'himanshukumar660@gmail.com', 'img': 'https://github.com/himanshukumar660.png?size=50', 'title': 'OXNARY', 'tag': ['Javascript', 'HTML', 'CSS', 'API', 'Chrome Extension'], 'mentor': 'Himanshu Kumar', 'comm': 'https://gitter.im/Oxnary/Lobby', 'intro_full': 'A Chrome browser extension for improving second-language vocabulary learning by making API calls to Oxford Dictionary API\xe2\x80\x99s.'},
{'btnid': 1059, 'intro': 'A very basic android implementation of the Pacman Game.', 'link': 'https://github.com/harishnandan/Pacman-lvl1', 'id': 59, 'mentor_email': 'harishshivam@gmail.com', 'img': 'https://github.com/harishnandan.png?size=50', 'title': 'PACMAN-LVL1', 'tag': ['Java', 'Android'], 'mentor': 'Harish Nandan', 'comm': 'https://www.facebook.com/groups/127895284549751', 'intro_full': 'A very basic android implementation of the Pacman Game.'},
{'btnid': 1060, 'intro': 'Android application for storing all your passwords.', 'link': 'https://github.com/Pritom14/Password-Storage', 'id': 60, 'mentor_email': 'pritommazumdar1995@gmail.com', 'img': 'https://github.com/Pritom14.png?size=50', 'title': 'PASSWORD-STORAGE', 'tag': ['Android', 'Java'], 'mentor': 'Pritom Mazumdar', 'comm': 'https://gitter.im/Password-Storage/Lobby', 'intro_full': 'Android application for storing all your passwords.'},
{'btnid': 1061, 'intro': 'A GitHub integration to automatically review Python code style over Pull Requests', 'link': 'https://github.com/OrkoHunter/pep8speaks', 'id': 61, 'mentor_email': 'himanshu.mishra.kgp@gmail.com', 'img': 'https://github.com/OrkoHunter.png?size=50', 'title': 'PEP8SPEAKS', 'tag': ['Python', 'Backend'], 'mentor': 'Himanshu Mishra', 'comm': 'https://gitter.im/OrkoHunter-kwoc/pep8speaks', 'intro_full': 'A GitHub integration to automatically review Python code style over Pull Requests'},
{'btnid': 1062, 'intro': 'A file sharing web application over local network.', 'link': 'https://github.com/nitdgpos/pizilla', 'id': 62, 'mentor_email': 'naveenkumarsangi@protonmail.com', 'img': 'https://github.com/nitdgpos.png?size=50', 'title': 'PIZILLA', 'tag': ['javascript', 'reactJS', 'file-uploads'], 'mentor': 'Naveen Kumar Sangi', 'comm': 'https://gitter.im/nit-dgp/general', 'intro_full': 'A file sharing web application over local network.'},
{'btnid': 1063, 'intro': 'Create a dynamic queue in YouTube.', 'link': 'https://github.com/nishnik/Play_Next', 'id': 63, 'mentor_email': 'i.nishantnikhil@gmail.com', 'img': 'https://github.com/nishnik.png?size=50', 'title': 'PLAY NEXT', 'tag': ['JavaScript', 'YouTube', 'Chrome Extension'], 'mentor': 'Nishant Nikhil', 'comm': 'https://gitter.im/Play_Next/', 'intro_full': 'Create a dynamic queue in YouTube.'},
{'btnid': 1064, 'intro': 'A Repository to store implementation of some of the famous Data Structures and Algorithms (mainly in C/C++/Java/Python) for everyone to learn and contribute.', 'link': 'https://github.com/codeIIEST/Algorithms', 'id': 64, 'mentor_email': 'prateekkol21@gmail.com', 'img': 'https://github.com/codeIIEST.png?size=50', 'title': 'PLAYING WITH ALGORITHMS', 'tag': ['Python', 'Algorithms', 'Data Structures', 'C++', 'Java'], 'mentor': 'Prateek Chanda', 'comm': 'https://gitter.im/codeIIEST/Algorithms', 'intro_full': 'A Repository to store implementation of some of the famous Data Structures and Algorithms (mainly in C/C++/Java/Python) for everyone to learn and contribute.'},
{'btnid': 1065, 'intro': 'A terminal and GUI based tool for quick visualisation of mathematical functions.', 'link': 'https://github.com/NITDgpOS/PlotIt', 'id': 65, 'mentor_email': 'djmdeveloper060796@gmail.com', 'img': 'https://github.com/NITDgpOS.png?size=50', 'title': 'PLOTIT', 'tag': ['Python', 'Plotting', 'Terminal', 'GUI'], 'mentor': 'Deepjyoti Mondal', 'comm': 'https://gitter.im/PlotIt/Lobby', 'intro_full': 'A terminal and GUI based tool for quick visualisation of mathematical functions.'},
{'btnid': 1066, 'intro': 'The idea is to make the AI win at Pong using RL and to generalize the architecture proposed, for other simple games.', 'link': 'https://github.com/vernwalrahul/Pong-using-RL', 'id': 66, 'mentor_email': 'vernwalrahul@gmail.com', 'img': 'https://github.com/vernwalrahul.png?size=50', 'title': 'PONG-USING-RL', 'tag': ['Python', 'Machine Learning', 'RL', 'PyGame'], 'mentor': 'Rahul Vernwal', 'comm': 'https://gitter.im/Pong-Using-RL/Lobby', 'intro_full': 'The idea is to make the AI win at Pong using RL and to generalize the architecture proposed, for other simple games.'},
{'btnid': 1067, 'intro': 'Tool to configure system-wide proxy settings in Linux.', 'link': 'https://github.com/himanshub16/ProxyMan', 'id': 67, 'mentor_email': 'himanshushekharb16@gmail.com', 'img': 'https://github.com/himanshub16.png?size=50', 'title': 'PROXYMAN', 'tag': ['bash', 'shell', 'linux', 'proxy', 'script'], 'mentor': 'Himanshu Shekhar', 'comm': 'https://github.com/himanshub16/ProxyMan/issues', 'intro_full': 'Tool to configure system-wide proxy settings in Linux.'},
{'btnid': 1068, 'intro': 'A fast, flexible, and comprehensive framework for  quantitative text analysis in R.  Provides functionality for corpus management, creating and manipulating ...', 'link': 'https://github.com/kbenoit/quanteda', 'id': 68, 'mentor_email': 'kbenoit@lse.ac.uk', 'img': 'https://github.com/kbenoit.png?size=50', 'title': 'QUANTEDA: QUANTITATIVE ANALYSIS OF TEXTUAL DATA (R PACKAGE)', 'tag': ['R', 'C++', 'Web development', 'NLP', 'Text analysis', 'Databases'], 'mentor': 'Kenneth Benoit', 'comm': 'https://join.slack.com/t/quanteda/signup', 'intro_full': 'A fast, flexible, and comprehensive framework for  quantitative text analysis in R.  Provides functionality for corpus management, creating and manipulating tokens and ngrams, exploring keywords in context,  forming and manipulating sparse matrices of documents by features and feature co-occurrences, analyzing keywords, computing feature similarities and distances, applying content dictionaries, applying supervised and unsupervised machine learning,  visually representing text and text analyses, and more. Written in R and C++, with a website in Hugo.'},
{'btnid': 1069, 'intro': 'Take notes without opening any editor or application and have them organized on your desktop in the form of sticky notes', 'link': 'https://github.com/dileepsankhla/QuickNotes', 'id': 69, 'mentor_email': 'sankhla.dileep96@gmail.com', 'img': 'https://github.com/dileepsankhla.png?size=50', 'title': 'QUICKNOTES', 'tag': ['C++', 'Shell', 'C', 'Qt', 'QMake', 'Synchronization'], 'mentor': 'Dileep Sankhla', 'comm': 'https://groups.google.com/forum/#!forum/quicknotes', 'intro_full': 'Take notes without opening any editor or application and have them organized on your desktop in the form of sticky notes'},
{'btnid': 1070, 'intro': 'An app on react where you can upload and view images at various locations on the earth', 'link': 'https://github.com/ankita132/react_google_map', 'id': 70, 'mentor_email': '2ankitasahoo13@gmail.com', 'img': 'https://github.com/ankita132.png?size=50', 'title': 'REACT GOOGLE MAP', 'tag': ['reactjs', 'firebase', 'css'], 'mentor': 'Ankita Sahoo', 'comm': 'https://groups.google.com/forum/#!forum/kwoc17-react_google_map', 'intro_full': 'An app on react where you can upload and view images at various locations on the earth'},
{'btnid': 1071, 'intro': 'A chrome extension for mail tracking', 'link': 'https://github.com/dibyadas/read-it', 'id': 71, 'mentor_email': 'dibyadas998@gmail.com', 'img': 'https://github.com/dibyadas.png?size=50', 'title': 'READ-IT', 'tag': ['Python', 'Chrome Extension', 'flask', 'gmail'], 'mentor': 'Dibya Prakash Das', 'comm': 'https://gitter.im/read-it/', 'intro_full': 'A chrome extension for mail tracking'},
{'btnid': 1072, 'intro': 'A web game based on reflection.', 'link': 'https://github.com/harishnandan/reflexio', 'id': 72, 'mentor_email': 'harishshivam@gmail.com', 'img': 'https://github.com/harishnandan.png?size=50', 'title': 'REFLEXIO', 'tag': ['CSS', 'Javascript', 'HTML'], 'mentor': 'Harish Nandan', 'comm': 'https://www.facebook.com/groups/136133120486393/', 'intro_full': 'A web game based on reflection.'},
{'btnid': 1073, 'intro': 'Convert relative dates back to a date representation: 3 days ago => A date object for today - 3 days', 'link': 'https://github.com/icyflame/relative-date-reverse/issues', 'id': 73, 'mentor_email': 'kannan.siddharth12@gmail.com', 'img': 'https://github.com/icyflame.png?size=50', 'title': 'RELATIVE DATE: REVERSE', 'tag': ['javascript', 'datetime', 'utility', 'tools', 'nodejs', 'NPM', 'module'], 'mentor': 'Siddharth Kannan', 'comm': 'https://groups.google.com/forum/#!forum/kwoc-2017-discussion-icyflame', 'intro_full': 'Convert relative dates back to a date representation: 3 days ago => A date object for today - 3 days'},
{'btnid': 1074, 'intro': 'Collection of variants of RRT Path Planners', 'link': 'https://github.com/KgpKubs/RRT', 'id': 74, 'mentor_email': 'sayan.sinha@iitkgp.ac.in', 'img': 'https://github.com/KgpKubs.png?size=50', 'title': 'RRT', 'tag': ['C++', 'AI', 'Path planning'], 'mentor': 'Sayan Sinha', 'comm': 'https://gitter.im/KgpKubs/Lobby', 'intro_full': 'Collection of variants of RRT Path Planners'},
{'btnid': 1075, 'intro': 'Web application developed on Angular2 that uses API provided by last.fm. Find artists and display albums and tracks listings.', 'link': 'https://github.com/jajodiaraghav/rTunes', 'id': 75, 'mentor_email': 'jajodia.raghav@gmail.com', 'img': 'https://github.com/jajodiaraghav.png?size=50', 'title': 'RTUNES', 'tag': ['Angular2', 'JavaScript', 'Web Application', 'SPA', 'TypeScript'], 'mentor': 'Raghav Jajodia', 'comm': 'https://gitter.im/rTunes-angular2/Lobby', 'intro_full': 'Web application developed on Angular2 that uses API provided by last.fm. Find artists and display albums and tracks listings.'},
{'btnid': 1076, 'intro': "In Android there are many privacy issues, every time some application fetch your details that you don't want to let ope to anyone. To ensure that your data i...", 'link': 'https://github.com/vivonk/SaveMore', 'id': 76, 'mentor_email': 'nirmalsarswat400@gmail.com', 'img': 'https://github.com/vivonk.png?size=50', 'title': 'SAFEANDROID', 'tag': ['Android ', 'Security', 'Network'], 'mentor': 'Nirmal Sarswat', 'comm': 'https://join.slack.com/t/kwoc/shared_invite/enQtMjc2Njk1MTA5ODk0LTk4MTc4ODY5MjEzYWExNTcyYWM2NTRiMjQ1YzRhMzE3YWZlOTkzNDdkZTMzOWYxMDYxMDM3NzQ5MjdlNjFiYTY', 'intro_full': "In Android there are many privacy issues, every time some application fetch your details that you don't want to let ope to anyone. To ensure that your data is private I have the project in which we have to fake all possible bugs of privacy in Android and fix them into a small android app. Every time when ever some data travel from one end of user to some where else, we will notify about the privacy."},
{'btnid': 1077, 'intro': 'A Natural Language Processing Toolkit for Indian Lamguages that utilize LSTMs for POS tagging.', 'link': 'https://github.com/djokester/sangita', 'id': 77, 'mentor_email': 'samriddhidjokestersinha@gmail.com', 'img': 'https://github.com/djokester.png?size=50', 'title': 'SANGITA', 'tag': ['Python', 'NLP', 'Machine Learning', 'Scraping'], 'mentor': 'Samriddhi Sinha', 'comm': 'https://groups.google.com/d/forum/sangitanlp', 'intro_full': 'A Natural Language Processing Toolkit for Indian Lamguages that utilize LSTMs for POS tagging.'},
{'btnid': 1078, 'intro': 'SciRuby-examples is a guide for a newbie to dive into machine learning and natural language processing using an unconventional language: Ruby', 'link': 'https://github.com/the-ethan-hunt/sciruby-examples', 'id': 78, 'mentor_email': 'dhruvgirishapte@gmail.com', 'img': 'https://github.com/the-ethan-hunt.png?size=50', 'title': 'SCIRUBY-EXAMPLES', 'tag': ['Ruby', 'Natural Language Processing', 'Deep Learning', 'Machine Learning', ' IRuby notebook'], 'mentor': 'Dhruv Apte', 'comm': 'https://groups.google.com/forum/#!forum/sciruby-examples-discus', 'intro_full': 'SciRuby-examples is a guide for a newbie to dive into machine learning and natural language processing using an unconventional language: Ruby'},
{'btnid': 1079, 'intro': 'A Django web app for collecting various results for scrapy-bench and uploading it to web.', 'link': 'https://github.com/scrapy/scrapy-bench-speedcenter', 'id': 79, 'mentor_email': 'vermaparth97@gmail.com', 'img': 'https://github.com/scrapy.png?size=50', 'title': 'SCRAPY BENCH SPEEDCENTER', 'tag': ['Python', 'Scrapy', 'Scraping', 'Benchmarking', 'Django'], 'mentor': 'Parth Verma', 'comm': 'https://join.slack.com/t/kwoc2017-parth/shared_invite/enQtMjc1OTU3MDUwNzc0LTNkNzQzN2U5NzI0ZTNkM2I5MGM5MDIyYTYxMzFhNWYzNWYwMDIzMjNmYjM2MTA1NDc1NWU2Yjc0ZTYxNGZmNTA', 'intro_full': 'A Django web app for collecting various results for scrapy-bench and uploading it to web.'},
{'btnid': 1080, 'intro': 'A command-line interface for bench-marking Scrapy, that reflects real-world usage.', 'link': 'https://github.com/scrapy/scrapy-bench', 'id': 80, 'mentor_email': 'vermaparth97@gmail.com', 'img': 'https://github.com/scrapy.png?size=50', 'title': 'SCRAPY-BENCH', 'tag': ['Python', 'Click', 'Scrapy', 'Scraping', 'Benchmarking', 'Memory-Profiling', 'Command-Line'], 'mentor': 'Parth Verma', 'comm': 'https://join.slack.com/t/kwoc2017-parth/shared_invite/enQtMjc1OTU3MDUwNzc0LTNkNzQzN2U5NzI0ZTNkM2I5MGM5MDIyYTYxMzFhNWYzNWYwMDIzMjNmYjM2MTA1NDc1NWU2Yjc0ZTYxNGZmNTA', 'intro_full': 'A command-line interface for bench-marking Scrapy, that reflects real-world usage.'},
{'btnid': 1081, 'intro': 'Image Codec using Private-key cryptography ', 'link': 'https://github.com/NITDgpOS/SecureSnaps', 'id': 81, 'mentor_email': 'aniqrah@gmail.com', 'img': 'https://github.com/NITDgpOS.png?size=50', 'title': 'SECURESNAPS', 'tag': ['Python', 'Image', 'codec', 'encryption', 'cryptography'], 'mentor': 'Aniq Ur Rahman', 'comm': 'https://gitter.im/SecureSnaps55/Lobby', 'intro_full': 'Image Codec using Private-key cryptography '},
{'btnid': 1082, 'intro': 'TouchNet: a large scale dataset of 3D objects and a simulator for manipulating these objects for the purpose of researching and training AIs to learn and rea...', 'link': 'https://github.com/jtoy/sensenet', 'id': 82, 'mentor_email': 'jtoy@jtoy.net', 'img': 'https://github.com/jtoy.png?size=50', 'title': 'SENSENET', 'tag': ['Python', 'machinelearning', 'deeplearning', 'neuroscience', 'numpy', 'tensorflow', 'pytorch'], 'mentor': 'Jason Toy', 'comm': 'https://join.slack.com/t/sensenetai/shared_invite/enQtMjc4MzQ5ODUzNzgzLThjYTNmMzE4MGQ1MGMyN2NiMWIxNzI1NTYwMjI5ODE4NWY5MDNmN2U5OTkwMGE4OTFiNjNjYmQ0YjgwNjBmZWU', 'intro_full': 'TouchNet: a large scale dataset of 3D objects and a simulator for manipulating these objects for the purpose of researching and training AIs to learn and reason about their world via sensorimotor neural systems and touch.'},
{'btnid': 1083, 'intro': 'Investigating properties of neural networks', 'link': 'https://github.com/nishnik/sherlocked', 'id': 83, 'mentor_email': 'i.nishantnikhil@gmail.com', 'img': 'https://github.com/nishnik.png?size=50', 'title': 'SHERLOCKED', 'tag': ['Python', 'Neural Networks', 'Deep Learning'], 'mentor': 'Nishant Nikhil', 'comm': 'https://gitter.im/nn_sherlocked', 'intro_full': 'Investigating properties of neural networks'},
{'btnid': 1084, 'intro': 'Signal prediction with a Sequence-to-Sequence (seq2seq) Recurrent Neural Network (RNN) model in TensorFlow', 'link': 'https://github.com/guillaume-chevalier/seq2seq-signal-prediction', 'id': 84, 'mentor_email': 'guillaume-chevalier@outlook.com', 'img': 'https://github.com/guillaume-chevalier.png?size=50', 'title': 'SIGNAL PREDICTION WITH A SEQ2SEQ RNN', 'tag': ['Python', 'Deep Learning', ' Machine Learning', ' Signal Prediction', 'RNN', 'seq2seq'], 'mentor': 'Guillaume Chevalier', 'comm': 'https://seq2seq-git.slack.com', 'intro_full': 'Signal prediction with a Sequence-to-Sequence (seq2seq) Recurrent Neural Network (RNN) model in TensorFlow'},
{'btnid': 1085, 'intro': 'Practise Algorithm and Data Structure and learn how Open Source Contribution works.', 'link': 'https://github.com/khanchi97/Smvdu-Algos', 'id': 85, 'mentor_email': 'sushilkhanchi97@gmail.com', 'img': 'https://github.com/khanchi97.png?size=50', 'title': 'SMVDU-ALGOS', 'tag': ['Python', 'C', 'Java', 'CPP', 'Algorithms', 'DataStructure'], 'mentor': 'Sushil khanchi', 'comm': 'https://gitter.im/Smvdu-Algos/Lobby', 'intro_full': 'Practise Algorithm and Data Structure and learn how Open Source Contribution works.'},
{'btnid': 1086, 'intro': 'Popular Snake game build using Pygame for desktop', 'link': 'https://github.com/jajodiaraghav/Snake', 'id': 86, 'mentor_email': 'jajodia.raghav@gmail.com', 'img': 'https://github.com/jajodiaraghav.png?size=50', 'title': 'SNAKE', 'tag': ['Python', 'Pygame', 'Snake'], 'mentor': 'Raghav Jajodia', 'comm': 'https://gitter.im/Snake-pygame/Lobby', 'intro_full': 'Popular Snake game build using Pygame for desktop'},
{'btnid': 1087, 'intro': 'A simple game of snakes implemented in C++ and OpenCV', 'link': 'https://github.com/americast/Snakes', 'id': 87, 'mentor_email': 'sayan.sinha@iitkgp.ac.in', 'img': 'https://github.com/americast.png?size=50', 'title': 'SNAKES', 'tag': ['C++', 'Gaming', 'OpenCV'], 'mentor': 'Sayan Sinha', 'comm': 'https://gitter.im/opencv-Snakes/Lobby', 'intro_full': 'A simple game of snakes implemented in C++ and OpenCV'},
{'btnid': 1088, 'intro': 'It is a platform to keep an eye on all the posts shared, liked and commented by the people hired by you for marketing.', 'link': 'https://github.com/ankitjain28may/Social-Media-Review-Platform', 'id': 88, 'mentor_email': 'ankitjain28may77@gmail.com', 'img': 'https://github.com/ankitjain28may.png?size=50', 'title': 'SOCIAL-MEDIA-REVIEW-PLATFORM', 'tag': ['Python', 'Scraping', 'php', 'sentiment analysis', 'machine learning', 'laravel', 'facebook api', 'twitter api', 'HTML', 'CSS', 'Jquery', 'Javascript', 'Bootstrap'], 'mentor': 'Ankit Jain', 'comm': 'https://gitter.im/ankitjain28may/Social-Media-Review-Platform', 'intro_full': 'It is a platform to keep an eye on all the posts shared, liked and commented by the people hired by you for marketing.'},
{'btnid': 1089, 'intro': 'Building Fixed Model, Real Time Improvements in the Model and Making a Model for every test data encountered (Lazy Learning) by using Regression.', 'link': 'https://github.com/rahul-da/Statistical_Modelling_Techniques', 'id': 89, 'mentor_email': 'rahulreynoldindia@gmail.com', 'img': 'https://github.com/rahul-da.png?size=50', 'title': 'STATISTICAL MODELLING TECHNIQUES', 'tag': ['R', 'Statistics', 'Regression'], 'mentor': 'Rahul Das', 'comm': 'https://groups.google.com/forum/#!forum/regression_modeling', 'intro_full': 'Building Fixed Model, Real Time Improvements in the Model and Making a Model for every test data encountered (Lazy Learning) by using Regression.'},
{'btnid': 1090, 'intro': 'Often for complicated tasks in computer vision it is required that a camera be calibrated. Camera calibration is a necessary step in 3D computer vision in or...', 'link': 'https://github.com/sourishg/stereo-calibration', 'id': 90, 'mentor_email': 'ragnarok0211@gmail.com', 'img': 'https://github.com/sourishg.png?size=50', 'title': 'STEREO CAMERA CALIBRATION', 'tag': ['Camera Calibration', 'Computer Vision', 'C++', 'OpenCV'], 'mentor': 'Sourish Ghosh', 'comm': 'https://cvkgp.slack.com', 'intro_full': 'Often for complicated tasks in computer vision it is required that a camera be calibrated. Camera calibration is a necessary step in 3D computer vision in order to extract metric information from 2D images. Stereo calibration is used to find the geometric transformations between two cameras, and the relationship between two image projections of a particular 3D scene. More details here: http://sourishghosh.com/2016/stereo-calibration-cpp-opencv/'},
{'btnid': 1091, 'intro': 'SunPy is a community-developed free and open-source software package for solar physics. It aims to be provide a comprehensive data analysis environment that ...', 'link': 'https://github.com/sunpy/sunpy', 'id': 91, 'mentor_email': 'nitin.iitkgp23@gmail.com', 'img': 'https://github.com/sunpy.png?size=50', 'title': 'SUNPY', 'tag': ['Python', 'astronomy', 'sun', 'gsoc', 'scientific'], 'mentor': 'Nitin Choudhary', 'comm': 'https://riot.im/app/#/room/#sunpy-kwoc:matrix.org', 'intro_full': 'SunPy is a community-developed free and open-source software package for solar physics. It aims to be provide a comprehensive data analysis environment that allows researchers within the field of solar physics to carry out their tasks with the minimal effort.  SunPy is written using the Python programming language and is build upon the scientific Python environment which includes several core packages such as NumPy, SciPy, Matplotlib and Pandas. Since SunPy deals with key astrophysical concepts, its development is closely associated with that of Astropy, which is a fundamental package within the Python astronomy ecosystem.'},
{'btnid': 1092, 'intro': 'A Python Library for symbolic Maths.', 'link': 'https://github.com/sympy/sympy', 'id': 92, 'mentor_email': 'shivamvats.iitkgp@gmail.com', 'img': 'https://github.com/sympy.png?size=50', 'title': 'SYMPY', 'tag': ['Python', 'Maths ', 'Computation'], 'mentor': 'Shivam Vats', 'comm': 'https://gitter.im/sympy/sympy', 'intro_full': 'A Python Library for symbolic Maths.'},
{'btnid': 1093, 'intro': 'CLI version of a moodle based "Nalanda: E-LMS of BITS Pilani" to show updates', 'link': 'https://github.com/Pro-Panda/Termi-Nalanda', 'id': 93, 'mentor_email': 'f2016015@pilani.bits-pilani.ac.in', 'img': 'https://github.com/Pro-Panda.png?size=50', 'title': 'TERMI-NALANDA', 'tag': ['Python', 'Scraping', 'GUI', 'CLI'], 'mentor': 'Rahul Bothra', 'comm': 'https://www.facebook.com/groups/301389363707310/', 'intro_full': 'CLI version of a moodle based "Nalanda: E-LMS of BITS Pilani" to show updates'},
{'btnid': 1094, 'intro': 'It is a small game which is dual player need to change it into single player as new feature', 'link': 'https://github.com/cmeher196/TicTacToe', 'id': 94, 'mentor_email': 'b115022@iiit-bh.ac.in', 'img': 'https://github.com/cmeher196.png?size=50', 'title': 'TICTACTOE', 'tag': ['android', 'java', 'design UX/UI'], 'mentor': 'CHANDRA PRAKASH MEHER', 'comm': 'https://gitter.im/tictactoe-discussion/Lobby?utm_source=share-link&utm_medium=link&utm_campaign=share-link', 'intro_full': 'It is a small game which is dual player need to change it into single player as new feature'},
{'btnid': 1095, 'intro': 'TIC-TAC-TOE game designed in various languages to play it.', 'link': 'https://github.com/RITESHMOHAPATRA/TIC-TAC-TOE', 'id': 95, 'mentor_email': 'mohapatraritesh97@gmail.com', 'img': 'https://github.com/RITESHMOHAPATRA.png?size=50', 'title': 'TIC_TAC_TOE', 'tag': ['Python', 'Scraping'], 'mentor': 'Ritesh Kumar Mohapatra', 'comm': 'https://groups.google.com/forum/#!forum/tic-tac-toe_kwoc/join', 'intro_full': 'TIC-TAC-TOE game designed in various languages to play it.'},
{'btnid': 1096, 'intro': 'A tool to display the timetable. A Terminal timetable, if you will.', 'link': 'https://github.com/athityakumar/timetable', 'id': 96, 'mentor_email': 'athityakumar@gmail.com', 'img': 'https://github.com/athityakumar.png?size=50', 'title': 'TIMETABLE', 'tag': ['Ruby', 'CLI'], 'mentor': 'Athitya Kumar', 'comm': 'athityakumar@gmail.com', 'intro_full': 'A tool to display the timetable. A Terminal timetable, if you will.'},
{'btnid': 1097, 'intro': 'It is a project on Machine Learning which aims to predict survival of passengers on Titanic. Contributing to this will aim to create a concrete understanding...', 'link': 'https://github.com/prateekiiest/titanic_survival_exploration', 'id': 97, 'mentor_email': 'prateekkol21@gmail.com', 'img': 'https://github.com/prateekiiest.png?size=50', 'title': 'TITANIC SURVIVAL EXPLORATION', 'tag': ['Python', 'Machine Learning', 'ipython notebook', 'statistical analysis'], 'mentor': 'Prateek Chanda', 'comm': 'https://titanic-survival.slack.com/', 'intro_full': 'It is a project on Machine Learning which aims to predict survival of passengers on Titanic. Contributing to this will aim to create a concrete understanding of ML for beginners and also help them go forward in Open Source'},
{'btnid': 1098, 'intro': "Analyses trends in upcoming movie's anticipation. ", 'link': 'https://github.com/aribis369/Trend-Analyzer', 'id': 98, 'mentor_email': 'aribis369@gmail.com', 'img': 'https://github.com/aribis369.png?size=50', 'title': 'TREND-ANALYZER', 'tag': ['Python', 'Scraping', 'Machine Learning', 'MongoDB'], 'mentor': 'Arindam Biswas', 'comm': 'https://groups.google.com/forum/#!forum/trend-analyzer', 'intro_full': "Analyses trends in upcoming movie's anticipation. "},
{'btnid': 1099, 'intro': "TV Series is a tool that scrapes Episode Synopsis' of popular TV Series' from websites like Wikipedia / IMDb and show in one place with a user-friendly navig...", 'link': 'https://github.com/athityakumar/tvseries', 'id': 99, 'mentor_email': 'athityakumar@gmail.com', 'img': 'https://github.com/athityakumar.png?size=50', 'title': 'TVSERIES', 'tag': ['Web Scraping', 'Ruby', 'Website', 'Frontend'], 'mentor': 'Athitya Kumar', 'comm': 'athityakumar@gmail.com', 'intro_full': "TV Series is a tool that scrapes Episode Synopsis' of popular TV Series' from websites like Wikipedia / IMDb and show in one place with a user-friendly navigation UI."},
{'btnid': 1100, 'intro': 'A cross platform application built on QT for measuring typing speed.', 'link': 'https://github.com/himanshukumar660/Typometer', 'id': 100, 'mentor_email': 'himanshukumar660@gmail.com', 'img': 'https://github.com/himanshukumar660.png?size=50', 'title': 'TYPOMETER', 'tag': ['C++', 'Qt', 'QMake'], 'mentor': 'Himanshu Kumar', 'comm': 'gitter.im/Typometer', 'intro_full': 'A cross platform application built on QT for measuring typing speed.'},
{'btnid': 1101, 'intro': 'Reddit bot which replies to sarcastic comments', 'link': 'https://github.com/mubaris/urban-robot', 'id': 101, 'mentor_email': 'mubarishassannk@gmail.com', 'img': 'https://github.com/mubaris.png?size=50', 'title': 'URBAN ROBOT', 'tag': ['Python', 'Machine Learning', 'NLP', 'Natural Language Processing'], 'mentor': 'Mubaris NK', 'comm': 'https://gitter.im/urban-robot/Lobby', 'intro_full': 'Reddit bot which replies to sarcastic comments'},
{'btnid': 1102, 'intro': 'A basic URL-shortener made in Django framework.', 'link': 'https://github.com/modihere/url-shortener', 'id': 102, 'mentor_email': 'nit.vivek@hotmail.com', 'img': 'https://github.com/modihere.png?size=50', 'title': 'URL-SHORTENER', 'tag': ['Python'], 'mentor': 'Vivek Modi', 'comm': 'https://gitter.im/url_shortener/Lobby', 'intro_full': 'A basic URL-shortener made in Django framework.'},
{'btnid': 1103, 'intro': 'The goal of this project is to build a calculator which has speech reconition ability for input.', 'link': 'https://github.com/mayank-kgp/VoiceCalculator', 'id': 103, 'mentor_email': 'mayank.jindal5@gmail.com', 'img': 'https://github.com/mayank-kgp.png?size=50', 'title': 'VOICE CALCULATOR', 'tag': ['Android', 'Java'], 'mentor': 'Mayank Jindal', 'comm': 'https://gitter.im/VoiceCalculator', 'intro_full': 'The goal of this project is to build a calculator which has speech reconition ability for input.'},
{'btnid': 1104, 'intro': 'As of the w3 report, total 240M+ websites are available on the internet but the only such search engine knows about that. We are about create such crawler th...', 'link': 'https://github.com/fossasia/query-server', 'id': 104, 'mentor_email': 'nirmalsarswat400@gmail.com', 'img': 'https://github.com/fossasia.png?size=50', 'title': 'WEBDB', 'tag': ['Python', 'Scraping', 'crwaling', 'DBMS'], 'mentor': 'Nirmal Sarswat', 'comm': 'https://join.slack.com/t/kwoc/shared_invite/enQtMjc2Njk1MTA5ODk0LTk4MTc4ODY5MjEzYWExNTcyYWM2NTRiMjQ1YzRhMzE3YWZlOTkzNDdkZTMzOWYxMDYxMDM3NzQ5MjdlNjFiYTY', 'intro_full': 'As of the w3 report, total 240M+ websites are available on the internet but the only such search engine knows about that. We are about create such crawler that makes the database of the websites and there contents for open source help. As data science is growing like wings on fire, providing this huge data to open source will be one of the great idea.'},
{'btnid': 1105, 'intro': 'A video chat for LAN based on tcp. Beginner friendly project', 'link': 'https://github.com/rava-dosa/Weed', 'id': 105, 'mentor_email': 'apoorvakumar169@gmail.com', 'img': 'https://github.com/rava-dosa.png?size=50', 'title': 'WEED', 'tag': ['C++', 'Socket', 'OpenCv'], 'mentor': 'Apoorva Kumar', 'comm': 'https://groups.google.com/forum/#!forum/weedongit', 'intro_full': 'A video chat for LAN based on tcp. Beginner friendly project'},
{'btnid': 1106, 'intro': 'A CLI tool to bring all the latest news to your terminal.', 'link': 'https://github.com/aribis369/Whats-in-the-news-GEEK', 'id': 106, 'mentor_email': 'aribis369@gmail.com', 'img': 'https://github.com/aribis369.png?size=50', 'title': 'WHATS-IN-THE-NEWS-GEEK', 'tag': ['Python', 'CLI', 'API'], 'mentor': 'Arindam Biswas', 'comm': 'https://groups.google.com/forum/#!forum/whats-in-the-news-geek', 'intro_full': 'A CLI tool to bring all the latest news to your terminal.'},
{'btnid': 1107, 'intro': 'Searches for recent Youtube videos opened and displays them in a list form.', 'link': 'https://github.com/Parth-Vader/YoutubeDataCollector', 'id': 107, 'mentor_email': 'vermaparth97@gmail.com', 'img': 'https://github.com/Parth-Vader.png?size=50', 'title': 'YOUTUBE DATA COLLECTOR', 'tag': ['Chrome', 'Extension', 'JavaScript', 'Data-Analytics', 'Databases'], 'mentor': 'Parth Verma', 'comm': 'https://join.slack.com/t/kwoc2017-parth/shared_invite/enQtMjc1OTU3MDUwNzc0LTNkNzQzN2U5NzI0ZTNkM2I5MGM5MDIyYTYxMzFhNWYzNWYwMDIzMjNmYjM2MTA1NDc1NWU2Yjc0ZTYxNGZmNTA', 'intro_full': 'Searches for recent Youtube videos opened and displays them in a list form.'},
{'btnid': 1108, 'intro': 'If you use YouTube to listen to music constantly while working or studying, this WebApp is for you. It works like a Music Player for YouTube, where you can r...', 'link': 'https://github.com/udiboy1209/fast_playlist', 'id': 108, 'mentor_email': 'mudeshi1209@gmail.com', 'img': 'https://github.com/udiboy1209.png?size=50', 'title': 'YOUTUBE FAST PLAYLIST', 'tag': ['javascript', 'web-app', ' youtube-api', 'jquery'], 'mentor': 'Meet Udeshi', 'comm': 'https://gitter.im/fast-playlist', 'intro_full': 'If you use YouTube to listen to music constantly while working or studying, this WebApp is for you. It works like a Music Player for YouTube, where you can rapidly create a playlist by searching videos and adding them. Fast re-ordering, Repeat All, Repeat One, Shuffle features make it feel like a music player.'},

    ];

    var searchRes = cards;

    function findMatches(wordToMatch, cards) {
        if (wordToMatch === '') {
            return cards;
        } else {
            var options = {
              findAllMatches: true,
              threshold: 0.4,
              location: 0,
              distance: 100,
              maxPatternLength: 50,
              minMatchCharLength: 1,
              keys: [
                "intro_full",
                "link",
                "tag",
                "title",
                "mentor"
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
