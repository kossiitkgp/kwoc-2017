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
      {'title': '2048_', 'id': 1, 'btnid': 1001, 'intro': 'A pygame implementation of the game 2048.', 'intro_full': 'A pygame implementation of the game 2048.', 'mentor': 'Pratik Tibrewal', 'mentor_email': 'tibrewalpratik17@gmail.com', 'tag': ['Python', 'Pygame'], 'link': 'https://github.com/tibrewalpratik17/2048_.git', 'comm': 'https://groups.google.com/d/forum/kwoc2017_project2048_', 'img': 'https://github.com/tibrewalpratik17.png?size=50'},
{'title': 'ACAD-SEARCH', 'id': 2, 'btnid': 1002, 'intro': 'A central repository for notes, papers, lab manuals of all departments of IIT KGP. Backend based in django.', 'intro_full': 'A central repository for notes, papers, lab manuals of all departments of IIT KGP. Backend based in django.', 'mentor': 'Vipul Ujawane', 'mentor_email': 'vipul999ujawane@gmail.com', 'tag': ['Python', 'Django', 'Javascript', 'Jquery', 'HTML', 'CSS'], 'link': 'https://github.com/Vipul999ujawane/acad-search', 'comm': ' gitter.im/acad-search ', 'img': 'https://github.com/Vipul999ujawane.png?size=50'},
{'title': 'AIRHOCKEY', 'id': 3, 'btnid': 1003, 'intro': 'Air Hockey game created using pygame ', 'intro_full': 'Air Hockey game created using pygame ', 'mentor': 'Aniq Ur Rahman', 'mentor_email': 'aniqrah@gmail.com', 'tag': ['Python', 'AI', 'Game', 'Pygame', 'Physics'], 'link': 'https://github.com/NITDgpOS/AirHockey', 'comm': 'https://gitter.im/AirHockey55/Lobby', 'img': 'https://github.com/NITDgpOS.png?size=50'},
{'title': 'ALCHEM DESKTOP', 'id': 4, 'btnid': 1004, 'intro': 'An all-in-one inventory and accounts solution for Chemist shops (both wholesale and retail) as per new Indian taxation standards.', 'intro_full': 'An all-in-one inventory and accounts solution for Chemist shops (both wholesale and retail) as per new Indian taxation standards.', 'mentor': 'Mayank Gupta | Ankit Kumar | Vipul Goyal', 'mentor_email': 'techfreakworm@gmail.com | rajadelhi94@gmail.com | vipul.gyl12@gmail.com\n', 'tag': ['Java', 'JavaFX', 'XML', 'CSS', 'PostgreSQL'], 'link': 'https://github.com/alchemsynergy/alchem', 'comm': 'https://join.slack.com/t/alchemsynergy/shared_invite/enQtMjU0NjUwMzAyNTgzLTM0OTNlMTg3ZDk1MmQ4ODdkYzM2YTA3MTE2MGM4ZTQ1ODU5ZTc3YTA4ODY5MWI2ZTAzZDM5MjEzOGM3N2FhYjY', 'img': 'https://github.com/alchemsynergy.png?size=50'},
{'title': 'ANN', 'id': 5, 'btnid': 1005, 'intro': 'Artificial Neural Network from scratch in Julia', 'intro_full': 'Artificial Neural Network from scratch in Julia', 'mentor': 'Sayan Sinha', 'mentor_email': 'sayan.sinha@iitkgp.ac.in', 'tag': ['Julia', 'ANN', 'DL', 'ML'], 'link': 'https://github.com/americast/ANN', 'comm': 'https://gitter.im/ANN-julia/Lobby', 'img': 'https://github.com/americast.png?size=50'},
{'title': 'ANNA ASSISTANT', 'id': 6, 'btnid': 1006, 'intro': 'Personal Assistant for google chrome', 'intro_full': 'Personal Assistant for google chrome', 'mentor': 'Gautham Santhosh', 'mentor_email': 'iim2014008@iiita.ac.in', 'tag': ['javascript', 'chrome extension', 'AI', 'Assistant'], 'link': 'https://github.com/Anna-Assistant/Anna', 'comm': 'https://anna.zulipchat.com/', 'img': 'https://github.com/Anna-Assistant.png?size=50'},
{'title': 'ARCHDRAW', 'id': 7, 'btnid': 1007, 'intro': 'An architecture automation tool that converts a pencil drawn sketch to a rendered plan instantly', 'intro_full': 'An architecture automation tool that converts a pencil drawn sketch to a rendered plan instantly', 'mentor': 'Ashris Choudhury', 'mentor_email': 'ashris@mit.edu', 'tag': ['javascript', 'p5js', 'design', 'image processing', 'computer vision'], 'link': 'https://github.com/iashris/archdraw', 'comm': 'https://www.facebook.com/Ashris', 'img': 'https://github.com/iashris.png?size=50'},
{'title': 'AWESOME SOCIAL SCIENCE', 'id': 8, 'btnid': 1008, 'intro': ' A curated list of adages, psychological syndromes and behaviour explaining aphorisms. ', 'intro_full': ' A curated list of adages, psychological syndromes and behaviour explaining aphorisms. ', 'mentor': 'Siddharth Kannan', 'mentor_email': 'kannan.siddharth12@gmail.com', 'tag': ['social science', 'psychology', 'syndromes', 'behavior', 'awesome-list', 'non programming'], 'link': 'https://github.com/icyflame/awesome-social-science', 'comm': 'https://groups.google.com/forum/#!forum/kwoc-2017-discussion-icyflame', 'img': 'https://github.com/icyflame.png?size=50'},
{'title': 'B.E.N.J.I.', 'id': 9, 'btnid': 1009, 'intro': 'B.E.N.J.I., short for Brilliant and Efficient non-Javascript enabled Intelligence is a digital assistant that can help do several regular tasks on the laptop...', 'intro_full': 'B.E.N.J.I., short for Brilliant and Efficient non-Javascript enabled Intelligence is a digital assistant that can help do several regular tasks on the laptop. Its numerous tasks include searching on Google, Wiki search, opening any Webpage, fetching news from several news agencies. The assistant can be activated and operated using voice commands. The assistant is yet undergoing changes for operating in a Linux and MacOS operating system', 'mentor': 'Dhruv Apte', 'mentor_email': 'dhruvgirishapte@gmail.com', 'tag': ['Python', 'digital-assistant', 'speech-to-text', 'speech-recognition'], 'link': 'https://github.com/the-ethan-hunt/B.E.N.J.I.', 'comm': 'https://groups.google.com/forum/#!forum/benji-discussion', 'img': 'https://github.com/the-ethan-hunt.png?size=50'},
{'title': 'BOOKS PIVOT', 'id': 10, 'btnid': 1010, 'intro': '--- A book sharing (PDF/EBOOK) platform ---  The project contains both   1. Android App   2. Website User can access the server from both.  Giving users the ...', 'intro_full': '--- A book sharing (PDF/EBOOK) platform ---  The project contains both   1. Android App   2. Website User can access the server from both.  Giving users the opportunity to upload/download infinite number of files. Each download of a file will be counted on server and based on higest number of downloads and ratings, the reputation of the user profile will be updated.', 'mentor': 'Gaurav Bordoloi', 'mentor_email': 'gmonetix@gmail.com', 'tag': ['Java', 'Android Studio', 'Firebase', 'Web Server', 'Web-D'], 'link': 'https://github.com/gmonetix/BooksPivot', 'comm': 'https://gitter.im/gmonetix/BooksPivot-KWOC', 'img': 'https://github.com/gmonetix.png?size=50'},
{'title': 'BREAKOUT', 'id': 11, 'btnid': 1011, 'intro': 'Breakout is a Atari-Breakout(Smashing) desktop game developed using Electron and Javascript.', 'intro_full': 'Breakout is a Atari-Breakout(Smashing) desktop game developed using Electron and Javascript.', 'mentor': 'Raghav Jajodia', 'mentor_email': 'jajodia.raghav@gmail.com', 'tag': ['Electronjs', 'JavaScript', 'Desktop Game', 'Smashing'], 'link': 'https://github.com/jajodiaraghav/breakout', 'comm': 'https://gitter.im/breakout-electronjs/breakout', 'img': 'https://github.com/jajodiaraghav.png?size=50'},
{'title': 'C-3PO', 'id': 12, 'btnid': 1012, 'intro': "The goal of this project would be to use Facebook's graph API to fetch all the latest songs posted to the Facebook group Listen To This KGP and link them wit...", 'intro_full': "The goal of this project would be to use Facebook's graph API to fetch all the latest songs posted to the Facebook group Listen To This KGP and link them with proper metadata from one of the popular public music metadata APIs like Musixmatch. Once fetched, all this information is to be properly stored in a database for later access from APIs and for running machine learning models to identify listening trends, clustering users and giving recommendations.", 'mentor': 'Naresh', 'mentor_email': 'ghostwriternr@gmail.com', 'tag': ['Public APIs', 'Databases', 'Machine Learning', 'Python'], 'link': 'https://github.com/lttkgp/C-3PO', 'comm': 'https://slack.metakgp.org/', 'img': 'https://github.com/lttkgp.png?size=50'},
{'title': 'C0DERUNR', 'id': 13, 'btnid': 1013, 'intro': 'An attempt at a clear, minimalistic code compiler / interpreter.', 'intro_full': 'An attempt at a clear, minimalistic code compiler / interpreter.', 'mentor': 'Kaustubh Hiware', 'mentor_email': 'hiwarekaustubh@gmail.com', 'tag': ['Python', 'Django', 'UI', 'Natural Language Processing'], 'link': 'https://github.com/kaustubhhiware/c0derunR', 'comm': 'https://groups.google.com/forum/#!forum/c0derunr', 'img': 'https://github.com/kaustubhhiware.png?size=50'},
{'title': 'CABAL', 'id': 14, 'btnid': 1014, 'intro': 'Packagement management system for haskell similar to npm for node.js', 'intro_full': 'Packagement management system for haskell similar to npm for node.js', 'mentor': 'Pranit Bauva', 'mentor_email': 'pranit.bauva@gmail.com', 'tag': ['haskell ', 'cabal', 'Package Management'], 'link': 'https://github.com/haskell/cabal', 'comm': '#cabal on freenode IRC and Github issues', 'img': 'https://github.com/haskell.png?size=50'},
{'title': 'CASCADE SEGNET', 'id': 15, 'btnid': 1015, 'intro': 'Implementation of Segnet on a cascading architecture', 'intro_full': 'Implementation of Segnet on a cascading architecture', 'mentor': 'Sayan Sinha', 'mentor_email': 'sayan.sinha@iitkgp.ac.in', 'tag': ['Python', 'AI', 'CNN', 'ML', 'DL', 'Encoder-decoder'], 'link': 'https://github.com/americast/cascade-segnet-tf', 'comm': 'https://gitter.im/Cascade-Segnet-TF/Lobby', 'img': 'https://github.com/americast.png?size=50'},
{'title': 'CHITRAGUPTA', 'id': 16, 'btnid': 1016, 'intro': 'Wikibot to track user contributions', 'intro_full': 'Wikibot to track user contributions', 'mentor': 'Rameshwar Bhaskaran', 'mentor_email': 'rameshwar.zorro@gmail.com', 'tag': ['Python', 'Github-API', 'pywikibot'], 'link': 'https://github.com/metakgp/chitragupta/', 'comm': 'https://groups.google.com/forum/?hl=en-GB#!forum/metakgp-chitragupta', 'img': 'https://github.com/metakgp.png?size=50'},
{'title': 'CLI CUBE TIMER', 'id': 17, 'btnid': 1017, 'intro': "Find out how long it takes you to solve the Rubik's Cube: without leaving your command line", 'intro_full': "Find out how long it takes you to solve the Rubik's Cube: without leaving your command line", 'mentor': 'Siddharth Kannan', 'mentor_email': 'kannan.siddharth12@gmail.com', 'tag': ['javascript', 'tools', 'nodejs', 'NPM', 'module', "rubik's cube", 'timer', 'state machine'], 'link': 'https://github.com/icyflame/cli-cube-timer/issues', 'comm': 'https://groups.google.com/forum/#!forum/kwoc-2017-discussion-icyflame', 'img': 'https://github.com/icyflame.png?size=50'},
{'title': 'CNN-FROM-SCRATCH', 'id': 18, 'btnid': 1018, 'intro': 'A scratch implementation of Convolutional Neural Network in python without the use of any deep learning library tested over data sets like CIFAR-10 for Objec...', 'intro_full': 'A scratch implementation of Convolutional Neural Network in python without the use of any deep learning library tested over data sets like CIFAR-10 for Object Detection & MNIST for Digit Recognition', 'mentor': 'Zishan Sami', 'mentor_email': 'zishansami102@gmail.com', 'tag': ['Machine Learning', 'Deep Learning', 'Digit Recognition', 'Python', 'Flask', 'Javascript', 'HTML'], 'link': 'https://github.com/zishansami102/CNN-from-Scratch', 'comm': 'https://groups.google.com/forum/#!forum/cnn-from-scratch', 'img': 'https://github.com/zishansami102.png?size=50'},
{'title': 'COALA', 'id': 19, 'btnid': 1019, 'intro': 'coala provides a unified interface for linting and fixing code with a single configuration file, regardless of the programming languages used. You can use co...', 'intro_full': 'coala provides a unified interface for linting and fixing code with a single configuration file, regardless of the programming languages used. You can use coala from within your favorite editor, integrate it with your CI, get the results as JSON, or customize it to your needs with its flexible configuration syntax.  coala has a set of official bears (plugins) for several languages, including popular languages such as C/C++, Python, JavaScript, CSS, Java and many more, in addition to some generic language independent algorithms.', 'mentor': 'Yash Nisar | Rishav Kumar | Rahul Jha', 'mentor_email': 'yash.nisar@somaiya.edu | code.rishus23@gmail.com | rahul@rj722.tech', 'tag': ['Python', 'code-analysis', 'linter', 'languages', 'generic'], 'link': 'https://github.com/coala/', 'comm': 'https://gitter.im/coala/coala', 'img': 'https://github.com/coala.png?size=50'},
{'title': 'CODE SLEEP PYTHON', 'id': 20, 'btnid': 1020, 'intro': 'This repository contains a curated list of some of the awesome small projects made in Python that you can code away this summer.  It includes analysis of dif...', 'intro_full': 'This repository contains a curated list of some of the awesome small projects made in Python that you can code away this summer.  It includes analysis of different Python modules, a deep analysis of the Python statistics modules and dataframes like Pandas.  It has some projects on classification, correlation and regression which are the fundamental building blocks of Machine Learning and Neural Networks. It also involves projects on Desktop Application and simple games. This repository hosts to 40 participants during Hacktoberfest', 'mentor': 'Prateek Chanda', 'mentor_email': 'prateekkol21@gmail.com', 'tag': ['Python', 'Games', 'Machine Learning', 'Algorithms ', 'Desktop Applications'], 'link': 'https://github.com/prateekiiest/Code-Sleep-Python', 'comm': 'https://code-sleep-python.slack.com/threads/', 'img': 'https://github.com/prateekiiest.png?size=50'},
{'title': 'CODE-PAD', 'id': 21, 'btnid': 1021, 'intro': 'It is a platform where students use to code online like many competative sites. It is a college competative platform for teacher-student interaction. Teacher...', 'intro_full': 'It is a platform where students use to code online like many competative sites. It is a college competative platform for teacher-student interaction. Teachers organise events for the students. This improves the skills set of students.', 'mentor': 'Ankit Jain', 'mentor_email': 'ankitjain28may77@gmail.com', 'tag': ['php', 'Laravel', 'composer', 'html', 'css', 'javascript', 'jquery', 'bootstrap', 'mysql'], 'link': 'https://github.com/ncs-jss/Code-Pad', 'comm': 'https://gitter.im/ankitjain28may/Code-Pad', 'img': 'https://github.com/ncs-jss.png?size=50'},
{'title': 'COLORLS', 'id': 22, 'btnid': 1022, 'intro': "A Ruby gem that beautifies the terminal's ls command, with color and font-awesome icons.", 'intro_full': "A Ruby gem that beautifies the terminal's ls command, with color and font-awesome icons.", 'mentor': 'Athitya Kumar', 'mentor_email': 'athityakumar@gmail.com', 'tag': ['Ruby', 'CLI'], 'link': 'https://github.com/athityakumar/colorls', 'comm': 'athityakumar@gmail.com', 'img': 'https://github.com/athityakumar.png?size=50'},
{'title': 'CRICKFEV', 'id': 23, 'btnid': 1023, 'intro': 'CLI for getting update of live cricket matches', 'intro_full': 'CLI for getting update of live cricket matches', 'mentor': 'Shubham Maddhashiya', 'mentor_email': 'shubhamsipah00@gmail.com', 'tag': ['Python', 'Scraping', 'click', 'cli'], 'link': 'https://github.com/sipah00/CrickFev', 'comm': 'https://join.slack.com/t/crickkwoc/shared_invite/enQtMjc0NDUyNTU3NzE1LWFmOGI5MDBhMzBmNmJjMTM0ZjhjMTBhNTIzY2VhNTI5N2ZkNjVhYTNkZTUyNGMyNmMwMGE0NjY2OGM1YmY4NDg', 'img': 'https://github.com/sipah00.png?size=50'},
{'title': 'CURIOSITY', 'id': 24, 'btnid': 1024, 'intro': 'Amazing Github Projects as a Feed', 'intro_full': 'Amazing Github Projects as a Feed', 'mentor': 'Mubaris NK', 'mentor_email': 'mubarishassannk@gmail.com', 'tag': ['Javascript', 'Node.js', 'MongoDB', 'API', 'Github API', 'WebApp'], 'link': 'https://github.com/mubaris/curiosity', 'comm': 'https://gitter.im/curiositylab/curiosity', 'img': 'https://github.com/mubaris.png?size=50'},
{'title': 'DASHBOARD', 'id': 25, 'btnid': 1025, 'intro': 'The dashboard would serve as the central access point for several projects under MetaKGP. The goal is to provide the KGP community an easy to use dashboard w...', 'intro_full': 'The dashboard would serve as the central access point for several projects under MetaKGP. The goal is to provide the KGP community an easy to use dashboard with useful utilities meant for students.', 'mentor': 'Naresh', 'mentor_email': 'ghostwriternr@gmail.com', 'tag': ['React', 'Javascript', 'Frontend'], 'link': 'https://github.com/ghostwriternr/dashboard', 'comm': 'https://slack.metakgp.org/', 'img': 'https://github.com/ghostwriternr.png?size=50'},
{'title': 'DATA', 'id': 26, 'btnid': 1026, 'intro': 'A terminal-data controller with dynamic auto-complete features, that is built with ruby.', 'intro_full': 'A terminal-data controller with dynamic auto-complete features, that is built with ruby.', 'mentor': 'Athitya Kumar', 'mentor_email': 'athityakumar@gmail.com', 'tag': ['Ruby', 'CLI'], 'link': 'https://github.com/athityakumar/data', 'comm': 'athityakumar@gmail.com', 'img': 'https://github.com/athityakumar.png?size=50'},
{'title': 'DEEPCHEM', 'id': 27, 'btnid': 1027, 'intro': 'Using Deep Learning to predict properties of Chemicals', 'intro_full': 'Using Deep Learning to predict properties of Chemicals', 'mentor': 'Avijit Ghosh', 'mentor_email': 'avijitg22@gmail.com', 'tag': ['Python', 'Scraping', 'Tensorflow', 'Deep Learning', 'Neural Network', 'Data Collection', 'Word2Vec'], 'link': 'https://github.com/AvijitGhosh82/DeepChem', 'comm': 'https://gitter.im/Deep-Chem', 'img': 'https://github.com/AvijitGhosh82.png?size=50'},
{'title': 'DIGINEHRU', 'id': 28, 'btnid': 1028, 'intro': 'It is an hybrid app to be developed for mess related activities and in-hall notifications for increasing convenience to boarders and bringing transparency in...', 'intro_full': 'It is an hybrid app to be developed for mess related activities and in-hall notifications for increasing convenience to boarders and bringing transparency into mess system of hall.', 'mentor': 'Sandeep Sharma', 'mentor_email': 'sandeepsharma.iit@gmail.com', 'tag': ['Python', 'Django', 'JavaScript', 'Android', 'iOS', 'AWS'], 'link': 'https://github.com/sandeepsharma-kgp/DigiNehruApk', 'comm': 'https://diginehruapp.slack.com/, https://www.facebook.com/sandeepsharma.iit', 'img': 'https://github.com/sandeepsharma-kgp.png?size=50'},
{'title': 'FB-SPIDER', 'id': 29, 'btnid': 1029, 'intro': 'A program which accepts the id of a Facebook page and transforms into a table of the latest posts and comments.', 'intro_full': 'A program which accepts the id of a Facebook page and transforms into a table of the latest posts and comments.', 'mentor': 'Parth Verma', 'mentor_email': 'vermaparth97@gmail.com', 'tag': ['Python', 'Spider', 'Facebook-API', 'Graph-API'], 'link': 'https://github.com/Parth-Vader/FB-Spider', 'comm': 'https://join.slack.com/t/kwoc2017-parth/shared_invite/enQtMjc1OTU3MDUwNzc0LTNkNzQzN2U5NzI0ZTNkM2I5MGM5MDIyYTYxMzFhNWYzNWYwMDIzMjNmYjM2MTA1NDc1NWU2Yjc0ZTYxNGZmNTA', 'img': 'https://github.com/Parth-Vader.png?size=50'},
{'title': 'GAME REWARDS SYSTEM', 'id': 30, 'btnid': 1030, 'intro': 'A free, open-source, extensible and cross system for creating rewards, loots and drops to be used in games built on the Unity engine.', 'intro_full': 'A free, open-source, extensible and cross system for creating rewards, loots and drops to be used in games built on the Unity engine.', 'mentor': 'Amrit Choudhary', 'mentor_email': 'albela.amrit@gmail.com', 'tag': ['Gaming'], 'link': 'https://github.com/amrit-choudhary/UnityChestDropSystem', 'comm': 'https://groups.google.com/d/forum/game-rewards-system-channel', 'img': 'https://github.com/amrit-choudhary.png?size=50'},
{'title': 'GENERATIVE ADVERSARIAL NETWORKS(GANS)', 'id': 31, 'btnid': 1031, 'intro': 'Implement GANs in Pytorch and Basic Numpy from the starter code', 'intro_full': 'Implement GANs in Pytorch and Basic Numpy from the starter code', 'mentor': 'Sangeet Kumar Mishra', 'mentor_email': 'mail2sangeetmishra@gmail.com', 'tag': ['Python', 'PyTorch', 'Machine Learning', 'Deep Learning', 'Segmentation', 'Style Transfer'], 'link': 'https://github.com/sangeet259/Generative_Adversarial_Networks', 'comm': 'https://kwoc-17.slack.com/', 'img': 'https://github.com/sangeet259.png?size=50'},
{'title': 'GIT', 'id': 32, 'btnid': 1032, 'intro': 'Git - fast, scalable, distributed revision control system', 'intro_full': 'Git - fast, scalable, distributed revision control system', 'mentor': 'Pranit Bauva', 'mentor_email': 'pranit.bauva@gmail.com', 'tag': ['C', 'Shell'], 'link': 'https://github.com/git/git/', 'comm': 'Mailing lists (git@vger.kernel.org)', 'img': 'https://github.com/git.png?size=50'},
{'title': 'GITPUB', 'id': 33, 'btnid': 1033, 'intro': "A module to interact with github's public API. Good place to start open-source contribution.", 'intro_full': "A module to interact with github's public API. Good place to start open-source contribution.", 'mentor': 'Gaurav Sahu', 'mentor_email': 'sahu.gaurav719@gmail.com', 'tag': ['Python Library', 'GithubAPI'], 'link': 'https://github.com/demfier/gitpub', 'comm': 'https://groups.google.com/forum/#!forum/gitpub', 'img': 'https://github.com/demfier.png?size=50'},
{'title': 'GMAIL-ATTACHMENTS', 'id': 34, 'btnid': 1034, 'intro': "This program is a Python script that downloads all attachments found in the inbox of the user's Gmail account, based on a specific sender's address.", 'intro_full': "This program is a Python script that downloads all attachments found in the inbox of the user's Gmail account, based on a specific sender's address.", 'mentor': 'Ashish Kumar Gaurav', 'mentor_email': 'ashishkg0022@gmail.com', 'tag': [' IMAP  ', 'Gmail', 'Python Script'], 'link': 'https://github.com/ashishkg0022/gmail-attachments', 'comm': 'https://groups.google.com/d/forum/gmail-attachments', 'img': 'https://github.com/ashishkg0022.png?size=50'},
{'title': 'GNEWSCLIENT', 'id': 35, 'btnid': 1035, 'intro': 'An easy-to-use python client for Google News feeds.', 'intro_full': 'An easy-to-use python client for Google News feeds.', 'mentor': 'Nikhil Kumar Singh', 'mentor_email': 'nikhilksingh97@gmail.com', 'tag': ['python', 'scraping', 'news-client', 'python-package'], 'link': 'https://github.com/nikhilkumarsingh/gnewsclient', 'comm': 'https://groups.google.com/forum/#!forum/kwoc-gnewsclient', 'img': 'https://github.com/nikhilkumarsingh.png?size=50'},
{'title': 'GRAPHCLUSTERS', 'id': 36, 'btnid': 1036, 'intro': 'A community clusters detection app that can take an edgelist as an input and generate an interactive force directed graph and different information like the ...', 'intro_full': 'A community clusters detection app that can take an edgelist as an input and generate an interactive force directed graph and different information like the degree centrality, betweenness centrality and clustering co-efficients are displayed.', 'mentor': 'Dibya Prakash Das', 'mentor_email': 'dibyadas998@gmail.com', 'tag': ['d3.js', 'graph', 'networkx', 'python', 'javascript'], 'link': 'https://github.com/dibyadas/d3-force-directed-graph/', 'comm': 'https://gitter.im/GraphClusters/Lobby', 'img': 'https://github.com/dibyadas.png?size=50'},
{'title': 'GUI-PATHPLANNERS', 'id': 37, 'btnid': 1037, 'intro': 'It helps anyone see paths drawn from different path planners and also tune the parameters', 'intro_full': 'It helps anyone see paths drawn from different path planners and also tune the parameters', 'mentor': 'Ashish Kumar Gaurav', 'mentor_email': 'ashishkg0022@gmail.com', 'tag': ['PyQt4 ', 'RRTs', 'ROS'], 'link': 'https://github.com/KgpKubs/Gui-PathPlanners', 'comm': 'https://gitter.im/KgpKubs/Lobby', 'img': 'https://github.com/KgpKubs.png?size=50'},
{'title': 'GYFT (GET YOUR FREAKING TIMETABLE)', 'id': 38, 'btnid': 1038, 'intro': 'Gets your timetable from ERP and adds it to your Google Calendar or gives you an ICS file which you can add in any common calendar application.', 'intro_full': 'Gets your timetable from ERP and adds it to your Google Calendar or gives you an ICS file which you can add in any common calendar application.', 'mentor': 'Nishant Nikhil', 'mentor_email': 'i.nishantnikhil@gmail.com', 'tag': ['Python', 'Scraping', 'Google API', 'ERP'], 'link': 'https://github.com/metakgp/gyft', 'comm': 'https://slack.metakgp.org/', 'img': 'https://github.com/metakgp.png?size=50'},
{'title': 'HACKATHON', 'id': 39, 'btnid': 1039, 'intro': 'It was Idea to connect professor to  students via showing their availability in their office.  We have to make a firebase database which will be update the v...', 'intro_full': 'It was Idea to connect professor to  students via showing their availability in their office.  We have to make a firebase database which will be update the values in the list items (Names) shown in the app.', 'mentor': 'Nishant Singh Sikarwar', 'mentor_email': 'nishant.sikarwar007@gmail.com', 'tag': ['Android', 'Databases'], 'link': 'https://github.com/pv-912/Hackathon', 'comm': 'https://groups.google.com/forum/#!forum/kwoc_hackathon_project/join', 'img': 'https://github.com/pv-912.png?size=50'},
{'title': 'HANGMAN REACT GAME', 'id': 40, 'btnid': 1040, 'intro': 'A traditional hangman game build using React.', 'intro_full': 'A traditional hangman game build using React.', 'mentor': 'Dhiraj Kumar', 'mentor_email': 'dhiraj@iitkgp.ac.in', 'tag': [' Web Development', ' JavaScript', 'CSS', 'ReactJS'], 'link': 'https://github.com/djbarnwal/hangman', 'comm': 'https://www.facebook.com/groups/166681887253832', 'img': 'https://github.com/djbarnwal.png?size=50'},
{'title': 'HOXNOX - PORTFOLIOS MADE EASY', 'id': 41, 'btnid': 1041, 'intro': 'A 3 step portfolio generator.Enter details and get your portfolio generated in the form of a static website.', 'intro_full': 'A 3 step portfolio generator.Enter details and get your portfolio generated in the form of a static website.', 'mentor': 'Anupam Dagar', 'mentor_email': 'iit2016128@iiita.ac.in', 'tag': ['Python', 'Django', 'HTML', 'CSS', 'Javascript', 'jquery'], 'link': 'https://github.com/Anupam-dagar/Portfolio-Generator', 'comm': 'https://hoxnox.zulipchat.com', 'img': 'https://github.com/Anupam-dagar.png?size=50'},
{'title': 'KGP API', 'id': 42, 'btnid': 1042, 'intro': 'The goal of this project is to create an API for KGP. Like with any API, the KGP API should be able to handle all sorts of data about say, departments, profe...', 'intro_full': 'The goal of this project is to create an API for KGP. Like with any API, the KGP API should be able to handle all sorts of data about say, departments, professors or places.', 'mentor': 'Naresh', 'mentor_email': 'ghostwriternr@gmail.com', 'tag': ['Backend', 'API', 'Python', 'Databases'], 'link': 'https://github.com/ghostwriternr/api', 'comm': 'https://slack.metakgp.org/', 'img': 'https://github.com/ghostwriternr.png?size=50'},
{'title': 'LEXICO', 'id': 43, 'btnid': 1043, 'intro': 'Command Line Tool for looking up words', 'intro_full': 'Command Line Tool for looking up words', 'mentor': 'Kshitij Saraogi', 'mentor_email': 'kshitijsaraogi@gmail.com', 'tag': ['Python', 'CLI', 'DBMS', 'SQL', 'OOP'], 'link': 'https://github.com/kshitij10496/lexico', 'comm': 'mailto: kshitijsaraogi@gmail.com', 'img': 'https://github.com/kshitij10496.png?size=50'},
{'title': 'LTERM', 'id': 44, 'btnid': 1044, 'intro': 'lterm is an online Terminal Eminulator. It is a step by step tutorial that will teach you the bash commands by making you execute them.', 'intro_full': 'lterm is an online Terminal Eminulator. It is a step by step tutorial that will teach you the bash commands by making you execute them.', 'mentor': 'Shubham Rath', 'mentor_email': 'shubhamrath.iiitb@gmail.com', 'tag': ['javascript', 'html', 'css', 'jquery'], 'link': 'https://github.com/sr6033/lterm', 'comm': 'https://gitter.im/lterm/Lobby?utm_source=share-link&utm_medium=link&utm_campaign=share-link', 'img': 'https://github.com/sr6033.png?size=50'},
{'title': 'MESSENGER BOT', 'id': 45, 'btnid': 1045, 'intro': "This is a simple python template that uses Flask to build a webhook for Facebook's Messenger Bot API. The aim is to build interactive chatbot with some added...", 'intro_full': "This is a simple python template that uses Flask to build a webhook for Facebook's Messenger Bot API. The aim is to build interactive chatbot with some added features of virtual assistant.", 'mentor': 'Rahul Vernwal', 'mentor_email': 'vernwalrahul@gmail.com', 'tag': ['Python', 'NLP', 'APIs', 'Virtual Assistant'], 'link': 'https://github.com/vernwalrahul/my-messenger-bot', 'comm': 'https://gitter.im/my-messenger-bot/Lobby', 'img': 'https://github.com/vernwalrahul.png?size=50'},
{'title': 'METAKGP WIKI: DOCKERIZED FOR FUN', 'id': 46, 'btnid': 1046, 'intro': 'Self-sufficient docker configuration for running the Metakgp Mediawiki instance', 'intro_full': 'Self-sufficient docker configuration for running the Metakgp Mediawiki instance', 'mentor': 'Siddharth Kannan', 'mentor_email': 'kannan.siddharth12@gmail.com', 'tag': ['Docker', 'PHP', 'SysAdmin', 'Linux'], 'link': 'https://github.com/metakgp/metakgp-wiki', 'comm': 'https://slack.metakgp.org/', 'img': 'https://github.com/metakgp.png?size=50'},
{'title': 'MFQP', 'id': 47, 'btnid': 1047, 'intro': 'IITKGP Question paper search', 'intro_full': 'IITKGP Question paper search', 'mentor': 'Athitya Kumar', 'mentor_email': 'athityakumar@gmail.com', 'tag': ['JS', 'Python', 'Ruby', 'JSON', 'Javascript'], 'link': 'https://github.com/metakgp/mfqp', 'comm': 'http://metakgp-slack.herokuapp.com/', 'img': 'https://github.com/metakgp.png?size=50'},
{'title': 'ML-STARTER-PACK', 'id': 48, 'btnid': 1048, 'intro': 'A collection of Machine Learning algorithms written from sctrach. ', 'intro_full': 'A collection of Machine Learning algorithms written from sctrach. ', 'mentor': 'Arindam Biswas', 'mentor_email': 'aribis369@gmail.com', 'tag': ['Python', 'Machine Learning'], 'link': 'https://github.com/aribis369/ML-Starter-Pack', 'comm': 'https://groups.google.com/forum/#!forum/ml-starter-pack', 'img': 'https://github.com/aribis369.png?size=50'},
{'title': 'MOBOFF', 'id': 49, 'btnid': 1049, 'intro': 'A command line tool to add your music and videos directly to several devices.', 'intro_full': 'A command line tool to add your music and videos directly to several devices.', 'mentor': 'Parth Verma', 'mentor_email': 'vermaparth97@gmail.com', 'tag': ['Python', 'Command-Line', 'Youtube-dl', 'Click'], 'link': 'https://github.com/Parth-Vader/MobOff', 'comm': 'https://join.slack.com/t/kwoc2017-parth/shared_invite/enQtMjc1OTU3MDUwNzc0LTNkNzQzN2U5NzI0ZTNkM2I5MGM5MDIyYTYxMzFhNWYzNWYwMDIzMjNmYjM2MTA1NDc1NWU2Yjc0ZTYxNGZmNTA', 'img': 'https://github.com/Parth-Vader.png?size=50'},
{'title': 'MORSE-TALK', 'id': 50, 'btnid': 1050, 'intro': ' A Python library written for Morse Code', 'intro_full': ' A Python library written for Morse Code', 'mentor': 'Arindam Biswas', 'mentor_email': 'aribis369@gmail.com', 'tag': ['Python', 'CLI', 'GUI', 'Tkinter', 'Matplotlib', 'Wave'], 'link': 'https://github.com/morse-talk/morse-talk', 'comm': 'https://gitter.im/OrkoHunter-kwoc/morse-talk', 'img': 'https://github.com/morse-talk.png?size=50'},
{'title': 'MOTIVATE', 'id': 51, 'btnid': 1051, 'intro': 'A simple program to inspire you with motivational quotes. Highly influenced by linux command fortune.', 'intro_full': 'A simple program to inspire you with motivational quotes. Highly influenced by linux command fortune.', 'mentor': 'Mubaris NK', 'mentor_email': 'mubarishassannk@gmail.com', 'tag': ['Python', 'JSON', 'CLI', 'Terminal', 'Easy'], 'link': 'https://github.com/mubaris/motivate', 'comm': 'https://gitter.im/pymotivate/Lobby', 'img': 'https://github.com/mubaris.png?size=50'},
{'title': 'NAARAD', 'id': 52, 'btnid': 1052, 'intro': 'Aggregating news since antiquity', 'intro_full': 'Aggregating news since antiquity', 'mentor': 'Sayan Sinha', 'mentor_email': 'sayan.sinha@iitkgp.ac.in', 'tag': ['Python', 'scrapping', 'GraphQL', 'API', 'Django'], 'link': 'https://github.com/metakgp/naarad-source', 'comm': 'https://slack.metakgp.org/', 'img': 'https://github.com/metakgp.png?size=50'},
{'title': 'NETWORKX', 'id': 53, 'btnid': 1053, 'intro': 'NetworkX is a Python package for the Graph Theory and Complex Networks.', 'intro_full': 'NetworkX is a Python package for the Graph Theory and Complex Networks.', 'mentor': 'Himanshu Mishra', 'mentor_email': 'himanshu.mishra.kgp@gmail.com', 'tag': ['Python', 'Graph Theory', 'Algorithms', 'Library', 'Package'], 'link': 'https://github.com/networkx/networkx', 'comm': 'https://groups.google.com/forum/#!forum/networkx-discuss', 'img': 'https://github.com/networkx.png?size=50'},
{'title': 'NETWORKX.RB', 'id': 54, 'btnid': 1054, 'intro': "A Ruby implementation of Python's well known Graph library : networkx", 'intro_full': "A Ruby implementation of Python's well known Graph library : networkx", 'mentor': 'Athitya Kumar', 'mentor_email': 'athityakumar@gmail.com', 'tag': ['Ruby', 'Gem', 'Networkx', 'Graph Theory'], 'link': 'https://github.com/athityakumar/networkx.rb', 'comm': 'athityakumar@gmail.com', 'img': 'https://github.com/athityakumar.png?size=50'},
{'title': 'NOTES APP', 'id': 55, 'btnid': 1055, 'intro': 'An app on PHP to add, delete and edit notes ', 'intro_full': 'An app on PHP to add, delete and edit notes ', 'mentor': 'Ankita Sahoo', 'mentor_email': '2ankitasahoo13@gmail.com', 'tag': ['css', 'javascript', 'PHP', 'ajax'], 'link': 'https://github.com/ankita132/notes_app', 'comm': 'https://groups.google.com/forum/#!forum/notes_app', 'img': 'https://github.com/ankita132.png?size=50'},
{'title': 'NOTIFYRE', 'id': 56, 'btnid': 1056, 'intro': 'A terminal task-notifier that works across different command line emulators', 'intro_full': 'A terminal task-notifier that works across different command line emulators', 'mentor': 'Kaustubh Hiware', 'mentor_email': 'hiwarekaustubh@gmail.com', 'tag': ['Bash', 'Terminal', 'Linux'], 'link': 'https://github.com/kaustubhhiware/NotiFyre', 'comm': 'https://www.facebook.com/groups/552015885141292/', 'img': 'https://github.com/kaustubhhiware.png?size=50'},
{'title': 'OPENCHAT', 'id': 57, 'btnid': 1057, 'intro': 'OpenChat is an Open Source messaging platform where people can send messages to anyone registered to this platform', 'intro_full': 'OpenChat is an Open Source messaging platform where people can send messages to anyone registered to this platform', 'mentor': 'Ankit Jain', 'mentor_email': 'ankitjain28may77@gmail.com', 'tag': ['php', 'composer', 'JavaScript', 'ajax', 'websockets', 'html', 'css', 'jquery', 'gulp'], 'link': 'http://github.com/ankitjain28may/openchat', 'comm': 'https://gitter.im/ankitjain28may/openchat', 'img': 'https://github.com/ankitjain28may.png?size=50'},
{'title': 'OXNARY', 'id': 58, 'btnid': 1058, 'intro': 'A Chrome browser extension for improving second-language vocabulary learning by making API calls to Oxford Dictionary API’s.', 'intro_full': 'A Chrome browser extension for improving second-language vocabulary learning by making API calls to Oxford Dictionary API’s.', 'mentor': 'Himanshu Kumar', 'mentor_email': 'himanshukumar660@gmail.com', 'tag': ['Javascript', 'HTML', 'CSS', 'API', 'Chrome Extension'], 'link': 'https://github.com/himanshukumar660/Oxnary', 'comm': 'https://gitter.im/Oxnary/Lobby', 'img': 'https://github.com/himanshukumar660.png?size=50'},
{'title': 'PACMAN-LVL1', 'id': 59, 'btnid': 1059, 'intro': 'A very basic android implementation of the Pacman Game.', 'intro_full': 'A very basic android implementation of the Pacman Game.', 'mentor': 'Harish Nandan', 'mentor_email': 'harishshivam@gmail.com', 'tag': ['Java', 'Android'], 'link': 'https://github.com/harishnandan/Pacman-lvl1', 'comm': 'https://www.facebook.com/groups/127895284549751', 'img': 'https://github.com/harishnandan.png?size=50'},
{'title': 'PASSWORD-STORAGE', 'id': 60, 'btnid': 1060, 'intro': 'Android application for storing all your passwords.', 'intro_full': 'Android application for storing all your passwords.', 'mentor': 'Pritom Mazumdar', 'mentor_email': 'pritommazumdar1995@gmail.com', 'tag': ['Android', 'Java'], 'link': 'https://github.com/Pritom14/Password-Storage', 'comm': 'https://gitter.im/Password-Storage/Lobby', 'img': 'https://github.com/Pritom14.png?size=50'},
{'title': 'PEP8SPEAKS', 'id': 61, 'btnid': 1061, 'intro': 'A GitHub integration to automatically review Python code style over Pull Requests', 'intro_full': 'A GitHub integration to automatically review Python code style over Pull Requests', 'mentor': 'Himanshu Mishra', 'mentor_email': 'himanshu.mishra.kgp@gmail.com', 'tag': ['Python', 'Backend'], 'link': 'https://github.com/OrkoHunter/pep8speaks', 'comm': 'https://gitter.im/OrkoHunter-kwoc/pep8speaks', 'img': 'https://github.com/OrkoHunter.png?size=50'},
{'title': 'PIZILLA', 'id': 62, 'btnid': 1062, 'intro': 'A file sharing web application over local network.', 'intro_full': 'A file sharing web application over local network.', 'mentor': 'Naveen Kumar Sangi', 'mentor_email': 'naveenkumarsangi@protonmail.com', 'tag': ['javascript', 'reactJS', 'file-uploads'], 'link': 'https://github.com/nitdgpos/pizilla', 'comm': 'https://gitter.im/nit-dgp/general', 'img': 'https://github.com/nitdgpos.png?size=50'},
{'title': 'PLAY NEXT', 'id': 63, 'btnid': 1063, 'intro': 'Create a dynamic queue in YouTube.', 'intro_full': 'Create a dynamic queue in YouTube.', 'mentor': 'Nishant Nikhil', 'mentor_email': 'i.nishantnikhil@gmail.com', 'tag': ['JavaScript', 'YouTube', 'Chrome Extension'], 'link': 'https://github.com/nishnik/Play_Next', 'comm': 'https://gitter.im/Play_Next/', 'img': 'https://github.com/nishnik.png?size=50'},
{'title': 'PLAYING WITH ALGORITHMS', 'id': 64, 'btnid': 1064, 'intro': 'A Repository to store implementation of some of the famous Data Structures and Algorithms (mainly in C/C++/Java/Python) for everyone to learn and contribute.', 'intro_full': 'A Repository to store implementation of some of the famous Data Structures and Algorithms (mainly in C/C++/Java/Python) for everyone to learn and contribute.', 'mentor': 'Prateek Chanda', 'mentor_email': 'prateekkol21@gmail.com', 'tag': ['Python', 'Algorithms', 'Data Structures', 'C++', 'Java'], 'link': 'https://github.com/codeIIEST/Algorithms', 'comm': 'https://gitter.im/codeIIEST/Algorithms', 'img': 'https://github.com/codeIIEST.png?size=50'},
{'title': 'PLOTIT', 'id': 65, 'btnid': 1065, 'intro': 'A terminal and GUI based tool for quick visualisation of mathematical functions.', 'intro_full': 'A terminal and GUI based tool for quick visualisation of mathematical functions.', 'mentor': 'Deepjyoti Mondal', 'mentor_email': 'djmdeveloper060796@gmail.com', 'tag': ['Python', 'Plotting', 'Terminal', 'GUI'], 'link': 'https://github.com/NITDgpOS/PlotIt', 'comm': 'https://gitter.im/PlotIt/Lobby', 'img': 'https://github.com/NITDgpOS.png?size=50'},
{'title': 'PONG-USING-RL', 'id': 66, 'btnid': 1066, 'intro': 'The idea is to make the AI win at Pong using RL and to generalize the architecture proposed, for other simple games.', 'intro_full': 'The idea is to make the AI win at Pong using RL and to generalize the architecture proposed, for other simple games.', 'mentor': 'Rahul Vernwal', 'mentor_email': 'vernwalrahul@gmail.com', 'tag': ['Python', 'Machine Learning', 'RL', 'PyGame'], 'link': 'https://github.com/vernwalrahul/Pong-using-RL', 'comm': 'https://gitter.im/Pong-Using-RL/Lobby', 'img': 'https://github.com/vernwalrahul.png?size=50'},
{'title': 'PROXYMAN', 'id': 67, 'btnid': 1067, 'intro': 'Tool to configure system-wide proxy settings in Linux.', 'intro_full': 'Tool to configure system-wide proxy settings in Linux.', 'mentor': 'Himanshu Shekhar', 'mentor_email': 'himanshushekharb16@gmail.com', 'tag': ['bash', 'shell', 'linux', 'proxy', 'script'], 'link': 'https://github.com/himanshub16/ProxyMan', 'comm': 'https://github.com/himanshub16/ProxyMan/issues', 'img': 'https://github.com/himanshub16.png?size=50'},
{'title': 'QUANTEDA: QUANTITATIVE ANALYSIS OF TEXTUAL DATA (R PACKAGE)', 'id': 68, 'btnid': 1068, 'intro': 'A fast, flexible, and comprehensive framework for  quantitative text analysis in R.  Provides functionality for corpus management, creating and manipulating ...', 'intro_full': 'A fast, flexible, and comprehensive framework for  quantitative text analysis in R.  Provides functionality for corpus management, creating and manipulating tokens and ngrams, exploring keywords in context,  forming and manipulating sparse matrices of documents by features and feature co-occurrences, analyzing keywords, computing feature similarities and distances, applying content dictionaries, applying supervised and unsupervised machine learning,  visually representing text and text analyses, and more. Written in R and C++, with a website in Hugo.', 'mentor': 'Kenneth Benoit', 'mentor_email': 'kbenoit@lse.ac.uk', 'tag': ['R', 'C++', 'Web development', 'NLP', 'Text analysis', 'Databases'], 'link': 'https://github.com/kbenoit/quanteda', 'comm': 'https://join.slack.com/t/quanteda/signup', 'img': 'https://github.com/kbenoit.png?size=50'},
{'title': 'REACT GOOGLE MAP', 'id': 69, 'btnid': 1069, 'intro': 'An app on react where you can upload and view images at various locations on the earth', 'intro_full': 'An app on react where you can upload and view images at various locations on the earth', 'mentor': 'Ankita Sahoo', 'mentor_email': '2ankitasahoo13@gmail.com', 'tag': ['reactjs', 'firebase', 'css'], 'link': 'https://github.com/ankita132/react_google_map', 'comm': 'https://groups.google.com/forum/#!forum/kwoc17-react_google_map', 'img': 'https://github.com/ankita132.png?size=50'},
{'title': 'READ-IT', 'id': 70, 'btnid': 1070, 'intro': 'A chrome extension for mail tracking', 'intro_full': 'A chrome extension for mail tracking', 'mentor': 'Dibya Prakash Das', 'mentor_email': 'dibyadas998@gmail.com', 'tag': ['Python', 'Chrome Extension', 'flask', 'gmail'], 'link': 'https://github.com/dibyadas/read-it', 'comm': 'https://gitter.im/read-it/', 'img': 'https://github.com/dibyadas.png?size=50'},
{'title': 'REFLEXIO', 'id': 71, 'btnid': 1071, 'intro': 'A web game based on reflection.', 'intro_full': 'A web game based on reflection.', 'mentor': 'Harish Nandan', 'mentor_email': 'harishshivam@gmail.com', 'tag': ['CSS', 'Javascript', 'HTML'], 'link': 'https://github.com/harishnandan/reflexio', 'comm': 'https://www.facebook.com/groups/136133120486393/', 'img': 'https://github.com/harishnandan.png?size=50'},
{'title': 'RELATIVE DATE: REVERSE', 'id': 72, 'btnid': 1072, 'intro': 'Convert relative dates back to a date representation: 3 days ago => A date object for today - 3 days', 'intro_full': 'Convert relative dates back to a date representation: 3 days ago => A date object for today - 3 days', 'mentor': 'Siddharth Kannan', 'mentor_email': 'kannan.siddharth12@gmail.com', 'tag': ['javascript', 'datetime', 'utility', 'tools', 'nodejs', 'NPM', 'module'], 'link': 'https://github.com/icyflame/relative-date-reverse/issues', 'comm': 'https://groups.google.com/forum/#!forum/kwoc-2017-discussion-icyflame', 'img': 'https://github.com/icyflame.png?size=50'},
{'title': 'RRT', 'id': 73, 'btnid': 1073, 'intro': 'Collection of variants of RRT Path Planners', 'intro_full': 'Collection of variants of RRT Path Planners', 'mentor': 'Sayan Sinha', 'mentor_email': 'sayan.sinha@iitkgp.ac.in', 'tag': ['C++', 'AI', 'Path planning'], 'link': 'https://github.com/KgpKubs/RRT', 'comm': 'https://gitter.im/KgpKubs/Lobby', 'img': 'https://github.com/KgpKubs.png?size=50'},
{'title': 'RTUNES', 'id': 74, 'btnid': 1074, 'intro': 'Web application developed on Angular2 that uses API provided by last.fm. Find artists and display albums and tracks listings.', 'intro_full': 'Web application developed on Angular2 that uses API provided by last.fm. Find artists and display albums and tracks listings.', 'mentor': 'Raghav Jajodia', 'mentor_email': 'jajodia.raghav@gmail.com', 'tag': ['Angular2', 'JavaScript', 'Web Application', 'SPA', 'TypeScript'], 'link': 'https://github.com/jajodiaraghav/rTunes', 'comm': 'https://gitter.im/rTunes-angular2/Lobby', 'img': 'https://github.com/jajodiaraghav.png?size=50'},
{'title': 'SAFEANDROID', 'id': 75, 'btnid': 1075, 'intro': "In Android there are many privacy issues, every time some application fetch your details that you don't want to let ope to anyone. To ensure that your data i...", 'intro_full': "In Android there are many privacy issues, every time some application fetch your details that you don't want to let ope to anyone. To ensure that your data is private I have the project in which we have to fake all possible bugs of privacy in Android and fix them into a small android app. Every time when ever some data travel from one end of user to some where else, we will notify about the privacy.", 'mentor': 'Nirmal Sarswat', 'mentor_email': 'nirmalsarswat400@gmail.com', 'tag': ['Android ', 'Security', 'Network'], 'link': 'https://github.com/vivonk/SaveMore', 'comm': 'https://join.slack.com/t/kwoc/shared_invite/enQtMjc2Njk1MTA5ODk0LTk4MTc4ODY5MjEzYWExNTcyYWM2NTRiMjQ1YzRhMzE3YWZlOTkzNDdkZTMzOWYxMDYxMDM3NzQ5MjdlNjFiYTY', 'img': 'https://github.com/vivonk.png?size=50'},
{'title': 'SANGITA', 'id': 76, 'btnid': 1076, 'intro': 'A Natural Language Processing Toolkit for Indian Lamguages that utilize LSTMs for POS tagging.', 'intro_full': 'A Natural Language Processing Toolkit for Indian Lamguages that utilize LSTMs for POS tagging.', 'mentor': 'Samriddhi Sinha', 'mentor_email': 'samriddhidjokestersinha@gmail.com', 'tag': ['Python', 'NLP', 'Machine Learning', 'Scraping'], 'link': 'https://github.com/djokester/sangita', 'comm': 'https://groups.google.com/d/forum/sangitanlp', 'img': 'https://github.com/djokester.png?size=50'},
{'title': 'SCIRUBY-EXAMPLES', 'id': 77, 'btnid': 1077, 'intro': 'SciRuby-examples is a guide for a newbie to dive into machine learning and natural language processing using an unconventional language: Ruby', 'intro_full': 'SciRuby-examples is a guide for a newbie to dive into machine learning and natural language processing using an unconventional language: Ruby', 'mentor': 'Dhruv Apte', 'mentor_email': 'dhruvgirishapte@gmail.com', 'tag': ['Ruby', 'Natural Language Processing', 'Deep Learning', 'Machine Learning', ' IRuby notebook'], 'link': 'https://github.com/the-ethan-hunt/sciruby-examples', 'comm': 'https://groups.google.com/forum/#!forum/sciruby-examples-discus', 'img': 'https://github.com/the-ethan-hunt.png?size=50'},
{'title': 'SCRAPY BENCH SPEEDCENTER', 'id': 78, 'btnid': 1078, 'intro': 'A Django web app for collecting various results for scrapy-bench and uploading it to web.', 'intro_full': 'A Django web app for collecting various results for scrapy-bench and uploading it to web.', 'mentor': 'Parth Verma', 'mentor_email': 'vermaparth97@gmail.com', 'tag': ['Python', 'Scrapy', 'Scraping', 'Benchmarking', 'Django'], 'link': 'https://github.com/scrapy/scrapy-bench-speedcenter', 'comm': 'https://join.slack.com/t/kwoc2017-parth/shared_invite/enQtMjc1OTU3MDUwNzc0LTNkNzQzN2U5NzI0ZTNkM2I5MGM5MDIyYTYxMzFhNWYzNWYwMDIzMjNmYjM2MTA1NDc1NWU2Yjc0ZTYxNGZmNTA', 'img': 'https://github.com/scrapy.png?size=50'},
{'title': 'SCRAPY-BENCH', 'id': 79, 'btnid': 1079, 'intro': 'A command-line interface for bench-marking Scrapy, that reflects real-world usage.', 'intro_full': 'A command-line interface for bench-marking Scrapy, that reflects real-world usage.', 'mentor': 'Parth Verma', 'mentor_email': 'vermaparth97@gmail.com', 'tag': ['Python', 'Click', 'Scrapy', 'Scraping', 'Benchmarking', 'Memory-Profiling', 'Command-Line'], 'link': 'https://github.com/scrapy/scrapy-bench', 'comm': 'https://join.slack.com/t/kwoc2017-parth/shared_invite/enQtMjc1OTU3MDUwNzc0LTNkNzQzN2U5NzI0ZTNkM2I5MGM5MDIyYTYxMzFhNWYzNWYwMDIzMjNmYjM2MTA1NDc1NWU2Yjc0ZTYxNGZmNTA', 'img': 'https://github.com/scrapy.png?size=50'},
{'title': 'SECURESNAPS', 'id': 80, 'btnid': 1080, 'intro': 'Image Codec using Private-key cryptography ', 'intro_full': 'Image Codec using Private-key cryptography ', 'mentor': 'Aniq Ur Rahman', 'mentor_email': 'aniqrah@gmail.com', 'tag': ['Python', 'Image', 'codec', 'encryption', 'cryptography'], 'link': 'https://github.com/NITDgpOS/SecureSnaps', 'comm': 'https://gitter.im/SecureSnaps55/Lobby', 'img': 'https://github.com/NITDgpOS.png?size=50'},
{'title': 'SENSENET', 'id': 81, 'btnid': 1081, 'intro': 'TouchNet: a large scale dataset of 3D objects and a simulator for manipulating these objects for the purpose of researching and training AIs to learn and rea...', 'intro_full': 'TouchNet: a large scale dataset of 3D objects and a simulator for manipulating these objects for the purpose of researching and training AIs to learn and reason about their world via sensorimotor neural systems and touch.', 'mentor': 'Jason Toy', 'mentor_email': 'jtoy@jtoy.net', 'tag': ['Python', 'machinelearning', 'deeplearning', 'neuroscience', 'numpy', 'tensorflow', 'pytorch'], 'link': 'https://github.com/jtoy/sensenet', 'comm': 'https://join.slack.com/t/sensenetai/shared_invite/enQtMjc4MzQ5ODUzNzgzLThjYTNmMzE4MGQ1MGMyN2NiMWIxNzI1NTYwMjI5ODE4NWY5MDNmN2U5OTkwMGE4OTFiNjNjYmQ0YjgwNjBmZWU', 'img': 'https://github.com/jtoy.png?size=50'},
{'title': 'SHERLOCKED', 'id': 82, 'btnid': 1082, 'intro': 'Investigating properties of neural networks', 'intro_full': 'Investigating properties of neural networks', 'mentor': 'Nishant Nikhil', 'mentor_email': 'i.nishantnikhil@gmail.com', 'tag': ['Python', 'Neural Networks', 'Deep Learning'], 'link': 'https://github.com/nishnik/sherlocked', 'comm': 'https://gitter.im/nn_sherlocked', 'img': 'https://github.com/nishnik.png?size=50'},
{'title': 'SIGNAL PREDICTION WITH A SEQ2SEQ RNN', 'id': 83, 'btnid': 1083, 'intro': 'Signal prediction with a Sequence-to-Sequence (seq2seq) Recurrent Neural Network (RNN) model in TensorFlow', 'intro_full': 'Signal prediction with a Sequence-to-Sequence (seq2seq) Recurrent Neural Network (RNN) model in TensorFlow', 'mentor': 'Guillaume Chevalier', 'mentor_email': 'guillaume-chevalier@outlook.com', 'tag': ['Python', 'Deep Learning', ' Machine Learning', ' Signal Prediction', 'RNN', 'seq2seq'], 'link': 'https://github.com/guillaume-chevalier/seq2seq-signal-prediction', 'comm': 'https://seq2seq-git.slack.com', 'img': 'https://github.com/guillaume-chevalier.png?size=50'},
{'title': 'SMVDU-ALGOS', 'id': 84, 'btnid': 1084, 'intro': 'Practise Algorithm and Data Structure and learn how Open Source Contribution works.', 'intro_full': 'Practise Algorithm and Data Structure and learn how Open Source Contribution works.', 'mentor': 'Sushil khanchi | Shubham Goyal', 'mentor_email': 'sushilkhanchi97@gmail.com | 22shubh22@gmail.com', 'tag': ['Python', 'C', 'Java', 'CPP', 'Algorithms', 'DataStructure'], 'link': 'https://github.com/khanchi97/Smvdu-Algos', 'comm': 'https://gitter.im/Smvdu-Algos/Lobby', 'img': 'https://github.com/khanchi97.png?size=50'},
{'title': 'SNAKE', 'id': 85, 'btnid': 1085, 'intro': 'Popular Snake game build using Pygame for desktop', 'intro_full': 'Popular Snake game build using Pygame for desktop', 'mentor': 'Raghav Jajodia', 'mentor_email': 'jajodia.raghav@gmail.com', 'tag': ['Python', 'Pygame', 'Snake'], 'link': 'https://github.com/jajodiaraghav/Snake', 'comm': 'https://gitter.im/Snake-pygame/Lobby', 'img': 'https://github.com/jajodiaraghav.png?size=50'},
{'title': 'SNAKES', 'id': 86, 'btnid': 1086, 'intro': 'A simple game of snakes implemented in C++ and OpenCV', 'intro_full': 'A simple game of snakes implemented in C++ and OpenCV', 'mentor': 'Sayan Sinha', 'mentor_email': 'sayan.sinha@iitkgp.ac.in', 'tag': ['C++', 'Gaming', 'OpenCV'], 'link': 'https://github.com/americast/Snakes', 'comm': 'https://gitter.im/opencv-Snakes/Lobby', 'img': 'https://github.com/americast.png?size=50'},
{'title': 'SOCIAL-MEDIA-REVIEW-PLATFORM', 'id': 87, 'btnid': 1087, 'intro': 'It is a platform to keep an eye on all the posts shared, liked and commented by the people hired by you for marketing.', 'intro_full': 'It is a platform to keep an eye on all the posts shared, liked and commented by the people hired by you for marketing.', 'mentor': 'Ankit Jain', 'mentor_email': 'ankitjain28may77@gmail.com', 'tag': ['Python', 'Scraping', 'php', 'sentiment analysis', 'machine learning', 'laravel', 'facebook api', 'twitter api', 'HTML', 'CSS', 'Jquery', 'Javascript', 'Bootstrap'], 'link': 'https://github.com/ankitjain28may/Social-Media-Review-Platform', 'comm': 'https://gitter.im/ankitjain28may/Social-Media-Review-Platform', 'img': 'https://github.com/ankitjain28may.png?size=50'},
{'title': 'STATISTICAL MODELLING TECHNIQUES', 'id': 88, 'btnid': 1088, 'intro': 'Building Fixed Model, Real Time Improvements in the Model and Making a Model for every test data encountered (Lazy Learning) by using Regression.', 'intro_full': 'Building Fixed Model, Real Time Improvements in the Model and Making a Model for every test data encountered (Lazy Learning) by using Regression.', 'mentor': 'Rahul Das', 'mentor_email': 'rahulreynoldindia@gmail.com', 'tag': ['R', 'Statistics', 'Regression'], 'link': 'https://github.com/rahul-da/Statistical_Modelling_Techniques', 'comm': 'https://groups.google.com/forum/#!forum/regression_modeling', 'img': 'https://github.com/rahul-da.png?size=50'},
{'title': 'STEREO CAMERA CALIBRATION', 'id': 89, 'btnid': 1089, 'intro': 'Often for complicated tasks in computer vision it is required that a camera be calibrated. Camera calibration is a necessary step in 3D computer vision in or...', 'intro_full': 'Often for complicated tasks in computer vision it is required that a camera be calibrated. Camera calibration is a necessary step in 3D computer vision in order to extract metric information from 2D images. Stereo calibration is used to find the geometric transformations between two cameras, and the relationship between two image projections of a particular 3D scene. More details here: http://sourishghosh.com/2016/stereo-calibration-cpp-opencv/', 'mentor': 'Sourish Ghosh', 'mentor_email': 'ragnarok0211@gmail.com', 'tag': ['Camera Calibration', 'Computer Vision', 'C++', 'OpenCV'], 'link': 'https://github.com/sourishg/stereo-calibration', 'comm': 'https://cvkgp.slack.com', 'img': 'https://github.com/sourishg.png?size=50'},
{'title': 'SUNPY', 'id': 90, 'btnid': 1090, 'intro': 'SunPy is a community-developed free and open-source software package for solar physics. It aims to be provide a comprehensive data analysis environment that ...', 'intro_full': 'SunPy is a community-developed free and open-source software package for solar physics. It aims to be provide a comprehensive data analysis environment that allows researchers within the field of solar physics to carry out their tasks with the minimal effort.  SunPy is written using the Python programming language and is build upon the scientific Python environment which includes several core packages such as NumPy, SciPy, Matplotlib and Pandas. Since SunPy deals with key astrophysical concepts, its development is closely associated with that of Astropy, which is a fundamental package within the Python astronomy ecosystem.', 'mentor': 'Nitin Choudhary', 'mentor_email': 'nitin.iitkgp23@gmail.com', 'tag': ['Python', 'astronomy', 'sun', 'gsoc', 'scientific'], 'link': 'https://github.com/sunpy/sunpy', 'comm': 'https://riot.im/app/#/room/#sunpy-kwoc:matrix.org', 'img': 'https://github.com/sunpy.png?size=50'},
{'title': 'SYMPY', 'id': 91, 'btnid': 1091, 'intro': 'A Python Library for symbolic Maths.', 'intro_full': 'A Python Library for symbolic Maths.', 'mentor': 'Shivam Vats', 'mentor_email': 'shivamvats.iitkgp@gmail.com', 'tag': ['Python', 'Maths ', 'Computation'], 'link': 'https://github.com/sympy/sympy', 'comm': 'https://gitter.im/sympy/sympy', 'img': 'https://github.com/sympy.png?size=50'},
{'title': 'TERMI-NALANDA', 'id': 92, 'btnid': 1092, 'intro': 'CLI version of a moodle based "Nalanda: E-LMS of BITS Pilani" to show updates', 'intro_full': 'CLI version of a moodle based "Nalanda: E-LMS of BITS Pilani" to show updates', 'mentor': 'Rahul Bothra', 'mentor_email': 'f2016015@pilani.bits-pilani.ac.in', 'tag': ['Python', 'Scraping', 'GUI', 'CLI'], 'link': 'https://github.com/Pro-Panda/Termi-Nalanda', 'comm': 'https://www.facebook.com/groups/301389363707310/', 'img': 'https://github.com/Pro-Panda.png?size=50'},
{'title': 'TICTACTOE', 'id': 93, 'btnid': 1093, 'intro': 'It is a small game which is dual player need to change it into single player as new feature', 'intro_full': 'It is a small game which is dual player need to change it into single player as new feature', 'mentor': 'Chandra Prakash Meher', 'mentor_email': 'b115022@iiit-bh.ac.in', 'tag': ['android', 'java', 'design UX/UI'], 'link': 'https://github.com/cmeher196/TicTacToe', 'comm': 'https://gitter.im/tictactoe-discussion/Lobby?utm_source=share-link&utm_medium=link&utm_campaign=share-link', 'img': 'https://github.com/cmeher196.png?size=50'},
{'title': 'TIC_TAC_TOE', 'id': 94, 'btnid': 1094, 'intro': 'TIC-TAC-TOE game designed in various languages to play it.', 'intro_full': 'TIC-TAC-TOE game designed in various languages to play it.', 'mentor': 'Ritesh Kumar Mohapatra', 'mentor_email': 'mohapatraritesh97@gmail.com', 'tag': ['Python', 'Scraping'], 'link': 'https://github.com/RITESHMOHAPATRA/TIC-TAC-TOE', 'comm': 'https://groups.google.com/forum/#!forum/tic-tac-toe_kwoc/join', 'img': 'https://github.com/RITESHMOHAPATRA.png?size=50'},
{'title': 'TIMETABLE', 'id': 95, 'btnid': 1095, 'intro': 'A tool to display the timetable. A Terminal timetable, if you will.', 'intro_full': 'A tool to display the timetable. A Terminal timetable, if you will.', 'mentor': 'Athitya Kumar', 'mentor_email': 'athityakumar@gmail.com', 'tag': ['Ruby', 'CLI'], 'link': 'https://github.com/athityakumar/timetable', 'comm': 'athityakumar@gmail.com', 'img': 'https://github.com/athityakumar.png?size=50'},
{'title': 'TITANIC SURVIVAL EXPLORATION', 'id': 96, 'btnid': 1096, 'intro': 'It is a project on Machine Learning which aims to predict survival of passengers on Titanic. Contributing to this will aim to create a concrete understanding...', 'intro_full': 'It is a project on Machine Learning which aims to predict survival of passengers on Titanic. Contributing to this will aim to create a concrete understanding of ML for beginners and also help them go forward in Open Source', 'mentor': 'Prateek Chanda', 'mentor_email': 'prateekkol21@gmail.com', 'tag': ['Python', 'Machine Learning', 'ipython notebook', 'statistical analysis'], 'link': 'https://github.com/prateekiiest/titanic_survival_exploration', 'comm': 'https://titanic-survival.slack.com/', 'img': 'https://github.com/prateekiiest.png?size=50'},
{'title': 'TREND-ANALYZER', 'id': 97, 'btnid': 1097, 'intro': "Analyses trends in upcoming movie's anticipation. ", 'intro_full': "Analyses trends in upcoming movie's anticipation. ", 'mentor': 'Arindam Biswas', 'mentor_email': 'aribis369@gmail.com', 'tag': ['Python', 'Scraping', 'Machine Learning', 'MongoDB'], 'link': 'https://github.com/aribis369/Trend-Analyzer', 'comm': 'https://groups.google.com/forum/#!forum/trend-analyzer', 'img': 'https://github.com/aribis369.png?size=50'},
{'title': 'TVSERIES', 'id': 98, 'btnid': 1098, 'intro': "TV Series is a tool that scrapes Episode Synopsis' of popular TV Series' from websites like Wikipedia / IMDb and show in one place with a user-friendly navig...", 'intro_full': "TV Series is a tool that scrapes Episode Synopsis' of popular TV Series' from websites like Wikipedia / IMDb and show in one place with a user-friendly navigation UI.", 'mentor': 'Athitya Kumar', 'mentor_email': 'athityakumar@gmail.com', 'tag': ['Web Scraping', 'Ruby', 'Website', 'Frontend'], 'link': 'https://github.com/athityakumar/tvseries', 'comm': 'athityakumar@gmail.com', 'img': 'https://github.com/athityakumar.png?size=50'},
{'title': 'TYPOMETER', 'id': 99, 'btnid': 1099, 'intro': 'A cross platform application built on QT for measuring typing speed.', 'intro_full': 'A cross platform application built on QT for measuring typing speed.', 'mentor': 'Himanshu Kumar', 'mentor_email': 'himanshukumar660@gmail.com', 'tag': ['C++', 'Qt', 'QMake'], 'link': 'https://github.com/himanshukumar660/Typometer', 'comm': 'gitter.im/Typometer', 'img': 'https://github.com/himanshukumar660.png?size=50'},
{'title': 'URBAN ROBOT', 'id': 100, 'btnid': 1100, 'intro': 'Reddit bot which replies to sarcastic comments', 'intro_full': 'Reddit bot which replies to sarcastic comments', 'mentor': 'Mubaris NK', 'mentor_email': 'mubarishassannk@gmail.com', 'tag': ['Python', 'Machine Learning', 'NLP', 'Natural Language Processing'], 'link': 'https://github.com/mubaris/urban-robot', 'comm': 'https://gitter.im/urban-robot/Lobby', 'img': 'https://github.com/mubaris.png?size=50'},
{'title': 'URL-SHORTENER', 'id': 101, 'btnid': 1101, 'intro': 'A basic URL-shortener made in Django framework.', 'intro_full': 'A basic URL-shortener made in Django framework.', 'mentor': 'Vivek Modi', 'mentor_email': 'nit.vivek@hotmail.com', 'tag': ['Python'], 'link': 'https://github.com/modihere/url-shortener', 'comm': 'https://gitter.im/url_shortener/Lobby', 'img': 'https://github.com/modihere.png?size=50'},
{'title': 'VOICE CALCULATOR', 'id': 102, 'btnid': 1102, 'intro': 'The goal of this project is to build a calculator which has speech reconition ability for input.', 'intro_full': 'The goal of this project is to build a calculator which has speech reconition ability for input.', 'mentor': 'Mayank Jindal', 'mentor_email': 'mayank.jindal5@gmail.com', 'tag': ['Android', 'Java'], 'link': 'https://github.com/mayank-kgp/VoiceCalculator', 'comm': 'https://gitter.im/VoiceCalculator', 'img': 'https://github.com/mayank-kgp.png?size=50'},
{'title': 'WEBDB', 'id': 103, 'btnid': 1103, 'intro': 'As of the w3 report, total 240M+ websites are available on the internet but the only such search engine knows about that. We are about create such crawler th...', 'intro_full': 'As of the w3 report, total 240M+ websites are available on the internet but the only such search engine knows about that. We are about create such crawler that makes the database of the websites and there contents for open source help. As data science is growing like wings on fire, providing this huge data to open source will be one of the great idea.', 'mentor': 'Nirmal Sarswat', 'mentor_email': 'nirmalsarswat400@gmail.com', 'tag': ['Python', 'Scraping', 'crwaling', 'DBMS'], 'link': 'https://github.com/fossasia/query-server', 'comm': 'https://join.slack.com/t/kwoc/shared_invite/enQtMjc2Njk1MTA5ODk0LTk4MTc4ODY5MjEzYWExNTcyYWM2NTRiMjQ1YzRhMzE3YWZlOTkzNDdkZTMzOWYxMDYxMDM3NzQ5MjdlNjFiYTY', 'img': 'https://github.com/fossasia.png?size=50'},
{'title': 'WEED', 'id': 104, 'btnid': 1104, 'intro': 'A video chat for LAN based on tcp. Beginner friendly project', 'intro_full': 'A video chat for LAN based on tcp. Beginner friendly project', 'mentor': 'Apoorva Kumar', 'mentor_email': 'apoorvakumar169@gmail.com', 'tag': ['C++', 'Socket', 'OpenCv'], 'link': 'https://github.com/rava-dosa/Weed', 'comm': 'https://groups.google.com/forum/#!forum/weedongit', 'img': 'https://github.com/rava-dosa.png?size=50'},
{'title': 'WHATS-IN-THE-NEWS-GEEK', 'id': 105, 'btnid': 1105, 'intro': 'A CLI tool to bring all the latest news to your terminal.', 'intro_full': 'A CLI tool to bring all the latest news to your terminal.', 'mentor': 'Arindam Biswas', 'mentor_email': 'aribis369@gmail.com', 'tag': ['Python', 'CLI', 'API'], 'link': 'https://github.com/aribis369/Whats-in-the-news-GEEK', 'comm': 'https://groups.google.com/forum/#!forum/whats-in-the-news-geek', 'img': 'https://github.com/aribis369.png?size=50'},
{'title': 'YOUTUBE DATA COLLECTOR', 'id': 106, 'btnid': 1106, 'intro': 'Searches for recent Youtube videos opened and displays them in a list form.', 'intro_full': 'Searches for recent Youtube videos opened and displays them in a list form.', 'mentor': 'Parth Verma', 'mentor_email': 'vermaparth97@gmail.com', 'tag': ['Chrome', 'Extension', 'JavaScript', 'Data-Analytics', 'Databases'], 'link': 'https://github.com/Parth-Vader/YoutubeDataCollector', 'comm': 'https://join.slack.com/t/kwoc2017-parth/shared_invite/enQtMjc1OTU3MDUwNzc0LTNkNzQzN2U5NzI0ZTNkM2I5MGM5MDIyYTYxMzFhNWYzNWYwMDIzMjNmYjM2MTA1NDc1NWU2Yjc0ZTYxNGZmNTA', 'img': 'https://github.com/Parth-Vader.png?size=50'},
{'title': 'YOUTUBE FAST PLAYLIST', 'id': 107, 'btnid': 1107, 'intro': 'If you use YouTube to listen to music constantly while working or studying, this WebApp is for you. It works like a Music Player for YouTube, where you can r...', 'intro_full': 'If you use YouTube to listen to music constantly while working or studying, this WebApp is for you. It works like a Music Player for YouTube, where you can rapidly create a playlist by searching videos and adding them. Fast re-ordering, Repeat All, Repeat One, Shuffle features make it feel like a music player.', 'mentor': 'Meet Udeshi', 'mentor_email': 'mudeshi1209@gmail.com', 'tag': ['javascript', 'web-app', ' youtube-api', 'jquery'], 'link': 'https://github.com/udiboy1209/fast_playlist', 'comm': 'https://gitter.im/fast-playlist', 'img': 'https://github.com/udiboy1209.png?size=50'},

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
