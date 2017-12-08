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
      {'id': 1, 'intro_full': 'A pygame implementation of the game 2048.', 'link': 'https://github.com/tibrewalpratik17/2048_.git', 'mentor_email': 'tibrewalpratik17@gmail.com', 'mentor': 'Pratik Tibrewal', 'tag': ['Python', 'Pygame'], 'intro': 'A pygame implementation of the game 2048.', 'img': 'https://github.com/tibrewalpratik17.png?size=50', 'comm': 'https://groups.google.com/d/forum/kwoc2017_project2048_', 'title': '2048_', 'btnid': 1001},
{'id': 2, 'intro_full': 'A central repository for notes, papers, lab manuals of all departments of IIT KGP. Backend based in django.', 'link': 'https://github.com/Vipul999ujawane/acad-search', 'mentor_email': 'vipul999ujawane@gmail.com', 'mentor': 'Vipul Ujawane', 'tag': ['Python', 'Django', 'Javascript', 'Jquery', 'HTML', 'CSS'], 'intro': 'A central repository for notes, papers, lab manuals of all departments of IIT KGP. Backend based in django.', 'img': 'https://github.com/Vipul999ujawane.png?size=50', 'comm': ' gitter.im/acad-search ', 'title': 'ACAD-SEARCH', 'btnid': 1002},
{'id': 3, 'intro_full': 'Air Hockey game created using pygame ', 'link': 'https://github.com/NITDgpOS/AirHockey', 'mentor_email': 'aniqrah@gmail.com', 'mentor': 'Aniq Ur Rahman', 'tag': ['Python', 'AI', 'Game', 'Pygame', 'Physics'], 'intro': 'Air Hockey game created using pygame ', 'img': 'https://github.com/NITDgpOS.png?size=50', 'comm': 'https://gitter.im/AirHockey55/Lobby', 'title': 'AIRHOCKEY', 'btnid': 1003},
{'id': 4, 'intro_full': 'An all-in-one inventory and accounts solution for Chemist shops (both wholesale and retail) as per new Indian taxation standards.', 'link': 'https://github.com/alchemsynergy/alchem', 'mentor_email': 'techfreakworm@gmail.com | rajadelhi94@gmail.com | vipul.gyl12@gmail.com\n', 'mentor': 'Mayank Gupta | Ankit Kumar | Vipul Goyal', 'tag': ['Java', 'JavaFX', 'XML', 'CSS', 'PostgreSQL'], 'intro': 'An all-in-one inventory and accounts solution for Chemist shops (both wholesale and retail) as per new Indian taxation standards.', 'img': 'https://github.com/alchemsynergy.png?size=50', 'comm': 'https://join.slack.com/t/alchemsynergy/shared_invite/enQtMjU0NjUwMzAyNTgzLTM0OTNlMTg3ZDk1MmQ4ODdkYzM2YTA3MTE2MGM4ZTQ1ODU5ZTc3YTA4ODY5MWI2ZTAzZDM5MjEzOGM3N2FhYjY', 'title': 'ALCHEM DESKTOP', 'btnid': 1004},
{'id': 5, 'intro_full': 'Artificial Neural Network from scratch in Julia', 'link': 'https://github.com/americast/ANN', 'mentor_email': 'sayan.sinha@iitkgp.ac.in', 'mentor': 'Sayan Sinha', 'tag': ['Julia', 'ANN', 'DL', 'ML'], 'intro': 'Artificial Neural Network from scratch in Julia', 'img': 'https://github.com/americast.png?size=50', 'comm': 'https://gitter.im/ANN-julia/Lobby', 'title': 'ANN', 'btnid': 1005},
{'id': 6, 'intro_full': 'Personal Assistant for google chrome', 'link': 'https://github.com/Anna-Assistant/Anna', 'mentor_email': 'iim2014008@iiita.ac.in', 'mentor': 'Gautham Santhosh', 'tag': ['javascript', 'chrome extension', 'html', 'css'], 'intro': 'Personal Assistant for google chrome', 'img': 'https://github.com/Anna-Assistant.png?size=50', 'comm': 'https://anna.zulipchat.com/', 'title': 'ANNA ASSISTANT', 'btnid': 1006},
{'id': 7, 'intro_full': 'An architecture automation tool that converts a pencil drawn sketch to a rendered plan instantly', 'link': 'https://github.com/iashris/archdraw', 'mentor_email': 'ashris@mit.edu', 'mentor': 'Ashris Choudhury', 'tag': ['javascript', 'p5js', 'design', 'image processing', 'computer vision'], 'intro': 'An architecture automation tool that converts a pencil drawn sketch to a rendered plan instantly', 'img': 'https://github.com/iashris.png?size=50', 'comm': 'https://www.facebook.com/Ashris', 'title': 'ARCHDRAW', 'btnid': 1007},
{'id': 8, 'intro_full': ' A curated list of adages, psychological syndromes and behaviour explaining aphorisms. ', 'link': 'https://github.com/icyflame/awesome-social-science', 'mentor_email': 'kannan.siddharth12@gmail.com', 'mentor': 'Siddharth Kannan', 'tag': ['social science', 'psychology', 'syndromes', 'behavior', 'awesome-list', 'non programming'], 'intro': ' A curated list of adages, psychological syndromes and behaviour explaining aphorisms. ', 'img': 'https://github.com/icyflame.png?size=50', 'comm': 'https://groups.google.com/forum/#!forum/kwoc-2017-discussion-icyflame', 'title': 'AWESOME SOCIAL SCIENCE', 'btnid': 1008},
{'id': 9, 'intro_full': 'B.E.N.J.I., short for Brilliant and Efficient non-Javascript enabled Intelligence is a digital assistant that can help do several regular tasks on the laptop. Its numerous tasks include searching on Google, Wiki search, opening any Webpage, fetching news from several news agencies. The assistant can be activated and operated using voice commands. The assistant is yet undergoing changes for operating in a Linux and MacOS operating system', 'link': 'https://github.com/the-ethan-hunt/B.E.N.J.I.', 'mentor_email': 'dhruvgirishapte@gmail.com', 'mentor': 'Dhruv Apte', 'tag': ['Python', 'digital-assistant', 'speech-to-text', 'speech-recognition'], 'intro': 'B.E.N.J.I., short for Brilliant and Efficient non-Javascript enabled Intelligence is a digital assistant that can help do several regular tasks on the laptop...', 'img': 'https://github.com/the-ethan-hunt.png?size=50', 'comm': 'https://groups.google.com/forum/#!forum/benji-discussion', 'title': 'B.E.N.J.I.', 'btnid': 1009},
{'id': 10, 'intro_full': '--- A book sharing (PDF/EBOOK) platform ---  The project contains both   1. Android App   2. Website User can access the server from both.  Giving users the opportunity to upload/download infinite number of files. Each download of a file will be counted on server and based on higest number of downloads and ratings, the reputation of the user profile will be updated.', 'link': 'https://github.com/gmonetix/BooksPivot', 'mentor_email': 'gmonetix@gmail.com', 'mentor': 'Gaurav Bordoloi', 'tag': ['Java', 'Android Studio', 'Firebase', 'Web Server', 'Web-D'], 'intro': '--- A book sharing (PDF/EBOOK) platform ---  The project contains both   1. Android App   2. Website User can access the server from both.  Giving users the ...', 'img': 'https://github.com/gmonetix.png?size=50', 'comm': 'https://gitter.im/gmonetix/BooksPivot-KWOC', 'title': 'BOOKS PIVOT', 'btnid': 1010},
{'id': 11, 'intro_full': 'Breakout is a Atari-Breakout(Smashing) desktop game developed using Electron and Javascript.', 'link': 'https://github.com/jajodiaraghav/breakout', 'mentor_email': 'jajodia.raghav@gmail.com', 'mentor': 'Raghav Jajodia', 'tag': ['Electronjs', 'JavaScript', 'Desktop Game', 'Smashing'], 'intro': 'Breakout is a Atari-Breakout(Smashing) desktop game developed using Electron and Javascript.', 'img': 'https://github.com/jajodiaraghav.png?size=50', 'comm': 'https://gitter.im/breakout-electronjs/breakout', 'title': 'BREAKOUT', 'btnid': 1011},
{'id': 12, 'intro_full': "The goal of this project would be to use Facebook's graph API to fetch all the latest songs posted to the Facebook group Listen To This KGP and link them with proper metadata from one of the popular public music metadata APIs like Musixmatch. Once fetched, all this information is to be properly stored in a database for later access from APIs and for running machine learning models to identify listening trends, clustering users and giving recommendations.", 'link': 'https://github.com/lttkgp/C-3PO', 'mentor_email': 'ghostwriternr@gmail.com', 'mentor': 'Naresh', 'tag': ['Public APIs', 'Databases', 'Machine Learning', 'Python'], 'intro': "The goal of this project would be to use Facebook's graph API to fetch all the latest songs posted to the Facebook group Listen To This KGP and link them wit...", 'img': 'https://github.com/lttkgp.png?size=50', 'comm': 'https://slack.metakgp.org/', 'title': 'C-3PO', 'btnid': 1012},
{'id': 13, 'intro_full': 'An attempt at a clear, minimalistic code compiler / interpreter.', 'link': 'https://github.com/kaustubhhiware/c0derunR', 'mentor_email': 'hiwarekaustubh@gmail.com', 'mentor': 'Kaustubh Hiware', 'tag': ['Python', 'Django', 'UI', 'Natural Language Processing'], 'intro': 'An attempt at a clear, minimalistic code compiler / interpreter.', 'img': 'https://github.com/kaustubhhiware.png?size=50', 'comm': 'https://groups.google.com/forum/#!forum/c0derunr', 'title': 'C0DERUNR', 'btnid': 1013},
{'id': 14, 'intro_full': 'Packagement management system for haskell similar to npm for node.js', 'link': 'https://github.com/haskell/cabal', 'mentor_email': 'pranit.bauva@gmail.com', 'mentor': 'Pranit Bauva', 'tag': ['haskell ', 'cabal', 'Package Management'], 'intro': 'Packagement management system for haskell similar to npm for node.js', 'img': 'https://github.com/haskell.png?size=50', 'comm': '#cabal on freenode IRC and Github issues', 'title': 'CABAL', 'btnid': 1014},
{'id': 15, 'intro_full': 'Implementation of Segnet on a cascading architecture', 'link': 'https://github.com/americast/cascade-segnet-tf', 'mentor_email': 'sayan.sinha@iitkgp.ac.in', 'mentor': 'Sayan Sinha', 'tag': ['Python', 'AI', 'CNN', 'ML', 'DL', 'Encoder-decoder'], 'intro': 'Implementation of Segnet on a cascading architecture', 'img': 'https://github.com/americast.png?size=50', 'comm': 'https://gitter.im/Cascade-Segnet-TF/Lobby', 'title': 'CASCADE SEGNET', 'btnid': 1015},
{'id': 16, 'intro_full': 'Wikibot to track user contributions', 'link': 'https://github.com/metakgp/chitragupta/', 'mentor_email': 'rameshwar.zorro@gmail.com', 'mentor': 'Rameshwar Bhaskaran', 'tag': ['Python', 'Github-API', 'pywikibot'], 'intro': 'Wikibot to track user contributions', 'img': 'https://github.com/metakgp.png?size=50', 'comm': 'https://groups.google.com/forum/?hl=en-GB#!forum/metakgp-chitragupta', 'title': 'CHITRAGUPTA', 'btnid': 1016},
{'id': 17, 'intro_full': "Find out how long it takes you to solve the Rubik's Cube: without leaving your command line", 'link': 'https://github.com/icyflame/cli-cube-timer/issues', 'mentor_email': 'kannan.siddharth12@gmail.com', 'mentor': 'Siddharth Kannan', 'tag': ['javascript', 'tools', 'nodejs', 'NPM', 'module', "rubik's cube", 'timer', 'state machine'], 'intro': "Find out how long it takes you to solve the Rubik's Cube: without leaving your command line", 'img': 'https://github.com/icyflame.png?size=50', 'comm': 'https://groups.google.com/forum/#!forum/kwoc-2017-discussion-icyflame', 'title': 'CLI CUBE TIMER', 'btnid': 1017},
{'id': 18, 'intro_full': 'A scratch implementation of Convolutional Neural Network in python without the use of any deep learning library tested over data sets like CIFAR-10 for Object Detection & MNIST for Digit Recognition', 'link': 'https://github.com/zishansami102/CNN-from-Scratch', 'mentor_email': 'zishansami102@gmail.com', 'mentor': 'Zishan Sami', 'tag': ['Machine Learning', 'Deep Learning', 'Digit Recognition', 'Python', 'Flask', 'Javascript', 'HTML'], 'intro': 'A scratch implementation of Convolutional Neural Network in python without the use of any deep learning library tested over data sets like CIFAR-10 for Objec...', 'img': 'https://github.com/zishansami102.png?size=50', 'comm': 'https://groups.google.com/forum/#!forum/cnn-from-scratch', 'title': 'CNN-FROM-SCRATCH', 'btnid': 1018},
{'id': 19, 'intro_full': 'coala provides a unified interface for linting and fixing code with a single configuration file, regardless of the programming languages used. You can use coala from within your favorite editor, integrate it with your CI, get the results as JSON, or customize it to your needs with its flexible configuration syntax.  coala has a set of official bears (plugins) for several languages, including popular languages such as C/C++, Python, JavaScript, CSS, Java and many more, in addition to some generic language independent algorithms.', 'link': 'https://github.com/coala/', 'mentor_email': 'yash.nisar@somaiya.edu | code.rishus23@gmail.com | rahul@rj722.tech', 'mentor': 'Yash Nisar | Rishav Kumar | Rahul Jha', 'tag': ['Python', 'code-analysis', 'linter', 'languages', 'generic'], 'intro': 'coala provides a unified interface for linting and fixing code with a single configuration file, regardless of the programming languages used. You can use co...', 'img': 'https://github.com/coala.png?size=50', 'comm': 'https://gitter.im/coala/coala', 'title': 'COALA', 'btnid': 1019},
{'id': 20, 'intro_full': 'This repository contains a curated list of some of the awesome small projects made in Python that you can code away this summer.  It includes analysis of different Python modules, a deep analysis of the Python statistics modules and dataframes like Pandas.  It has some projects on classification, correlation and regression which are the fundamental building blocks of Machine Learning and Neural Networks. It also involves projects on Desktop Application and simple games. This repository hosts to 40 participants during Hacktoberfest', 'link': 'https://github.com/prateekiiest/Code-Sleep-Python', 'mentor_email': 'prateekkol21@gmail.com', 'mentor': 'Prateek Chanda', 'tag': ['Python', 'Games', 'Machine Learning', 'Algorithms ', 'Desktop Applications'], 'intro': 'This repository contains a curated list of some of the awesome small projects made in Python that you can code away this summer.  It includes analysis of dif...', 'img': 'https://github.com/prateekiiest.png?size=50', 'comm': 'https://code-sleep-python.slack.com/threads/', 'title': 'CODE SLEEP PYTHON', 'btnid': 1020},
{'id': 21, 'intro_full': 'It is a platform where students use to code online like many competative sites. It is a college competative platform for teacher-student interaction. Teachers organise events for the students. This improves the skills set of students.', 'link': 'https://github.com/ncs-jss/Code-Pad', 'mentor_email': 'ankitjain28may77@gmail.com', 'mentor': 'Ankit Jain', 'tag': ['php', 'Laravel', 'composer', 'html', 'css', 'javascript', 'jquery', 'bootstrap', 'mysql'], 'intro': 'It is a platform where students use to code online like many competative sites. It is a college competative platform for teacher-student interaction. Teacher...', 'img': 'https://github.com/ncs-jss.png?size=50', 'comm': 'https://gitter.im/ankitjain28may/Code-Pad', 'title': 'CODE-PAD', 'btnid': 1021},
{'id': 22, 'intro_full': "A Ruby gem that beautifies the terminal's ls command, with color and font-awesome icons.", 'link': 'https://github.com/athityakumar/colorls', 'mentor_email': 'athityakumar@gmail.com', 'mentor': 'Athitya Kumar', 'tag': ['Ruby', 'CLI'], 'intro': "A Ruby gem that beautifies the terminal's ls command, with color and font-awesome icons.", 'img': 'https://github.com/athityakumar.png?size=50', 'comm': 'athityakumar@gmail.com', 'title': 'COLORLS', 'btnid': 1022},
{'id': 23, 'intro_full': 'CLI for getting update of live cricket matches', 'link': 'https://github.com/sipah00/CrickFev', 'mentor_email': 'shubhamsipah00@gmail.com', 'mentor': 'shubham maddhashiya', 'tag': ['Python', 'Scraping', 'click', 'cli'], 'intro': 'CLI for getting update of live cricket matches', 'img': 'https://github.com/sipah00.png?size=50', 'comm': 'https://join.slack.com/t/crickkwoc/shared_invite/enQtMjc0NDUyNTU3NzE1LWFmOGI5MDBhMzBmNmJjMTM0ZjhjMTBhNTIzY2VhNTI5N2ZkNjVhYTNkZTUyNGMyNmMwMGE0NjY2OGM1YmY4NDg', 'title': 'CRICKFEV', 'btnid': 1023},
{'id': 24, 'intro_full': 'Amazing Github Projects as a Feed', 'link': 'https://github.com/mubaris/curiosity', 'mentor_email': 'mubarishassannk@gmail.com', 'mentor': 'Mubaris NK', 'tag': ['Javascript', 'Node.js', 'MongoDB', 'API', 'Github API', 'WebApp'], 'intro': 'Amazing Github Projects as a Feed', 'img': 'https://github.com/mubaris.png?size=50', 'comm': 'https://gitter.im/curiositylab/curiosity', 'title': 'CURIOSITY', 'btnid': 1024},
{'id': 25, 'intro_full': 'The dashboard would serve as the central access point for several projects under MetaKGP. The goal is to provide the KGP community an easy to use dashboard with useful utilities meant for students.', 'link': 'https://github.com/ghostwriternr/dashboard', 'mentor_email': 'ghostwriternr@gmail.com', 'mentor': 'Naresh', 'tag': ['React', 'Javascript', 'Frontend'], 'intro': 'The dashboard would serve as the central access point for several projects under MetaKGP. The goal is to provide the KGP community an easy to use dashboard w...', 'img': 'https://github.com/ghostwriternr.png?size=50', 'comm': 'https://slack.metakgp.org/', 'title': 'DASHBOARD', 'btnid': 1025},
{'id': 26, 'intro_full': 'A terminal-data controller with dynamic auto-complete features, that is built with ruby.', 'link': 'https://github.com/athityakumar/data', 'mentor_email': 'athityakumar@gmail.com', 'mentor': 'Athitya Kumar', 'tag': ['Ruby', 'CLI'], 'intro': 'A terminal-data controller with dynamic auto-complete features, that is built with ruby.', 'img': 'https://github.com/athityakumar.png?size=50', 'comm': 'athityakumar@gmail.com', 'title': 'DATA', 'btnid': 1026},
{'id': 27, 'intro_full': 'Using Deep Learning to predict properties of Chemicals', 'link': 'https://github.com/AvijitGhosh82/DeepChem', 'mentor_email': 'avijitg22@gmail.com', 'mentor': 'Avijit Ghosh', 'tag': ['Python', 'Scraping', 'Tensorflow', 'Deep Learning', 'Neural Network', 'Data Collection', 'Word2Vec'], 'intro': 'Using Deep Learning to predict properties of Chemicals', 'img': 'https://github.com/AvijitGhosh82.png?size=50', 'comm': 'https://gitter.im/Deep-Chem', 'title': 'DEEPCHEM', 'btnid': 1027},
{'id': 28, 'intro_full': 'It is an hybrid app to be developed for mess related activities and in-hall notifications for increasing convenience to boarders and bringing transparency into mess system of hall.', 'link': 'https://github.com/sandeepsharma-kgp/DigiNehruApk', 'mentor_email': 'sandeepsharma.iit@gmail.com', 'mentor': 'Sandeep Sharma', 'tag': ['Python', 'Django', 'JavaScript', 'Android', 'iOS', 'AWS'], 'intro': 'It is an hybrid app to be developed for mess related activities and in-hall notifications for increasing convenience to boarders and bringing transparency in...', 'img': 'https://github.com/sandeepsharma-kgp.png?size=50', 'comm': 'https://diginehruapp.slack.com/, https://www.facebook.com/sandeepsharma.iit', 'title': 'DIGINEHRU', 'btnid': 1028},
{'id': 29, 'intro_full': 'A program which accepts the id of a Facebook page and transforms into a table of the latest posts and comments.', 'link': 'https://github.com/Parth-Vader/FB-Spider', 'mentor_email': 'vermaparth97@gmail.com', 'mentor': 'Parth Verma', 'tag': ['Python', 'Spider', 'Facebook-API', 'Graph-API'], 'intro': 'A program which accepts the id of a Facebook page and transforms into a table of the latest posts and comments.', 'img': 'https://github.com/Parth-Vader.png?size=50', 'comm': 'https://join.slack.com/t/kwoc2017-parth/shared_invite/enQtMjc1OTU3MDUwNzc0LTNkNzQzN2U5NzI0ZTNkM2I5MGM5MDIyYTYxMzFhNWYzNWYwMDIzMjNmYjM2MTA1NDc1NWU2Yjc0ZTYxNGZmNTA', 'title': 'FB-SPIDER', 'btnid': 1029},
{'id': 30, 'intro_full': 'A free, open-source, extensible and cross system for creating rewards, loots and drops to be used in games built on the Unity engine.', 'link': 'https://github.com/amrit-choudhary/UnityChestDropSystem', 'mentor_email': 'albela.amrit@gmail.com', 'mentor': 'Amrit Choudhary', 'tag': ['Gaming'], 'intro': 'A free, open-source, extensible and cross system for creating rewards, loots and drops to be used in games built on the Unity engine.', 'img': 'https://github.com/amrit-choudhary.png?size=50', 'comm': 'https://groups.google.com/d/forum/game-rewards-system-channel', 'title': 'GAME REWARDS SYSTEM', 'btnid': 1030},
{'id': 31, 'intro_full': 'Implement GANs in Pytorch and Basic Numpy from the starter code', 'link': 'https://github.com/sangeet259/Generative_Adversarial_Networks', 'mentor_email': 'mail2sangeetmishra@gmail.com', 'mentor': 'Sangeet Kumar Mishra', 'tag': ['Python', 'PyTorch', 'Machine Learning', 'Deep Learning', 'Segmentation', 'Style Transfer'], 'intro': 'Implement GANs in Pytorch and Basic Numpy from the starter code', 'img': 'https://github.com/sangeet259.png?size=50', 'comm': 'https://kwoc-17.slack.com/', 'title': 'GENERATIVE ADVERSARIAL NETWORKS(GANS)', 'btnid': 1031},
{'id': 32, 'intro_full': 'Git - fast, scalable, distributed revision control system', 'link': 'https://github.com/git/git/', 'mentor_email': 'pranit.bauva@gmail.com', 'mentor': 'Pranit Bauva', 'tag': ['C', 'Shell'], 'intro': 'Git - fast, scalable, distributed revision control system', 'img': 'https://github.com/git.png?size=50', 'comm': 'Mailing lists (git@vger.kernel.org)', 'title': 'GIT', 'btnid': 1032},
{'id': 33, 'intro_full': "A module to interact with github's public API. Good place to start open-source contribution.", 'link': 'https://github.com/demfier/gitpub', 'mentor_email': 'sahu.gaurav719@gmail.com', 'mentor': 'Gaurav Sahu', 'tag': ['Python Library', 'GithubAPI'], 'intro': "A module to interact with github's public API. Good place to start open-source contribution.", 'img': 'https://github.com/demfier.png?size=50', 'comm': 'https://groups.google.com/forum/#!forum/gitpub', 'title': 'GITPUB', 'btnid': 1033},
{'id': 34, 'intro_full': "This program is a Python script that downloads all attachments found in the inbox of the user's Gmail account, based on a specific sender's address.", 'link': 'https://github.com/ashishkg0022/gmail-attachments', 'mentor_email': 'ashishkg0022@gmail.com', 'mentor': 'Ashish Kumar Gaurav', 'tag': [' IMAP  ', 'Gmail', 'Python Script'], 'intro': "This program is a Python script that downloads all attachments found in the inbox of the user's Gmail account, based on a specific sender's address.", 'img': 'https://github.com/ashishkg0022.png?size=50', 'comm': 'https://groups.google.com/d/forum/gmail-attachments', 'title': 'GMAIL-ATTACHMENTS', 'btnid': 1034},
{'id': 35, 'intro_full': 'An easy-to-use python client for Google News feeds.', 'link': 'https://github.com/nikhilkumarsingh/gnewsclient', 'mentor_email': 'nikhilksingh97@gmail.com', 'mentor': 'Nikhil Kumar Singh', 'tag': ['python', 'scraping', 'news-client', 'python-package'], 'intro': 'An easy-to-use python client for Google News feeds.', 'img': 'https://github.com/nikhilkumarsingh.png?size=50', 'comm': 'https://groups.google.com/forum/#!forum/kwoc-gnewsclient', 'title': 'GNEWSCLIENT', 'btnid': 1035},
{'id': 36, 'intro_full': 'A community clusters detection app that can take an edgelist as an input and generate an interactive force directed graph and different information like the degree centrality, betweenness centrality and clustering co-efficients are displayed.', 'link': 'https://github.com/dibyadas/d3-force-directed-graph/', 'mentor_email': 'dibyadas998@gmail.com', 'mentor': 'Dibya Prakash Das', 'tag': ['d3.js', 'graph', 'networkx', 'python', 'javascript'], 'intro': 'A community clusters detection app that can take an edgelist as an input and generate an interactive force directed graph and different information like the ...', 'img': 'https://github.com/dibyadas.png?size=50', 'comm': 'https://gitter.im/GraphClusters/Lobby', 'title': 'GRAPHCLUSTERS', 'btnid': 1036},
{'id': 37, 'intro_full': 'It helps anyone see paths drawn from different path planners and also tune the parameters', 'link': 'https://github.com/KgpKubs/Gui-PathPlanners', 'mentor_email': 'ashishkg0022@gmail.com', 'mentor': 'Ashish Kumar Gaurav', 'tag': ['PyQt4 ', 'RRTs', 'ROS'], 'intro': 'It helps anyone see paths drawn from different path planners and also tune the parameters', 'img': 'https://github.com/KgpKubs.png?size=50', 'comm': 'https://gitter.im/KgpKubs/Lobby', 'title': 'GUI-PATHPLANNERS', 'btnid': 1037},
{'id': 38, 'intro_full': 'Gets your timetable from ERP and adds it to your Google Calendar or gives you an ICS file which you can add in any common calendar application.', 'link': 'https://github.com/metakgp/gyft', 'mentor_email': 'i.nishantnikhil@gmail.com', 'mentor': 'Nishant Nikhil', 'tag': ['Python', 'Scraping', 'Google API', 'ERP'], 'intro': 'Gets your timetable from ERP and adds it to your Google Calendar or gives you an ICS file which you can add in any common calendar application.', 'img': 'https://github.com/metakgp.png?size=50', 'comm': 'https://slack.metakgp.org/', 'title': 'GYFT (GET YOUR FREAKING TIMETABLE)', 'btnid': 1038},
{'id': 39, 'intro_full': 'It was Idea to connect professor to  students via showing their availability in their office.  We have to make a firebase database which will be update the values in the list items (Names) shown in the app.', 'link': 'https://github.com/pv-912/Hackathon', 'mentor_email': 'nishant.sikarwar007@gmail.com', 'mentor': 'Nishant Singh Sikarwar', 'tag': ['Android', 'Databases'], 'intro': 'It was Idea to connect professor to  students via showing their availability in their office.  We have to make a firebase database which will be update the v...', 'img': 'https://github.com/pv-912.png?size=50', 'comm': 'https://groups.google.com/forum/#!forum/kwoc_hackathon_project/join', 'title': 'HACKATHON', 'btnid': 1039},
{'id': 40, 'intro_full': 'A traditional hangman game build using React.', 'link': 'https://github.com/djbarnwal/hangman', 'mentor_email': 'dhiraj@iitkgp.ac.in', 'mentor': 'Dhiraj Kumar', 'tag': [' Web Development', ' JavaScript', 'CSS', 'ReactJS'], 'intro': 'A traditional hangman game build using React.', 'img': 'https://github.com/djbarnwal.png?size=50', 'comm': 'https://www.facebook.com/groups/166681887253832', 'title': 'HANGMAN REACT GAME', 'btnid': 1040},
{'id': 41, 'intro_full': 'A 3 step portfolio generator.Enter details and get your portfolio generated in the form of a static website.', 'link': 'https://github.com/Anupam-dagar/Portfolio-Generator', 'mentor_email': 'iit2016128@iiita.ac.in', 'mentor': 'Anupam Dagar', 'tag': ['Python', 'Django', 'HTML', 'CSS', 'Javascript', 'jquery'], 'intro': 'A 3 step portfolio generator.Enter details and get your portfolio generated in the form of a static website.', 'img': 'https://github.com/Anupam-dagar.png?size=50', 'comm': 'https://hoxnox.zulipchat.com', 'title': 'HOXNOX - PORTFOLIOS MADE EASY', 'btnid': 1041},
{'id': 42, 'intro_full': 'The goal of this project is to create an API for KGP. Like with any API, the KGP API should be able to handle all sorts of data about say, departments, professors or places.', 'link': 'https://github.com/ghostwriternr/api', 'mentor_email': 'ghostwriternr@gmail.com', 'mentor': 'Naresh', 'tag': ['Backend', 'API', 'Python', 'Databases'], 'intro': 'The goal of this project is to create an API for KGP. Like with any API, the KGP API should be able to handle all sorts of data about say, departments, profe...', 'img': 'https://github.com/ghostwriternr.png?size=50', 'comm': 'https://slack.metakgp.org/', 'title': 'KGP API', 'btnid': 1042},
{'id': 43, 'intro_full': 'Command Line Tool for looking up words', 'link': 'https://github.com/kshitij10496/lexico', 'mentor_email': 'kshitijsaraogi@gmail.com', 'mentor': 'Kshitij Saraogi', 'tag': ['Python', 'CLI', 'DBMS', 'SQL', 'OOP'], 'intro': 'Command Line Tool for looking up words', 'img': 'https://github.com/kshitij10496.png?size=50', 'comm': 'mailto: kshitijsaraogi@gmail.com', 'title': 'LEXICO', 'btnid': 1043},
{'id': 44, 'intro_full': 'lterm is an online Terminal Eminulator. It is a step by step tutorial that will teach you the bash commands by making you execute them.', 'link': 'https://github.com/sr6033/lterm', 'mentor_email': 'shubhamrath.iiitb@gmail.com', 'mentor': 'Shubham Rath', 'tag': ['javascript', 'html', 'css', 'jquery'], 'intro': 'lterm is an online Terminal Eminulator. It is a step by step tutorial that will teach you the bash commands by making you execute them.', 'img': 'https://github.com/sr6033.png?size=50', 'comm': 'https://gitter.im/lterm/Lobby?utm_source=share-link&utm_medium=link&utm_campaign=share-link', 'title': 'LTERM', 'btnid': 1044},
{'id': 45, 'intro_full': "This is a simple python template that uses Flask to build a webhook for Facebook's Messenger Bot API. The aim is to build interactive chatbot with some added features of virtual assistant.", 'link': 'https://github.com/vernwalrahul/my-messenger-bot', 'mentor_email': 'vernwalrahul@gmail.com', 'mentor': 'Rahul Vernwal', 'tag': ['Python', 'NLP', 'APIs', 'Virtual Assistant'], 'intro': "This is a simple python template that uses Flask to build a webhook for Facebook's Messenger Bot API. The aim is to build interactive chatbot with some added...", 'img': 'https://github.com/vernwalrahul.png?size=50', 'comm': 'https://gitter.im/my-messenger-bot/Lobby', 'title': 'MESSENGER BOT', 'btnid': 1045},
{'id': 46, 'intro_full': 'Self-sufficient docker configuration for running the Metakgp Mediawiki instance', 'link': 'https://github.com/metakgp/metakgp-wiki', 'mentor_email': 'kannan.siddharth12@gmail.com', 'mentor': 'Siddharth Kannan', 'tag': ['Docker', 'PHP', 'SysAdmin', 'Linux'], 'intro': 'Self-sufficient docker configuration for running the Metakgp Mediawiki instance', 'img': 'https://github.com/metakgp.png?size=50', 'comm': 'https://slack.metakgp.org/', 'title': 'METAKGP WIKI: DOCKERIZED FOR FUN', 'btnid': 1046},
{'id': 47, 'intro_full': 'IITKGP Question paper search', 'link': 'https://github.com/metakgp/mfqp', 'mentor_email': 'athityakumar@gmail.com', 'mentor': 'Athitya Kumar', 'tag': ['JS', 'Python', 'Ruby', 'JSON', 'Javascript'], 'intro': 'IITKGP Question paper search', 'img': 'https://github.com/metakgp.png?size=50', 'comm': 'http://metakgp-slack.herokuapp.com/', 'title': 'MFQP', 'btnid': 1047},
{'id': 48, 'intro_full': 'A collection of Machine Learning algorithms written from sctrach. ', 'link': 'https://github.com/aribis369/ML-Starter-Pack', 'mentor_email': 'aribis369@gmail.com', 'mentor': 'Arindam Biswas', 'tag': ['Python', 'Machine Learning'], 'intro': 'A collection of Machine Learning algorithms written from sctrach. ', 'img': 'https://github.com/aribis369.png?size=50', 'comm': 'https://groups.google.com/forum/#!forum/ml-starter-pack', 'title': 'ML-STARTER-PACK', 'btnid': 1048},
{'id': 49, 'intro_full': 'A command line tool to add your music and videos directly to several devices.', 'link': 'https://github.com/Parth-Vader/MobOff', 'mentor_email': 'vermaparth97@gmail.com', 'mentor': 'Parth Verma', 'tag': ['Python', 'Command-Line', 'Youtube-dl', 'Click'], 'intro': 'A command line tool to add your music and videos directly to several devices.', 'img': 'https://github.com/Parth-Vader.png?size=50', 'comm': 'https://join.slack.com/t/kwoc2017-parth/shared_invite/enQtMjc1OTU3MDUwNzc0LTNkNzQzN2U5NzI0ZTNkM2I5MGM5MDIyYTYxMzFhNWYzNWYwMDIzMjNmYjM2MTA1NDc1NWU2Yjc0ZTYxNGZmNTA', 'title': 'MOBOFF', 'btnid': 1049},
{'id': 50, 'intro_full': ' A Python library written for Morse Code', 'link': 'https://github.com/morse-talk/morse-talk', 'mentor_email': 'aribis369@gmail.com', 'mentor': 'Arindam Biswas', 'tag': ['Python', 'CLI', 'GUI', 'Tkinter', 'Matplotlib', 'Wave'], 'intro': ' A Python library written for Morse Code', 'img': 'https://github.com/morse-talk.png?size=50', 'comm': 'https://gitter.im/OrkoHunter-kwoc/morse-talk', 'title': 'MORSE-TALK', 'btnid': 1050},
{'id': 51, 'intro_full': 'A simple program to inspire you with motivational quotes. Highly influenced by linux command fortune.', 'link': 'https://github.com/mubaris/motivate', 'mentor_email': 'mubarishassannk@gmail.com', 'mentor': 'Mubaris NK', 'tag': ['Python', 'JSON', 'CLI', 'Terminal', 'Easy'], 'intro': 'A simple program to inspire you with motivational quotes. Highly influenced by linux command fortune.', 'img': 'https://github.com/mubaris.png?size=50', 'comm': 'https://gitter.im/pymotivate/Lobby', 'title': 'MOTIVATE', 'btnid': 1051},
{'id': 52, 'intro_full': 'Aggregating news since antiquity', 'link': 'https://github.com/metakgp/naarad-source', 'mentor_email': 'sayan.sinha@iitkgp.ac.in', 'mentor': 'Sayan Sinha', 'tag': ['Python', 'scrapping', 'GraphQL', 'API', 'Django'], 'intro': 'Aggregating news since antiquity', 'img': 'https://github.com/metakgp.png?size=50', 'comm': 'https://slack.metakgp.org/', 'title': 'NAARAD', 'btnid': 1052},
{'id': 53, 'intro_full': 'NetworkX is a Python package for the Graph Theory and Complex Networks.', 'link': 'https://github.com/networkx/networkx', 'mentor_email': 'himanshu.mishra.kgp@gmail.com', 'mentor': 'Himanshu Mishra', 'tag': ['Python', 'Graph Theory', 'Algorithms', 'Library', 'Package'], 'intro': 'NetworkX is a Python package for the Graph Theory and Complex Networks.', 'img': 'https://github.com/networkx.png?size=50', 'comm': 'https://groups.google.com/forum/#!forum/networkx-discuss', 'title': 'NETWORKX', 'btnid': 1053},
{'id': 54, 'intro_full': "A Ruby implementation of Python's well known Graph library : networkx", 'link': 'https://github.com/athityakumar/networkx.rb', 'mentor_email': 'athityakumar@gmail.com', 'mentor': 'Athitya Kumar', 'tag': ['Ruby', 'Gem', 'Networkx', 'Graph Theory'], 'intro': "A Ruby implementation of Python's well known Graph library : networkx", 'img': 'https://github.com/athityakumar.png?size=50', 'comm': 'athityakumar@gmail.com', 'title': 'NETWORKX.RB', 'btnid': 1054},
{'id': 55, 'intro_full': 'An app on PHP to add, delete and edit notes ', 'link': 'https://github.com/ankita132/notes_app', 'mentor_email': '2ankitasahoo13@gmail.com', 'mentor': 'Ankita Sahoo', 'tag': ['css', 'javascript', 'PHP', 'ajax'], 'intro': 'An app on PHP to add, delete and edit notes ', 'img': 'https://github.com/ankita132.png?size=50', 'comm': 'https://groups.google.com/forum/#!forum/notes_app', 'title': 'NOTES APP', 'btnid': 1055},
{'id': 56, 'intro_full': 'A terminal task-notifier that works across different command line emulators', 'link': 'https://github.com/kaustubhhiware/NotiFyre', 'mentor_email': 'hiwarekaustubh@gmail.com', 'mentor': 'Kaustubh Hiware', 'tag': ['Bash', 'Terminal', 'Linux'], 'intro': 'A terminal task-notifier that works across different command line emulators', 'img': 'https://github.com/kaustubhhiware.png?size=50', 'comm': 'https://www.facebook.com/groups/552015885141292/', 'title': 'NOTIFYRE', 'btnid': 1056},
{'id': 57, 'intro_full': 'OpenChat is an Open Source messaging platform where people can send messages to anyone registered to this platform', 'link': 'http://github.com/ankitjain28may/openchat', 'mentor_email': 'ankitjain28may77@gmail.com', 'mentor': 'Ankit Jain', 'tag': ['php', 'composer', 'JavaScript', 'ajax', 'websockets', 'html', 'css', 'jquery', 'gulp'], 'intro': 'OpenChat is an Open Source messaging platform where people can send messages to anyone registered to this platform', 'img': 'https://github.com/ankitjain28may.png?size=50', 'comm': 'https://gitter.im/ankitjain28may/openchat', 'title': 'OPENCHAT', 'btnid': 1057},
{'id': 58, 'intro_full': 'A Chrome browser extension for improving second-language vocabulary learning by making API calls to Oxford Dictionary API’s.', 'link': 'https://github.com/himanshukumar660/Oxnary', 'mentor_email': 'himanshukumar660@gmail.com', 'mentor': 'Himanshu Kumar', 'tag': ['Javascript', 'HTML', 'CSS', 'API', 'Chrome Extension'], 'intro': 'A Chrome browser extension for improving second-language vocabulary learning by making API calls to Oxford Dictionary API’s.', 'img': 'https://github.com/himanshukumar660.png?size=50', 'comm': 'https://gitter.im/Oxnary/Lobby', 'title': 'OXNARY', 'btnid': 1058},
{'id': 59, 'intro_full': 'A very basic android implementation of the Pacman Game.', 'link': 'https://github.com/harishnandan/Pacman-lvl1', 'mentor_email': 'harishshivam@gmail.com', 'mentor': 'Harish Nandan', 'tag': ['Java', 'Android'], 'intro': 'A very basic android implementation of the Pacman Game.', 'img': 'https://github.com/harishnandan.png?size=50', 'comm': 'https://www.facebook.com/groups/127895284549751', 'title': 'PACMAN-LVL1', 'btnid': 1059},
{'id': 60, 'intro_full': 'Android application for storing all your passwords.', 'link': 'https://github.com/Pritom14/Password-Storage', 'mentor_email': 'pritommazumdar1995@gmail.com', 'mentor': 'Pritom Mazumdar', 'tag': ['Android', 'Java'], 'intro': 'Android application for storing all your passwords.', 'img': 'https://github.com/Pritom14.png?size=50', 'comm': 'https://gitter.im/Password-Storage/Lobby', 'title': 'PASSWORD-STORAGE', 'btnid': 1060},
{'id': 61, 'intro_full': 'A GitHub integration to automatically review Python code style over Pull Requests', 'link': 'https://github.com/OrkoHunter/pep8speaks', 'mentor_email': 'himanshu.mishra.kgp@gmail.com', 'mentor': 'Himanshu Mishra', 'tag': ['Python', 'Backend'], 'intro': 'A GitHub integration to automatically review Python code style over Pull Requests', 'img': 'https://github.com/OrkoHunter.png?size=50', 'comm': 'https://gitter.im/OrkoHunter-kwoc/pep8speaks', 'title': 'PEP8SPEAKS', 'btnid': 1061},
{'id': 62, 'intro_full': 'A file sharing web application over local network.', 'link': 'https://github.com/nitdgpos/pizilla', 'mentor_email': 'naveenkumarsangi@protonmail.com', 'mentor': 'Naveen Kumar Sangi', 'tag': ['javascript', 'reactJS', 'file-uploads'], 'intro': 'A file sharing web application over local network.', 'img': 'https://github.com/nitdgpos.png?size=50', 'comm': 'https://gitter.im/nit-dgp/general', 'title': 'PIZILLA', 'btnid': 1062},
{'id': 63, 'intro_full': 'Create a dynamic queue in YouTube.', 'link': 'https://github.com/nishnik/Play_Next', 'mentor_email': 'i.nishantnikhil@gmail.com', 'mentor': 'Nishant Nikhil', 'tag': ['JavaScript', 'YouTube', 'Chrome Extension'], 'intro': 'Create a dynamic queue in YouTube.', 'img': 'https://github.com/nishnik.png?size=50', 'comm': 'https://gitter.im/Play_Next/', 'title': 'PLAY NEXT', 'btnid': 1063},
{'id': 64, 'intro_full': 'A Repository to store implementation of some of the famous Data Structures and Algorithms (mainly in C/C++/Java/Python) for everyone to learn and contribute.', 'link': 'https://github.com/codeIIEST/Algorithms', 'mentor_email': 'prateekkol21@gmail.com', 'mentor': 'Prateek Chanda', 'tag': ['Python', 'Algorithms', 'Data Structures', 'C++', 'Java'], 'intro': 'A Repository to store implementation of some of the famous Data Structures and Algorithms (mainly in C/C++/Java/Python) for everyone to learn and contribute.', 'img': 'https://github.com/codeIIEST.png?size=50', 'comm': 'https://gitter.im/codeIIEST/Algorithms', 'title': 'PLAYING WITH ALGORITHMS', 'btnid': 1064},
{'id': 65, 'intro_full': 'A terminal and GUI based tool for quick visualisation of mathematical functions.', 'link': 'https://github.com/NITDgpOS/PlotIt', 'mentor_email': 'djmdeveloper060796@gmail.com', 'mentor': 'Deepjyoti Mondal', 'tag': ['Python', 'Plotting', 'Terminal', 'GUI'], 'intro': 'A terminal and GUI based tool for quick visualisation of mathematical functions.', 'img': 'https://github.com/NITDgpOS.png?size=50', 'comm': 'https://gitter.im/PlotIt/Lobby', 'title': 'PLOTIT', 'btnid': 1065},
{'id': 66, 'intro_full': 'The idea is to make the AI win at Pong using RL and to generalize the architecture proposed, for other simple games.', 'link': 'https://github.com/vernwalrahul/Pong-using-RL', 'mentor_email': 'vernwalrahul@gmail.com', 'mentor': 'Rahul Vernwal', 'tag': ['Python', 'Machine Learning', 'RL', 'PyGame'], 'intro': 'The idea is to make the AI win at Pong using RL and to generalize the architecture proposed, for other simple games.', 'img': 'https://github.com/vernwalrahul.png?size=50', 'comm': 'https://gitter.im/Pong-Using-RL/Lobby', 'title': 'PONG-USING-RL', 'btnid': 1066},
{'id': 67, 'intro_full': 'Tool to configure system-wide proxy settings in Linux.', 'link': 'https://github.com/himanshub16/ProxyMan', 'mentor_email': 'himanshushekharb16@gmail.com', 'mentor': 'Himanshu Shekhar', 'tag': ['bash', 'shell', 'linux', 'proxy', 'script'], 'intro': 'Tool to configure system-wide proxy settings in Linux.', 'img': 'https://github.com/himanshub16.png?size=50', 'comm': 'https://github.com/himanshub16/ProxyMan/issues', 'title': 'PROXYMAN', 'btnid': 1067},
{'id': 68, 'intro_full': 'A fast, flexible, and comprehensive framework for  quantitative text analysis in R.  Provides functionality for corpus management, creating and manipulating tokens and ngrams, exploring keywords in context,  forming and manipulating sparse matrices of documents by features and feature co-occurrences, analyzing keywords, computing feature similarities and distances, applying content dictionaries, applying supervised and unsupervised machine learning,  visually representing text and text analyses, and more. Written in R and C++, with a website in Hugo.', 'link': 'https://github.com/kbenoit/quanteda', 'mentor_email': 'kbenoit@lse.ac.uk', 'mentor': 'Kenneth Benoit', 'tag': ['R', 'C++', 'Web development', 'NLP', 'Text analysis', 'Databases'], 'intro': 'A fast, flexible, and comprehensive framework for  quantitative text analysis in R.  Provides functionality for corpus management, creating and manipulating ...', 'img': 'https://github.com/kbenoit.png?size=50', 'comm': 'https://join.slack.com/t/quanteda/signup', 'title': 'QUANTEDA: QUANTITATIVE ANALYSIS OF TEXTUAL DATA (R PACKAGE)', 'btnid': 1068},
{'id': 69, 'intro_full': 'Take notes without opening any editor or application and have them organized on your desktop in the form of sticky notes', 'link': 'https://github.com/dileepsankhla/QuickNotes', 'mentor_email': 'sankhla.dileep96@gmail.com', 'mentor': 'Dileep Sankhla', 'tag': ['C++', 'Shell', 'C', 'Qt', 'QMake', 'Synchronization'], 'intro': 'Take notes without opening any editor or application and have them organized on your desktop in the form of sticky notes', 'img': 'https://github.com/dileepsankhla.png?size=50', 'comm': 'https://groups.google.com/forum/#!forum/quicknotes', 'title': 'QUICKNOTES', 'btnid': 1069},
{'id': 70, 'intro_full': 'An app on react where you can upload and view images at various locations on the earth', 'link': 'https://github.com/ankita132/react_google_map', 'mentor_email': '2ankitasahoo13@gmail.com', 'mentor': 'Ankita Sahoo', 'tag': ['reactjs', 'firebase', 'css'], 'intro': 'An app on react where you can upload and view images at various locations on the earth', 'img': 'https://github.com/ankita132.png?size=50', 'comm': 'https://groups.google.com/forum/#!forum/kwoc17-react_google_map', 'title': 'REACT GOOGLE MAP', 'btnid': 1070},
{'id': 71, 'intro_full': 'A chrome extension for mail tracking', 'link': 'https://github.com/dibyadas/read-it', 'mentor_email': 'dibyadas998@gmail.com', 'mentor': 'Dibya Prakash Das', 'tag': ['Python', 'Chrome Extension', 'flask', 'gmail'], 'intro': 'A chrome extension for mail tracking', 'img': 'https://github.com/dibyadas.png?size=50', 'comm': 'https://gitter.im/read-it/', 'title': 'READ-IT', 'btnid': 1071},
{'id': 72, 'intro_full': 'A web game based on reflection.', 'link': 'https://github.com/harishnandan/reflexio', 'mentor_email': 'harishshivam@gmail.com', 'mentor': 'Harish Nandan', 'tag': ['CSS', 'Javascript', 'HTML'], 'intro': 'A web game based on reflection.', 'img': 'https://github.com/harishnandan.png?size=50', 'comm': 'https://www.facebook.com/groups/136133120486393/', 'title': 'REFLEXIO', 'btnid': 1072},
{'id': 73, 'intro_full': 'Convert relative dates back to a date representation: 3 days ago => A date object for today - 3 days', 'link': 'https://github.com/icyflame/relative-date-reverse/issues', 'mentor_email': 'kannan.siddharth12@gmail.com', 'mentor': 'Siddharth Kannan', 'tag': ['javascript', 'datetime', 'utility', 'tools', 'nodejs', 'NPM', 'module'], 'intro': 'Convert relative dates back to a date representation: 3 days ago => A date object for today - 3 days', 'img': 'https://github.com/icyflame.png?size=50', 'comm': 'https://groups.google.com/forum/#!forum/kwoc-2017-discussion-icyflame', 'title': 'RELATIVE DATE: REVERSE', 'btnid': 1073},
{'id': 74, 'intro_full': 'Collection of variants of RRT Path Planners', 'link': 'https://github.com/KgpKubs/RRT', 'mentor_email': 'sayan.sinha@iitkgp.ac.in', 'mentor': 'Sayan Sinha', 'tag': ['C++', 'AI', 'Path planning'], 'intro': 'Collection of variants of RRT Path Planners', 'img': 'https://github.com/KgpKubs.png?size=50', 'comm': 'https://gitter.im/KgpKubs/Lobby', 'title': 'RRT', 'btnid': 1074},
{'id': 75, 'intro_full': 'Web application developed on Angular2 that uses API provided by last.fm. Find artists and display albums and tracks listings.', 'link': 'https://github.com/jajodiaraghav/rTunes', 'mentor_email': 'jajodia.raghav@gmail.com', 'mentor': 'Raghav Jajodia', 'tag': ['Angular2', 'JavaScript', 'Web Application', 'SPA', 'TypeScript'], 'intro': 'Web application developed on Angular2 that uses API provided by last.fm. Find artists and display albums and tracks listings.', 'img': 'https://github.com/jajodiaraghav.png?size=50', 'comm': 'https://gitter.im/rTunes-angular2/Lobby', 'title': 'RTUNES', 'btnid': 1075},
{'id': 76, 'intro_full': "In Android there are many privacy issues, every time some application fetch your details that you don't want to let ope to anyone. To ensure that your data is private I have the project in which we have to fake all possible bugs of privacy in Android and fix them into a small android app. Every time when ever some data travel from one end of user to some where else, we will notify about the privacy.", 'link': 'https://github.com/vivonk/SaveMore', 'mentor_email': 'nirmalsarswat400@gmail.com', 'mentor': 'Nirmal Sarswat', 'tag': ['Android ', 'Security', 'Network'], 'intro': "In Android there are many privacy issues, every time some application fetch your details that you don't want to let ope to anyone. To ensure that your data i...", 'img': 'https://github.com/vivonk.png?size=50', 'comm': 'https://join.slack.com/t/kwoc/shared_invite/enQtMjc2Njk1MTA5ODk0LTk4MTc4ODY5MjEzYWExNTcyYWM2NTRiMjQ1YzRhMzE3YWZlOTkzNDdkZTMzOWYxMDYxMDM3NzQ5MjdlNjFiYTY', 'title': 'SAFEANDROID', 'btnid': 1076},
{'id': 77, 'intro_full': 'A Natural Language Processing Toolkit for Indian Lamguages that utilize LSTMs for POS tagging.', 'link': 'https://github.com/djokester/sangita', 'mentor_email': 'samriddhidjokestersinha@gmail.com', 'mentor': 'Samriddhi Sinha', 'tag': ['Python', 'NLP', 'Machine Learning', 'Scraping'], 'intro': 'A Natural Language Processing Toolkit for Indian Lamguages that utilize LSTMs for POS tagging.', 'img': 'https://github.com/djokester.png?size=50', 'comm': 'https://groups.google.com/d/forum/sangitanlp', 'title': 'SANGITA', 'btnid': 1077},
{'id': 78, 'intro_full': 'SciRuby-examples is a guide for a newbie to dive into machine learning and natural language processing using an unconventional language: Ruby', 'link': 'https://github.com/the-ethan-hunt/sciruby-examples', 'mentor_email': 'dhruvgirishapte@gmail.com', 'mentor': 'Dhruv Apte', 'tag': ['Ruby', 'Natural Language Processing', 'Deep Learning', 'Machine Learning', ' IRuby notebook'], 'intro': 'SciRuby-examples is a guide for a newbie to dive into machine learning and natural language processing using an unconventional language: Ruby', 'img': 'https://github.com/the-ethan-hunt.png?size=50', 'comm': 'https://groups.google.com/forum/#!forum/sciruby-examples-discus', 'title': 'SCIRUBY-EXAMPLES', 'btnid': 1078},
{'id': 79, 'intro_full': 'A Django web app for collecting various results for scrapy-bench and uploading it to web.', 'link': 'https://github.com/scrapy/scrapy-bench-speedcenter', 'mentor_email': 'vermaparth97@gmail.com', 'mentor': 'Parth Verma', 'tag': ['Python', 'Scrapy', 'Scraping', 'Benchmarking', 'Django'], 'intro': 'A Django web app for collecting various results for scrapy-bench and uploading it to web.', 'img': 'https://github.com/scrapy.png?size=50', 'comm': 'https://join.slack.com/t/kwoc2017-parth/shared_invite/enQtMjc1OTU3MDUwNzc0LTNkNzQzN2U5NzI0ZTNkM2I5MGM5MDIyYTYxMzFhNWYzNWYwMDIzMjNmYjM2MTA1NDc1NWU2Yjc0ZTYxNGZmNTA', 'title': 'SCRAPY BENCH SPEEDCENTER', 'btnid': 1079},
{'id': 80, 'intro_full': 'A command-line interface for bench-marking Scrapy, that reflects real-world usage.', 'link': 'https://github.com/scrapy/scrapy-bench', 'mentor_email': 'vermaparth97@gmail.com', 'mentor': 'Parth Verma', 'tag': ['Python', 'Click', 'Scrapy', 'Scraping', 'Benchmarking', 'Memory-Profiling', 'Command-Line'], 'intro': 'A command-line interface for bench-marking Scrapy, that reflects real-world usage.', 'img': 'https://github.com/scrapy.png?size=50', 'comm': 'https://join.slack.com/t/kwoc2017-parth/shared_invite/enQtMjc1OTU3MDUwNzc0LTNkNzQzN2U5NzI0ZTNkM2I5MGM5MDIyYTYxMzFhNWYzNWYwMDIzMjNmYjM2MTA1NDc1NWU2Yjc0ZTYxNGZmNTA', 'title': 'SCRAPY-BENCH', 'btnid': 1080},
{'id': 81, 'intro_full': 'Image Codec using Private-key cryptography ', 'link': 'https://github.com/NITDgpOS/SecureSnaps', 'mentor_email': 'aniqrah@gmail.com', 'mentor': 'Aniq Ur Rahman', 'tag': ['Python', 'Image', 'codec', 'encryption', 'cryptography'], 'intro': 'Image Codec using Private-key cryptography ', 'img': 'https://github.com/NITDgpOS.png?size=50', 'comm': 'https://gitter.im/SecureSnaps55/Lobby', 'title': 'SECURESNAPS', 'btnid': 1081},
{'id': 82, 'intro_full': 'TouchNet: a large scale dataset of 3D objects and a simulator for manipulating these objects for the purpose of researching and training AIs to learn and reason about their world via sensorimotor neural systems and touch.', 'link': 'https://github.com/jtoy/sensenet', 'mentor_email': 'jtoy@jtoy.net', 'mentor': 'Jason Toy', 'tag': ['Python', 'machinelearning', 'deeplearning', 'neuroscience', 'numpy', 'tensorflow', 'pytorch'], 'intro': 'TouchNet: a large scale dataset of 3D objects and a simulator for manipulating these objects for the purpose of researching and training AIs to learn and rea...', 'img': 'https://github.com/jtoy.png?size=50', 'comm': 'https://join.slack.com/t/sensenetai/shared_invite/enQtMjc4MzQ5ODUzNzgzLThjYTNmMzE4MGQ1MGMyN2NiMWIxNzI1NTYwMjI5ODE4NWY5MDNmN2U5OTkwMGE4OTFiNjNjYmQ0YjgwNjBmZWU', 'title': 'SENSENET', 'btnid': 1082},
{'id': 83, 'intro_full': 'Investigating properties of neural networks', 'link': 'https://github.com/nishnik/sherlocked', 'mentor_email': 'i.nishantnikhil@gmail.com', 'mentor': 'Nishant Nikhil', 'tag': ['Python', 'Neural Networks', 'Deep Learning'], 'intro': 'Investigating properties of neural networks', 'img': 'https://github.com/nishnik.png?size=50', 'comm': 'https://gitter.im/nn_sherlocked', 'title': 'SHERLOCKED', 'btnid': 1083},
{'id': 84, 'intro_full': 'Signal prediction with a Sequence-to-Sequence (seq2seq) Recurrent Neural Network (RNN) model in TensorFlow', 'link': 'https://github.com/guillaume-chevalier/seq2seq-signal-prediction', 'mentor_email': 'guillaume-chevalier@outlook.com', 'mentor': 'Guillaume Chevalier', 'tag': ['Python', 'Deep Learning', ' Machine Learning', ' Signal Prediction', 'RNN', 'seq2seq'], 'intro': 'Signal prediction with a Sequence-to-Sequence (seq2seq) Recurrent Neural Network (RNN) model in TensorFlow', 'img': 'https://github.com/guillaume-chevalier.png?size=50', 'comm': 'https://seq2seq-git.slack.com', 'title': 'SIGNAL PREDICTION WITH A SEQ2SEQ RNN', 'btnid': 1084},
{'id': 85, 'intro_full': 'Practise Algorithm and Data Structure and learn how Open Source Contribution works.', 'link': 'https://github.com/khanchi97/Smvdu-Algos', 'mentor_email': 'sushilkhanchi97@gmail.com | 22shubh22@gmail.com', 'mentor': 'Sushil khanchi | Shubham Goyal', 'tag': ['Python', 'C', 'Java', 'CPP', 'Algorithms', 'DataStructure'], 'intro': 'Practise Algorithm and Data Structure and learn how Open Source Contribution works.', 'img': 'https://github.com/khanchi97.png?size=50', 'comm': 'https://gitter.im/Smvdu-Algos/Lobby', 'title': 'SMVDU-ALGOS', 'btnid': 1085},
{'id': 86, 'intro_full': 'Popular Snake game build using Pygame for desktop', 'link': 'https://github.com/jajodiaraghav/Snake', 'mentor_email': 'jajodia.raghav@gmail.com', 'mentor': 'Raghav Jajodia', 'tag': ['Python', 'Pygame', 'Snake'], 'intro': 'Popular Snake game build using Pygame for desktop', 'img': 'https://github.com/jajodiaraghav.png?size=50', 'comm': 'https://gitter.im/Snake-pygame/Lobby', 'title': 'SNAKE', 'btnid': 1086},
{'id': 87, 'intro_full': 'A simple game of snakes implemented in C++ and OpenCV', 'link': 'https://github.com/americast/Snakes', 'mentor_email': 'sayan.sinha@iitkgp.ac.in', 'mentor': 'Sayan Sinha', 'tag': ['C++', 'Gaming', 'OpenCV'], 'intro': 'A simple game of snakes implemented in C++ and OpenCV', 'img': 'https://github.com/americast.png?size=50', 'comm': 'https://gitter.im/opencv-Snakes/Lobby', 'title': 'SNAKES', 'btnid': 1087},
{'id': 88, 'intro_full': 'It is a platform to keep an eye on all the posts shared, liked and commented by the people hired by you for marketing.', 'link': 'https://github.com/ankitjain28may/Social-Media-Review-Platform', 'mentor_email': 'ankitjain28may77@gmail.com', 'mentor': 'Ankit Jain', 'tag': ['Python', 'Scraping', 'php', 'sentiment analysis', 'machine learning', 'laravel', 'facebook api', 'twitter api', 'HTML', 'CSS', 'Jquery', 'Javascript', 'Bootstrap'], 'intro': 'It is a platform to keep an eye on all the posts shared, liked and commented by the people hired by you for marketing.', 'img': 'https://github.com/ankitjain28may.png?size=50', 'comm': 'https://gitter.im/ankitjain28may/Social-Media-Review-Platform', 'title': 'SOCIAL-MEDIA-REVIEW-PLATFORM', 'btnid': 1088},
{'id': 89, 'intro_full': 'Building Fixed Model, Real Time Improvements in the Model and Making a Model for every test data encountered (Lazy Learning) by using Regression.', 'link': 'https://github.com/rahul-da/Statistical_Modelling_Techniques', 'mentor_email': 'rahulreynoldindia@gmail.com', 'mentor': 'Rahul Das', 'tag': ['R', 'Statistics', 'Regression'], 'intro': 'Building Fixed Model, Real Time Improvements in the Model and Making a Model for every test data encountered (Lazy Learning) by using Regression.', 'img': 'https://github.com/rahul-da.png?size=50', 'comm': 'https://groups.google.com/forum/#!forum/regression_modeling', 'title': 'STATISTICAL MODELLING TECHNIQUES', 'btnid': 1089},
{'id': 90, 'intro_full': 'Often for complicated tasks in computer vision it is required that a camera be calibrated. Camera calibration is a necessary step in 3D computer vision in order to extract metric information from 2D images. Stereo calibration is used to find the geometric transformations between two cameras, and the relationship between two image projections of a particular 3D scene. More details here: http://sourishghosh.com/2016/stereo-calibration-cpp-opencv/', 'link': 'https://github.com/sourishg/stereo-calibration', 'mentor_email': 'ragnarok0211@gmail.com', 'mentor': 'Sourish Ghosh', 'tag': ['Camera Calibration', 'Computer Vision', 'C++', 'OpenCV'], 'intro': 'Often for complicated tasks in computer vision it is required that a camera be calibrated. Camera calibration is a necessary step in 3D computer vision in or...', 'img': 'https://github.com/sourishg.png?size=50', 'comm': 'https://cvkgp.slack.com', 'title': 'STEREO CAMERA CALIBRATION', 'btnid': 1090},
{'id': 91, 'intro_full': 'SunPy is a community-developed free and open-source software package for solar physics. It aims to be provide a comprehensive data analysis environment that allows researchers within the field of solar physics to carry out their tasks with the minimal effort.  SunPy is written using the Python programming language and is build upon the scientific Python environment which includes several core packages such as NumPy, SciPy, Matplotlib and Pandas. Since SunPy deals with key astrophysical concepts, its development is closely associated with that of Astropy, which is a fundamental package within the Python astronomy ecosystem.', 'link': 'https://github.com/sunpy/sunpy', 'mentor_email': 'nitin.iitkgp23@gmail.com', 'mentor': 'Nitin Choudhary', 'tag': ['Python', 'astronomy', 'sun', 'gsoc', 'scientific'], 'intro': 'SunPy is a community-developed free and open-source software package for solar physics. It aims to be provide a comprehensive data analysis environment that ...', 'img': 'https://github.com/sunpy.png?size=50', 'comm': 'https://riot.im/app/#/room/#sunpy-kwoc:matrix.org', 'title': 'SUNPY', 'btnid': 1091},
{'id': 92, 'intro_full': 'A Python Library for symbolic Maths.', 'link': 'https://github.com/sympy/sympy', 'mentor_email': 'shivamvats.iitkgp@gmail.com', 'mentor': 'Shivam Vats', 'tag': ['Python', 'Maths ', 'Computation'], 'intro': 'A Python Library for symbolic Maths.', 'img': 'https://github.com/sympy.png?size=50', 'comm': 'https://gitter.im/sympy/sympy', 'title': 'SYMPY', 'btnid': 1092},
{'id': 93, 'intro_full': 'CLI version of a moodle based "Nalanda: E-LMS of BITS Pilani" to show updates', 'link': 'https://github.com/Pro-Panda/Termi-Nalanda', 'mentor_email': 'f2016015@pilani.bits-pilani.ac.in', 'mentor': 'Rahul Bothra', 'tag': ['Python', 'Scraping', 'GUI', 'CLI'], 'intro': 'CLI version of a moodle based "Nalanda: E-LMS of BITS Pilani" to show updates', 'img': 'https://github.com/Pro-Panda.png?size=50', 'comm': 'https://www.facebook.com/groups/301389363707310/', 'title': 'TERMI-NALANDA', 'btnid': 1093},
{'id': 94, 'intro_full': 'It is a small game which is dual player need to change it into single player as new feature', 'link': 'https://github.com/cmeher196/TicTacToe', 'mentor_email': 'b115022@iiit-bh.ac.in', 'mentor': 'CHANDRA PRAKASH MEHER', 'tag': ['android', 'java', 'design UX/UI'], 'intro': 'It is a small game which is dual player need to change it into single player as new feature', 'img': 'https://github.com/cmeher196.png?size=50', 'comm': 'https://gitter.im/tictactoe-discussion/Lobby?utm_source=share-link&utm_medium=link&utm_campaign=share-link', 'title': 'TICTACTOE', 'btnid': 1094},
{'id': 95, 'intro_full': 'TIC-TAC-TOE game designed in various languages to play it.', 'link': 'https://github.com/RITESHMOHAPATRA/TIC-TAC-TOE', 'mentor_email': 'mohapatraritesh97@gmail.com', 'mentor': 'Ritesh Kumar Mohapatra', 'tag': ['Python', 'Scraping'], 'intro': 'TIC-TAC-TOE game designed in various languages to play it.', 'img': 'https://github.com/RITESHMOHAPATRA.png?size=50', 'comm': 'https://groups.google.com/forum/#!forum/tic-tac-toe_kwoc/join', 'title': 'TIC_TAC_TOE', 'btnid': 1095},
{'id': 96, 'intro_full': 'A tool to display the timetable. A Terminal timetable, if you will.', 'link': 'https://github.com/athityakumar/timetable', 'mentor_email': 'athityakumar@gmail.com', 'mentor': 'Athitya Kumar', 'tag': ['Ruby', 'CLI'], 'intro': 'A tool to display the timetable. A Terminal timetable, if you will.', 'img': 'https://github.com/athityakumar.png?size=50', 'comm': 'athityakumar@gmail.com', 'title': 'TIMETABLE', 'btnid': 1096},
{'id': 97, 'intro_full': 'It is a project on Machine Learning which aims to predict survival of passengers on Titanic. Contributing to this will aim to create a concrete understanding of ML for beginners and also help them go forward in Open Source', 'link': 'https://github.com/prateekiiest/titanic_survival_exploration', 'mentor_email': 'prateekkol21@gmail.com', 'mentor': 'Prateek Chanda', 'tag': ['Python', 'Machine Learning', 'ipython notebook', 'statistical analysis'], 'intro': 'It is a project on Machine Learning which aims to predict survival of passengers on Titanic. Contributing to this will aim to create a concrete understanding...', 'img': 'https://github.com/prateekiiest.png?size=50', 'comm': 'https://titanic-survival.slack.com/', 'title': 'TITANIC SURVIVAL EXPLORATION', 'btnid': 1097},
{'id': 98, 'intro_full': "Analyses trends in upcoming movie's anticipation. ", 'link': 'https://github.com/aribis369/Trend-Analyzer', 'mentor_email': 'aribis369@gmail.com', 'mentor': 'Arindam Biswas', 'tag': ['Python', 'Scraping', 'Machine Learning', 'MongoDB'], 'intro': "Analyses trends in upcoming movie's anticipation. ", 'img': 'https://github.com/aribis369.png?size=50', 'comm': 'https://groups.google.com/forum/#!forum/trend-analyzer', 'title': 'TREND-ANALYZER', 'btnid': 1098},
{'id': 99, 'intro_full': "TV Series is a tool that scrapes Episode Synopsis' of popular TV Series' from websites like Wikipedia / IMDb and show in one place with a user-friendly navigation UI.", 'link': 'https://github.com/athityakumar/tvseries', 'mentor_email': 'athityakumar@gmail.com', 'mentor': 'Athitya Kumar', 'tag': ['Web Scraping', 'Ruby', 'Website', 'Frontend'], 'intro': "TV Series is a tool that scrapes Episode Synopsis' of popular TV Series' from websites like Wikipedia / IMDb and show in one place with a user-friendly navig...", 'img': 'https://github.com/athityakumar.png?size=50', 'comm': 'athityakumar@gmail.com', 'title': 'TVSERIES', 'btnid': 1099},
{'id': 100, 'intro_full': 'A cross platform application built on QT for measuring typing speed.', 'link': 'https://github.com/himanshukumar660/Typometer', 'mentor_email': 'himanshukumar660@gmail.com', 'mentor': 'Himanshu Kumar', 'tag': ['C++', 'Qt', 'QMake'], 'intro': 'A cross platform application built on QT for measuring typing speed.', 'img': 'https://github.com/himanshukumar660.png?size=50', 'comm': 'gitter.im/Typometer', 'title': 'TYPOMETER', 'btnid': 1100},
{'id': 101, 'intro_full': 'Reddit bot which replies to sarcastic comments', 'link': 'https://github.com/mubaris/urban-robot', 'mentor_email': 'mubarishassannk@gmail.com', 'mentor': 'Mubaris NK', 'tag': ['Python', 'Machine Learning', 'NLP', 'Natural Language Processing'], 'intro': 'Reddit bot which replies to sarcastic comments', 'img': 'https://github.com/mubaris.png?size=50', 'comm': 'https://gitter.im/urban-robot/Lobby', 'title': 'URBAN ROBOT', 'btnid': 1101},
{'id': 102, 'intro_full': 'A basic URL-shortener made in Django framework.', 'link': 'https://github.com/modihere/url-shortener', 'mentor_email': 'nit.vivek@hotmail.com', 'mentor': 'Vivek Modi', 'tag': ['Python'], 'intro': 'A basic URL-shortener made in Django framework.', 'img': 'https://github.com/modihere.png?size=50', 'comm': 'https://gitter.im/url_shortener/Lobby', 'title': 'URL-SHORTENER', 'btnid': 1102},
{'id': 103, 'intro_full': 'The goal of this project is to build a calculator which has speech reconition ability for input.', 'link': 'https://github.com/mayank-kgp/VoiceCalculator', 'mentor_email': 'mayank.jindal5@gmail.com', 'mentor': 'Mayank Jindal', 'tag': ['Android', 'Java'], 'intro': 'The goal of this project is to build a calculator which has speech reconition ability for input.', 'img': 'https://github.com/mayank-kgp.png?size=50', 'comm': 'https://gitter.im/VoiceCalculator', 'title': 'VOICE CALCULATOR', 'btnid': 1103},
{'id': 104, 'intro_full': 'As of the w3 report, total 240M+ websites are available on the internet but the only such search engine knows about that. We are about create such crawler that makes the database of the websites and there contents for open source help. As data science is growing like wings on fire, providing this huge data to open source will be one of the great idea.', 'link': 'https://github.com/fossasia/query-server', 'mentor_email': 'nirmalsarswat400@gmail.com', 'mentor': 'Nirmal Sarswat', 'tag': ['Python', 'Scraping', 'crwaling', 'DBMS'], 'intro': 'As of the w3 report, total 240M+ websites are available on the internet but the only such search engine knows about that. We are about create such crawler th...', 'img': 'https://github.com/fossasia.png?size=50', 'comm': 'https://join.slack.com/t/kwoc/shared_invite/enQtMjc2Njk1MTA5ODk0LTk4MTc4ODY5MjEzYWExNTcyYWM2NTRiMjQ1YzRhMzE3YWZlOTkzNDdkZTMzOWYxMDYxMDM3NzQ5MjdlNjFiYTY', 'title': 'WEBDB', 'btnid': 1104},
{'id': 105, 'intro_full': 'A video chat for LAN based on tcp. Beginner friendly project', 'link': 'https://github.com/rava-dosa/Weed', 'mentor_email': 'apoorvakumar169@gmail.com', 'mentor': 'Apoorva Kumar', 'tag': ['C++', 'Socket', 'OpenCv'], 'intro': 'A video chat for LAN based on tcp. Beginner friendly project', 'img': 'https://github.com/rava-dosa.png?size=50', 'comm': 'https://groups.google.com/forum/#!forum/weedongit', 'title': 'WEED', 'btnid': 1105},
{'id': 106, 'intro_full': 'A CLI tool to bring all the latest news to your terminal.', 'link': 'https://github.com/aribis369/Whats-in-the-news-GEEK', 'mentor_email': 'aribis369@gmail.com', 'mentor': 'Arindam Biswas', 'tag': ['Python', 'CLI', 'API'], 'intro': 'A CLI tool to bring all the latest news to your terminal.', 'img': 'https://github.com/aribis369.png?size=50', 'comm': 'https://groups.google.com/forum/#!forum/whats-in-the-news-geek', 'title': 'WHATS-IN-THE-NEWS-GEEK', 'btnid': 1106},
{'id': 107, 'intro_full': 'Searches for recent Youtube videos opened and displays them in a list form.', 'link': 'https://github.com/Parth-Vader/YoutubeDataCollector', 'mentor_email': 'vermaparth97@gmail.com', 'mentor': 'Parth Verma', 'tag': ['Chrome', 'Extension', 'JavaScript', 'Data-Analytics', 'Databases'], 'intro': 'Searches for recent Youtube videos opened and displays them in a list form.', 'img': 'https://github.com/Parth-Vader.png?size=50', 'comm': 'https://join.slack.com/t/kwoc2017-parth/shared_invite/enQtMjc1OTU3MDUwNzc0LTNkNzQzN2U5NzI0ZTNkM2I5MGM5MDIyYTYxMzFhNWYzNWYwMDIzMjNmYjM2MTA1NDc1NWU2Yjc0ZTYxNGZmNTA', 'title': 'YOUTUBE DATA COLLECTOR', 'btnid': 1107},
{'id': 108, 'intro_full': 'If you use YouTube to listen to music constantly while working or studying, this WebApp is for you. It works like a Music Player for YouTube, where you can rapidly create a playlist by searching videos and adding them. Fast re-ordering, Repeat All, Repeat One, Shuffle features make it feel like a music player.', 'link': 'https://github.com/udiboy1209/fast_playlist', 'mentor_email': 'mudeshi1209@gmail.com', 'mentor': 'Meet Udeshi', 'tag': ['javascript', 'web-app', ' youtube-api', 'jquery'], 'intro': 'If you use YouTube to listen to music constantly while working or studying, this WebApp is for you. It works like a Music Player for YouTube, where you can r...', 'img': 'https://github.com/udiboy1209.png?size=50', 'comm': 'https://gitter.im/fast-playlist', 'title': 'YOUTUBE FAST PLAYLIST', 'btnid': 1108},

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
