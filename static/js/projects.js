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
      {'mentor_email': 'aniqrah@gmail.com', 'id': 1, 'comm': 'https://gitter.im/AirHockey55/Lobby#', 'mentor': 'Aniq Ur Rahman', 'tag': ['Python', 'AI', 'Game', 'Pygame', 'Physics'], 'btnid': 1001, 'title': 'AirHockey', 'img': 'https://github.com/NITDgpOS.png?size=50', 'link': 'https://github.com/NITDgpOS/AirHockey', 'intro_full': 'Air Hockey game created using pygame ', 'intro': 'Air Hockey game created using pygame '},
{'mentor_email': 'techfreakworm@gmail.com', 'id': 2, 'comm': 'https://join.slack.com/t/alchemsynergy/shared_invite/enQtMjU0NjUwMzAyNTgzLTM0OTNlMTg3ZDk1MmQ4ODdkYzM2YTA3MTE2MGM4ZTQ1ODU5ZTc3YTA4ODY5MWI2ZTAzZDM5MjEzOGM3N2FhYjY', 'mentor': 'Mayank Gupta', 'tag': ['Java', 'JavaFX', 'XML', 'CSS', 'PostgreSQL'], 'btnid': 1002, 'title': 'Alchem Desktop', 'img': 'https://github.com/alchemsynergy.png?size=50', 'link': 'https://github.com/alchemsynergy/alchem', 'intro_full': 'An all-in-one inventory and accounts solution for Chemist shops (both wholesale and retail) as per new Indian taxation standards.', 'intro': 'An all-in-one inventory and accounts solution for Chemist shops (both wholesale and retail) as per new Indian taxation standards.'},
{'mentor_email': 'sayan.sinha@iitkgp.ac.in', 'id': 3, 'comm': 'https://gitter.im/ANN-julia', 'mentor': 'Sayan Sinha', 'tag': ['Julia', 'ANN', 'DL', 'ML'], 'btnid': 1003, 'title': 'ANN', 'img': 'https://github.com/americast.png?size=50', 'link': 'https://github.com/americast/ANN', 'intro_full': 'Artificial Neural Network from scratch in Julia', 'intro': 'Artificial Neural Network from scratch in Julia'},
{'mentor_email': 'ashris@mit.edu', 'id': 4, 'comm': 'https://www.facebook.com/Ashris', 'mentor': 'Ashris Choudhury', 'tag': ['javascript', 'p5js', 'design', 'image processing', 'computer vision'], 'btnid': 1004, 'title': 'Archdraw', 'img': 'https://github.com/iashris.png?size=50', 'link': 'https://github.com/iashris/archdraw', 'intro_full': 'An architecture automation tool that converts a pencil drawn sketch to a rendered plan instantly', 'intro': 'An architecture automation tool that converts a pencil drawn sketch to a rendered plan instantly'},
{'mentor_email': 'kannan.siddharth12@gmail.com', 'id': 5, 'comm': 'https://groups.google.com/forum/#!forum/kwoc-2017-discussion-icyflame', 'mentor': 'Siddharth Kannan', 'tag': ['social science', 'psychology', 'syndromes', 'behavior', 'awesome-list', 'non programming'], 'btnid': 1005, 'title': 'Awesome Social Science', 'img': 'https://github.com/icyflame.png?size=50', 'link': 'https://github.com/icyflame/awesome-social-science', 'intro_full': ' A curated list of adages, psychological syndromes and behaviour explaining aphorisms. ', 'intro': ' A curated list of adages, psychological syndromes and behaviour explaining aphorisms. '},
{'mentor_email': 'dhruvgirishapte@gmail.com', 'id': 6, 'comm': 'https://groups.google.com/forum/#!forum/benji-discussion', 'mentor': 'Dhruv Apte', 'tag': ['Python', 'digital-assistant', 'speech-to-text', 'speech-recognition'], 'btnid': 1006, 'title': 'B.E.N.J.I.', 'img': 'https://github.com/the-ethan-hunt.png?size=50', 'link': 'https://github.com/the-ethan-hunt/B.E.N.J.I.', 'intro_full': 'B.E.N.J.I., short for Brilliant and Efficient non-Javascript enabled Intelligence is a digital assistant that can help do several regular tasks on the laptop. Its numerous tasks include searching on Google, Wiki search, opening any Webpage, fetching news from several news agencies. The assistant can be activated and operated using voice commands. The assistant is yet undergoing changes for operating in a Linux and MacOS operating system', 'intro': 'B.E.N.J.I., short for Brilliant and Efficient non-Javascript enabled Intelligence is a digital assistant that can help do several regular tasks on the laptop...'},
{'mentor_email': 'hiwarekaustubh@gmail.com', 'id': 7, 'comm': 'https://groups.google.com/forum/#!forum/c0derunr', 'mentor': 'Kaustubh Hiware', 'tag': ['Python', 'Django', 'UI', 'Natural Language Processing'], 'btnid': 1007, 'title': 'c0derunR', 'img': 'https://github.com/kaustubhhiware.png?size=50', 'link': 'https://github.com/kaustubhhiware/c0derunR', 'intro_full': 'An attempt at a clear, minimalistic code compiler / interpreter.', 'intro': 'An attempt at a clear, minimalistic code compiler / interpreter.'},
{'mentor_email': 'sayan.sinha@iitkgp.ac.in', 'id': 8, 'comm': 'https://gitter.im/Cascade-Segnet-TF', 'mentor': 'Sayan Sinha', 'tag': ['Python', 'AI', 'CNN', 'ML', 'DL', 'Encoder-decoder'], 'btnid': 1008, 'title': 'Cascade Segnet', 'img': 'https://github.com/americast.png?size=50', 'link': 'https://github.com/americast/cascade-segnet-tf', 'intro_full': 'Implementation of Segnet on a cascading architecture', 'intro': 'Implementation of Segnet on a cascading architecture'},
{'mentor_email': 'rameshwar.zorro@gmail.com', 'id': 9, 'comm': 'https://groups.google.com/forum/?hl=en-GB#!forum/metakgp-chitragupta', 'mentor': 'Rameshwar Bhaskaran', 'tag': ['Python', 'Github-API', 'pywikibot'], 'btnid': 1009, 'title': 'chitragupta', 'img': 'https://github.com/metakgp.png?size=50', 'link': 'https://github.com/metakgp/chitragupta/', 'intro_full': 'Wikibot to track user contributions', 'intro': 'Wikibot to track user contributions'},
{'mentor_email': 'kannan.siddharth12@gmail.com', 'id': 10, 'comm': 'https://groups.google.com/forum/#!forum/kwoc-2017-discussion-icyflame', 'mentor': 'Siddharth Kannan', 'tag': ['javascript', 'tools', 'nodejs', 'NPM', 'module', "rubik's cube", 'timer', 'state machine'], 'btnid': 1010, 'title': 'CLI Cube Timer', 'img': 'https://github.com/icyflame.png?size=50', 'link': 'https://github.com/icyflame/cli-cube-timer/issues', 'intro_full': "Find out how long it takes you to solve the Rubik's Cube: without leaving your command line", 'intro': "Find out how long it takes you to solve the Rubik's Cube: without leaving your command line"},
{'mentor_email': 'zishansami102@gmail.com', 'id': 11, 'comm': 'https://groups.google.com/forum/#!forum/cnn-from-scratch', 'mentor': 'Zishan Sami', 'tag': ['Machine Learning', 'Deep Learning', 'Digit Recognition', 'Python', 'Flask', 'Javascript', 'HTML'], 'btnid': 1011, 'title': 'CNN-from-scratch', 'img': 'https://github.com/zishansami102.png?size=50', 'link': 'https://github.com/zishansami102/CNN-from-Scratch', 'intro_full': 'A scratch implementation of Convolutional Neural Network in python without the use of any deep learning library tested over data sets like CIFAR-10 for Object Detection & MNIST for Digit Recognition', 'intro': 'A scratch implementation of Convolutional Neural Network in python without the use of any deep learning library tested over data sets like CIFAR-10 for Objec...'},
{'mentor_email': 'yash.nisar@somaiya.edu', 'id': 12, 'comm': 'https://gitter.im/coala/coala', 'mentor': 'Yash Nisar', 'tag': ['Python'], 'btnid': 1012, 'title': 'coala', 'img': 'https://github.com/coala.png?size=50', 'link': 'https://github.com/coala/', 'intro_full': 'coala provides a unified interface for linting and fixing code with a single configuration file, regardless of the programming languages used. You can use coala from within your favorite editor, integrate it with your CI, get the results as JSON, or customize it to your needs with its flexible configuration syntax.  coala has a set of official bears (plugins) for several languages, including popular languages such as C/C++, Python, JavaScript, CSS, Java and many more, in addition to some generic language independent algorithms.', 'intro': 'coala provides a unified interface for linting and fixing code with a single configuration file, regardless of the programming languages used. You can use co...'},
{'mentor_email': 'prateekkol21@gmail.com', 'id': 13, 'comm': 'https://code-sleep-python.slack.com/threads/', 'mentor': 'Prateek Chanda', 'tag': ['Python', 'Games', 'Machine Learning', 'Algorithms ', 'Desktop Applications'], 'btnid': 1013, 'title': 'Code Sleep Python', 'img': 'https://github.com/prateekiiest.png?size=50', 'link': 'https://github.com/prateekiiest/Code-Sleep-Python', 'intro_full': 'This repository contains a curated list of some of the awesome small projects made in Python that you can code away this summer.  It includes analysis of different Python modules, a deep analysis of the Python statistics modules and dataframes like Pandas.  It has some projects on classification, correlation and regression which are the fundamental building blocks of Machine Learning and Neural Networks. It also involves projects on Desktop Application and simple games. This repository hosts to 40 participants during Hacktoberfest', 'intro': 'This repository contains a curated list of some of the awesome small projects made in Python that you can code away this summer.  It includes analysis of dif...'},
{'mentor_email': 'athityakumar@gmail.com', 'id': 14, 'comm': 'athityakumar@gmail.com', 'mentor': 'Athitya Kumar', 'tag': [], 'btnid': 1014, 'title': 'colorls', 'img': 'https://github.com/athityakumar.png?size=50', 'link': 'https://github.com/athityakumar/colorls', 'intro_full': "A Ruby gem that beautifies the terminal's ls command, with color and font-awesome icons.", 'intro': "A Ruby gem that beautifies the terminal's ls command, with color and font-awesome icons."},
{'mentor_email': 'shubhamsipah00@gmail.com', 'id': 15, 'comm': 'https://join.slack.com/t/crickkwoc/shared_invite/enQtMjc0NDUyNTU3NzE1LWFmOGI5MDBhMzBmNmJjMTM0ZjhjMTBhNTIzY2VhNTI5N2ZkNjVhYTNkZTUyNGMyNmMwMGE0NjY2OGM1YmY4NDg', 'mentor': 'shubham maddhashiya', 'tag': ['Python', 'Scraping', 'click', 'cli'], 'btnid': 1015, 'title': 'CrickFev', 'img': 'https://github.com/sipah00.png?size=50', 'link': 'https://github.com/sipah00/CrickFev', 'intro_full': 'CLI for getting update of live cricket matches', 'intro': 'CLI for getting update of live cricket matches'},
{'mentor_email': 'athityakumar@gmail.com', 'id': 16, 'comm': 'athityakumar@gmail.com', 'mentor': 'Athitya Kumar', 'tag': [], 'btnid': 1016, 'title': 'data', 'img': 'https://github.com/athityakumar.png?size=50', 'link': 'https://github.com/athityakumar/data', 'intro_full': 'A terminal-data controller with dynamic auto-complete features, that is built with ruby.', 'intro': 'A terminal-data controller with dynamic auto-complete features, that is built with ruby.'},
{'mentor_email': 'avijitg22@gmail.com', 'id': 17, 'comm': 'https://gitter.im/Deep-Chem', 'mentor': 'Avijit Ghosh', 'tag': ['Python', 'Scraping', 'Tensorflow', 'Deep Learning', 'Neural Network', 'Data Collection', 'Word2Vec'], 'btnid': 1017, 'title': 'DeepChem', 'img': 'https://github.com/AvijitGhosh82.png?size=50', 'link': 'https://github.com/AvijitGhosh82/DeepChem', 'intro_full': 'Using Deep Learning to predict properties of Chemicals', 'intro': 'Using Deep Learning to predict properties of Chemicals'},
{'mentor_email': 'sandeepsharma.iit@gmail.com', 'id': 18, 'comm': 'https://diginehruapp.slack.com/, https://www.facebook.com/sandeepsharma.iit', 'mentor': 'Sandeep Sharma', 'tag': ['Python', 'Django', 'JavaScript', 'Android', 'iOS', 'AWS'], 'btnid': 1018, 'title': 'DigiNehru', 'img': 'https://github.com/sandeepsharma-kgp.png?size=50', 'link': 'https://github.com/sandeepsharma-kgp/DigiNehruApk', 'intro_full': 'It is an hybrid app to be developed for mess related activities and in-hall notifications for increasing convenience to boarders and bringing transparency into mess system of hall.', 'intro': 'It is an hybrid app to be developed for mess related activities and in-hall notifications for increasing convenience to boarders and bringing transparency in...'},
{'mentor_email': 'albela.amrit@gmail.com', 'id': 19, 'comm': 'https://groups.google.com/d/forum/game-rewards-system-channel', 'mentor': 'Amrit Choudhary', 'tag': ['Gaming'], 'btnid': 1019, 'title': 'Game Rewards System', 'img': 'https://github.com/amrit-choudhary.png?size=50', 'link': 'https://github.com/amrit-choudhary/UnityChestDropSystem', 'intro_full': 'A free, open-source, extensible and cross system for creating rewards, loots and drops to be used in games built on the Unity engine.', 'intro': 'A free, open-source, extensible and cross system for creating rewards, loots and drops to be used in games built on the Unity engine.'},
{'mentor_email': 'mail2sangeetmishra@gmail.com', 'id': 20, 'comm': 'https://kwoc-17.slack.com/', 'mentor': 'Sangeet Kumar Mishra', 'tag': ['Python', 'pytorch', 'machine learning'], 'btnid': 1020, 'title': 'Generative Adversarial Networks(GANs)', 'img': 'https://github.com/sangeet259.png?size=50', 'link': 'https://github.com/sangeet259/Generative_Adversarial_Networks', 'intro_full': 'Implement GANs in Pytorch and Basic Numpy from the starter code', 'intro': 'Implement GANs in Pytorch and Basic Numpy from the starter code'},
{'mentor_email': 'pranit.bauva@gmail.com', 'id': 21, 'comm': 'Mailing lists (git@vger.kernel.org)', 'mentor': 'Pranit Bauva', 'tag': ['C', 'Shell'], 'btnid': 1021, 'title': 'Git', 'img': 'https://github.com/git.png?size=50', 'link': 'https://github.com/git/git/', 'intro_full': 'Git - fast, scalable, distributed revision control system', 'intro': 'Git - fast, scalable, distributed revision control system'},
{'mentor_email': 'ashishkg0022@gmail.com', 'id': 22, 'comm': 'https://groups.google.com/d/forum/gmail-attachments', 'mentor': 'Ashish Kumar Gaurav', 'tag': [' IMAP  ', 'Gmail', 'Python Script'], 'btnid': 1022, 'title': 'gmail-attachments', 'img': 'https://github.com/ashishkg0022.png?size=50', 'link': 'https://github.com/ashishkg0022/gmail-attachments', 'intro_full': "This program is a Python script that downloads all attachments found in the inbox of the user's Gmail account, based on a specific sender's address.", 'intro': "This program is a Python script that downloads all attachments found in the inbox of the user's Gmail account, based on a specific sender's address."},
{'mentor_email': 'nikhilksingh97@gmail.com', 'id': 23, 'comm': 'https://groups.google.com/forum/#!forum/kwoc-gnewsclient', 'mentor': 'Nikhil Kumar Singh', 'tag': ['python', 'scraping', 'news-client', 'python-package'], 'btnid': 1023, 'title': 'gnewsclient', 'img': 'https://github.com/nikhilkumarsingh.png?size=50', 'link': 'https://github.com/nikhilkumarsingh/gnewsclient', 'intro_full': 'An easy-to-use python client for Google News feeds.', 'intro': 'An easy-to-use python client for Google News feeds.'},
{'mentor_email': 'dibyadas998@gmail.com', 'id': 24, 'comm': 'https://gitter.im/GraphClusters/Lobby', 'mentor': 'Dibya Prakash Das', 'tag': ['d3.js', 'graph', 'networkx', 'python', 'javascript'], 'btnid': 1024, 'title': 'GraphClusters', 'img': 'https://github.com/dibyadas.png?size=50', 'link': 'https://github.com/dibyadas/d3-force-directed-graph/', 'intro_full': 'A community clusters detection app that can take an edgelist as an input and generate an interactive force directed graph and different information like the degree centrality, betweenness centrality and clustering co-efficients are displayed.', 'intro': 'A community clusters detection app that can take an edgelist as an input and generate an interactive force directed graph and different information like the ...'},
{'mentor_email': 'ashishkg0022@gmail.com', 'id': 25, 'comm': 'https://groups.google.com/forum/#!forum/gui-pathplanner', 'mentor': 'Ashish Kumar Gaurav', 'tag': ['PyQt4 ', 'RRTs', 'ROS'], 'btnid': 1025, 'title': 'Gui-PathPlanners', 'img': 'https://github.com/ashishkg0022.png?size=50', 'link': 'https://github.com/ashishkg0022/Gui-PathPlanners', 'intro_full': 'It helps anyone see paths drawn from different path planners and also tune the parameters Edit Add topics', 'intro': 'It helps anyone see paths drawn from different path planners and also tune the parameters Edit Add topics'},
{'mentor_email': 'i.nishantnikhil@gmail.com', 'id': 26, 'comm': 'https://slack.metakgp.org/', 'mentor': 'Nishant Nikhil', 'tag': ['Python', 'Scraping', 'Google API', 'ERP'], 'btnid': 1026, 'title': 'GYFT (Get Your Freaking Timetable)', 'img': 'https://github.com/metakgp.png?size=50', 'link': 'https://github.com/metakgp/gyft', 'intro_full': 'Gets your timetable from ERP and adds it to your Google Calendar or gives you an ICS file which you can add in any common calendar application.', 'intro': 'Gets your timetable from ERP and adds it to your Google Calendar or gives you an ICS file which you can add in any common calendar application.'},
{'mentor_email': 'nishant.sikarwar007@gmail.com', 'id': 27, 'comm': 'nishant.sikarwar007@gmail.com', 'mentor': 'Nishant Singh Sikarwar', 'tag': ['Android', 'Databases'], 'btnid': 1027, 'title': 'Hackathon', 'img': 'https://github.com/pv-912.png?size=50', 'link': 'https://github.com/pv-912/Hackathon', 'intro_full': 'It was Idea to connect professor to  students via showing their availability in their office.  We have to make a firebase database which will be update the values in the list items (Names) shown in the app.', 'intro': 'It was Idea to connect professor to  students via showing their availability in their office.  We have to make a firebase database which will be update the v...'},
{'mentor_email': 'dhiraj@iitkgp.ac.in', 'id': 28, 'comm': 'https://www.facebook.com/groups/166681887253832', 'mentor': 'Dhiraj Kumar', 'tag': [' Web Development', ' JavaScript', 'CSS', 'ReactJS'], 'btnid': 1028, 'title': 'Hangman React Game', 'img': 'https://github.com/djbarnwal.png?size=50', 'link': 'https://github.com/djbarnwal/hangman', 'intro_full': 'A traditional hangman game build using React.', 'intro': 'A traditional hangman game build using React.'},
{'mentor_email': 'kshitijsaraogi@gmail.com', 'id': 29, 'comm': 'mailto: kshitijsaraogi@gmail.com', 'mentor': 'Kshitij Saraogi', 'tag': ['Python', 'CLI', 'DBMS', 'SQL', 'OOP'], 'btnid': 1029, 'title': 'lexico', 'img': 'https://github.com/kshitij10496.png?size=50', 'link': 'https://github.com/kshitij10496/lexico', 'intro_full': 'Command Line Tool for looking up words', 'intro': 'Command Line Tool for looking up words'},
{'mentor_email': 'vernwalrahul@gmail.com', 'id': 30, 'comm': 'https://gitter.im/my-messenger-bot/Lobby', 'mentor': 'Rahul Vernwal', 'tag': ['Python', 'NLP', 'APIs', 'Virtual Assistant'], 'btnid': 1030, 'title': 'Messenger Bot', 'img': 'https://github.com/vernwalrahul.png?size=50', 'link': 'https://github.com/vernwalrahul/my-messenger-bot', 'intro_full': "This is a simple python template that uses Flask to build a webhook for Facebook's Messenger Bot API. The aim is to build interactive chatbot with some added features of virtual assistant.", 'intro': "This is a simple python template that uses Flask to build a webhook for Facebook's Messenger Bot API. The aim is to build interactive chatbot with some added..."},
{'mentor_email': 'kannan.siddharth12@gmail.com', 'id': 31, 'comm': 'https://slack.metakgp.org/', 'mentor': 'Siddharth Kannan', 'tag': ['Docker', 'PHP', 'SysAdmin', 'Linux'], 'btnid': 1031, 'title': 'Metakgp Wiki: Dockerized for fun', 'img': 'https://github.com/metakgp.png?size=50', 'link': 'https://github.com/metakgp/metakgp-wiki', 'intro_full': 'Self-sufficient docker configuration for running the Metakgp Mediawiki instance', 'intro': 'Self-sufficient docker configuration for running the Metakgp Mediawiki instance'},
{'mentor_email': 'athityakumar@gmail.com', 'id': 32, 'comm': 'http://metakgp-slack.herokuapp.com/', 'mentor': 'Athitya Kumar', 'tag': [], 'btnid': 1032, 'title': 'MFQP', 'img': 'https://github.com/metakgp.png?size=50', 'link': 'https://github.com/metakgp/mfqp', 'intro_full': 'IITKGP Question paper search', 'intro': 'IITKGP Question paper search'},
{'mentor_email': 'vermaparth97@gmail.com', 'id': 33, 'comm': 'https://groups.google.com/forum/#!forum/kwoc17-Parth/', 'mentor': 'Parth Verma', 'tag': ['Python', 'Command-Line', 'Youtube-dl', 'Click'], 'btnid': 1033, 'title': 'MobOff', 'img': 'https://github.com/Parth-Vader.png?size=50', 'link': 'https://github.com/Parth-Vader/MobOff', 'intro_full': 'A command line tool to add your music and videos directly to several devices.', 'intro': 'A command line tool to add your music and videos directly to several devices.'},
{'mentor_email': 'aribis369@gmail.com', 'id': 34, 'comm': 'https://gitter.im/OrkoHunter-kwoc/morse-talk', 'mentor': 'Arindam Biswas', 'tag': ['Python', 'CLI', 'GUI', 'Tkinter', 'Matplotlib', 'Wave'], 'btnid': 1034, 'title': 'morse-talk', 'img': 'https://github.com/morse-talk.png?size=50', 'link': 'https://github.com/morse-talk/morse-talk', 'intro_full': ' A Python library written for Morse Code', 'intro': ' A Python library written for Morse Code'},
{'mentor_email': 'sayan.sinha@iitkgp.ac.in', 'id': 35, 'comm': 'https://slack.metakgp.org/', 'mentor': 'Sayan Sinha', 'tag': ['Python', 'scrapping', 'GraphQL', 'API', 'Django'], 'btnid': 1035, 'title': 'Naarad', 'img': 'https://github.com/metakgp.png?size=50', 'link': 'https://github.com/metakgp/naarad-source', 'intro_full': 'Aggregating news since antiquity', 'intro': 'Aggregating news since antiquity'},
{'mentor_email': 'himanshu.mishra.kgp@gmail.com', 'id': 36, 'comm': 'https://groups.google.com/forum/#!forum/networkx-discuss', 'mentor': 'Himanshu Mishra', 'tag': ['Python', 'Graph Theory', 'Algorithms', 'Library', 'Package'], 'btnid': 1036, 'title': 'NetworkX', 'img': 'https://github.com/networkx.png?size=50', 'link': 'https://github.com/networkx/networkx', 'intro_full': 'NetworkX is a Python package for the Graph Theory and Complex Networks.', 'intro': 'NetworkX is a Python package for the Graph Theory and Complex Networks.'},
{'mentor_email': 'athityakumar@gmail.com', 'id': 37, 'comm': 'athityakumar@gmail.com', 'mentor': 'Athitya Kumar', 'tag': [], 'btnid': 1037, 'title': 'Networkx.rb', 'img': 'https://github.com/athityakumar.png?size=50', 'link': 'https://github.com/athityakumar/networkx.rb', 'intro_full': "A Ruby implementation of Python's well known Graph library : networkx", 'intro': "A Ruby implementation of Python's well known Graph library : networkx"},
{'mentor_email': '2ankitasahoo13@gmail.com', 'id': 38, 'comm': 'https://groups.google.com/forum/#!forum/notes_app', 'mentor': 'Ankita Sahoo', 'tag': ['css', 'javascript', 'PHP', 'ajax'], 'btnid': 1038, 'title': 'Notes App', 'img': 'https://github.com/ankita132.png?size=50', 'link': 'https://github.com/ankita132/notes_app', 'intro_full': 'An app on PHP to add, delete and edit notes ', 'intro': 'An app on PHP to add, delete and edit notes '},
{'mentor_email': 'hiwarekaustubh@gmail.com', 'id': 39, 'comm': 'https://www.facebook.com/groups/552015885141292/', 'mentor': 'Kaustubh Hiware', 'tag': ['Bash', 'Terminal', 'Linux'], 'btnid': 1039, 'title': 'NotiFyre', 'img': 'https://github.com/kaustubhhiware.png?size=50', 'link': 'https://github.com/kaustubhhiware/NotiFyre', 'intro_full': 'A terminal task-notifier that works across different command line emulators', 'intro': 'A terminal task-notifier that works across different command line emulators'},
{'mentor_email': 'ankitjain28may77@gmail.com', 'id': 40, 'comm': 'https://gitter.im/ankitjain28may/openchat', 'mentor': 'Ankit Jain', 'tag': ['php', 'composer', 'JavaScript', 'ajax', 'websockets', 'html', 'css', 'jquery', 'gulp'], 'btnid': 1040, 'title': 'OpenChat', 'img': 'https://github.com/ankitjain28may.png?size=50', 'link': 'http://github.com/ankitjain28may/openchat', 'intro_full': 'OpenChat is an Open Source messaging platform where people can send messages to anyone registered to this platform', 'intro': 'OpenChat is an Open Source messaging platform where people can send messages to anyone registered to this platform'},
{'mentor_email': 'harishshivam@gmail.com', 'id': 41, 'comm': 'https://www.facebook.com/groups/127895284549751', 'mentor': 'Harish Nandan', 'tag': ['Java', 'Android'], 'btnid': 1041, 'title': 'Pacman-lvl1', 'img': 'https://github.com/harishnandan.png?size=50', 'link': 'https://github.com/harishnandan/Pacman-lvl1', 'intro_full': 'A very basic android implementation of the Pacman Game.', 'intro': 'A very basic android implementation of the Pacman Game.'},
{'mentor_email': 'himanshu.mishra.kgp@gmail.com', 'id': 42, 'comm': 'https://gitter.im/OrkoHunter-kwoc/pep8speaks', 'mentor': 'Himanshu Mishra', 'tag': ['Python', 'Backend'], 'btnid': 1042, 'title': 'PEP8Speaks', 'img': 'https://github.com/OrkoHunter.png?size=50', 'link': 'https://github.com/OrkoHunter/pep8speaks', 'intro_full': 'A GitHub integration to automatically review Python code style over Pull Requests', 'intro': 'A GitHub integration to automatically review Python code style over Pull Requests'},
{'mentor_email': 'naveenkumarsangi@protonmail.com', 'id': 43, 'comm': 'https://gitter.im/nit-dgp/general', 'mentor': 'Naveen Kumar Sangi', 'tag': ['javascript', 'reactJS', 'file-uploads'], 'btnid': 1043, 'title': 'PiZilla', 'img': 'https://github.com/nitdgpos.png?size=50', 'link': 'https://github.com/nitdgpos/pizilla', 'intro_full': 'A file sharing web application over local network.', 'intro': 'A file sharing web application over local network.'},
{'mentor_email': 'i.nishantnikhil@gmail.com', 'id': 44, 'comm': 'https://slack.metakgp.org/', 'mentor': 'Nishant Nikhil', 'tag': ['JavaScript', 'YouTube', 'Chrome Extension'], 'btnid': 1044, 'title': 'Play Next', 'img': 'https://github.com/nishnik.png?size=50', 'link': 'https://github.com/nishnik/Play_Next', 'intro_full': 'Create a dynamic queue in YouTube.', 'intro': 'Create a dynamic queue in YouTube.'},
{'mentor_email': 'prateekkol21@gmail.com', 'id': 45, 'comm': 'https://gitter.im/codeIIEST/Algorithms', 'mentor': 'Prateek Chanda', 'tag': ['Python', 'Algorithms', 'Data Structures', 'C++', 'Java'], 'btnid': 1045, 'title': 'Playing with Algorithms', 'img': 'https://github.com/codeIIEST.png?size=50', 'link': 'https://github.com/codeIIEST/Algorithms', 'intro_full': 'A Repository to store implementation of some of the famous Data Structures and Algorithms (mainly in C/C++/Java/Python) for everyone to learn and contribute.', 'intro': 'A Repository to store implementation of some of the famous Data Structures and Algorithms (mainly in C/C++/Java/Python) for everyone to learn and contribute.'},
{'mentor_email': 'djmdeveloper060796@gmail.com', 'id': 46, 'comm': 'https://gitter.im/PlotIt/Lobby', 'mentor': 'Deepjyoti Mondal', 'tag': ['Python', 'Plotting', 'Terminal', 'GUI'], 'btnid': 1046, 'title': 'PlotIt', 'img': 'https://github.com/NITDgpOS.png?size=50', 'link': 'https://github.com/NITDgpOS/PlotIt', 'intro_full': 'A terminal and GUI based tool for quick visualisation of mathematical functions.', 'intro': 'A terminal and GUI based tool for quick visualisation of mathematical functions.'},
{'mentor_email': 'himanshushekharb16@gmail.com', 'id': 47, 'comm': 'https://github.com/himanshub16/ProxyMan/issues', 'mentor': 'Himanshu Shekhar', 'tag': ['bash', 'shell', 'linux', 'proxy', 'script'], 'btnid': 1047, 'title': 'ProxyMan', 'img': 'https://github.com/himanshub16.png?size=50', 'link': 'https://github.com/himanshub16/ProxyMan', 'intro_full': 'Tool to configure system-wide proxy settings in Linux.', 'intro': 'Tool to configure system-wide proxy settings in Linux.'},
{'mentor_email': '2ankitasahoo13@gmail.com', 'id': 48, 'comm': 'https://groups.google.com/forum/#!forum/kwoc17-react_google_map', 'mentor': 'Ankita Sahoo', 'tag': ['reactjs', 'firebase', 'css'], 'btnid': 1048, 'title': 'React Google Map', 'img': 'https://github.com/ankita132.png?size=50', 'link': 'https://github.com/ankita132/react_google_map', 'intro_full': 'An app on react where you can upload and view images at various locations on the earth', 'intro': 'An app on react where you can upload and view images at various locations on the earth'},
{'mentor_email': 'dibyadas998@gmail.com', 'id': 49, 'comm': 'https://gitter.im/read-it/', 'mentor': 'Dibya Prakash Das', 'tag': ['Python', 'Chrome Extension', 'flask', 'gmail'], 'btnid': 1049, 'title': 'Read-It', 'img': 'https://github.com/dibyadas.png?size=50', 'link': 'https://github.com/dibyadas/read-it', 'intro_full': 'A chrome extension for mail tracking', 'intro': 'A chrome extension for mail tracking'},
{'mentor_email': 'harishshivam@gmail.com', 'id': 50, 'comm': 'https://www.facebook.com/groups/136133120486393/', 'mentor': 'Harish Nandan', 'tag': ['CSS', 'Javascript', 'HTML'], 'btnid': 1050, 'title': 'Reflexio', 'img': 'https://github.com/harishnandan.png?size=50', 'link': 'https://github.com/harishnandan/reflexio', 'intro_full': 'A web game based on reflection.', 'intro': 'A web game based on reflection.'},
{'mentor_email': 'kannan.siddharth12@gmail.com', 'id': 51, 'comm': 'https://groups.google.com/forum/#!forum/kwoc-2017-discussion-icyflame', 'mentor': 'Siddharth Kannan', 'tag': ['javascript', 'datetime', 'utility', 'tools', 'nodejs', 'NPM', 'module'], 'btnid': 1051, 'title': 'Relative Date: Reverse', 'img': 'https://github.com/icyflame.png?size=50', 'link': 'https://github.com/icyflame/relative-date-reverse/issues', 'intro_full': 'Convert relative dates back to a date representation: 3 days ago => A date object for today - 3 days', 'intro': 'Convert relative dates back to a date representation: 3 days ago => A date object for today - 3 days'},
{'mentor_email': 'sayan.sinha@iitkgp.ac.in', 'id': 52, 'comm': 'https://gitter.im/KgpKubs/Lobby', 'mentor': 'Sayan Sinha', 'tag': ['C++', 'AI', 'Path planning'], 'btnid': 1052, 'title': 'RRT', 'img': 'https://github.com/KgpKubs.png?size=50', 'link': 'https://github.com/KgpKubs/RRT', 'intro_full': 'Collection of variants of RRT Path Planners', 'intro': 'Collection of variants of RRT Path Planners'},
{'mentor_email': 'nirmalsarswat400@gmail.com', 'id': 53, 'comm': 'https://kwoc.slack.com', 'mentor': 'Nirmal Sarswat', 'tag': ['Android ', 'Security', 'Network'], 'btnid': 1053, 'title': 'SafeAndroid', 'img': 'https://github.com/vivonk.png?size=50', 'link': 'https://github.com/vivonk/SaveMore', 'intro_full': "In Android their are many privacy issues, every time some application fetch your details that you don't want to let ope to anyone. To ensure that your data is private I have the project in which we have to fake all possible bugs of privacy in Android and fix them into a small android app. Every time when ever some data travel from one end of user to some where else, we will notify about the privacy.", 'intro': "In Android their are many privacy issues, every time some application fetch your details that you don't want to let ope to anyone. To ensure that your data i..."},
{'mentor_email': 'samriddhidjokestersinha@gmail.com', 'id': 54, 'comm': 'https://groups.google.com/d/forum/sangitanlp', 'mentor': 'Samriddhi Sinha', 'tag': ['Python', 'NLP', 'Machine Learning', 'Scraping'], 'btnid': 1054, 'title': 'Sangita', 'img': 'https://github.com/djokester.png?size=50', 'link': 'https://github.com/djokester/sangita', 'intro_full': 'A Natural Language Processing Toolkit for Indian Lamguages that utilize LSTMs for POS tagging.', 'intro': 'A Natural Language Processing Toolkit for Indian Lamguages that utilize LSTMs for POS tagging.'},
{'mentor_email': 'dhruvgirishapte@gmail.com', 'id': 55, 'comm': 'https://groups.google.com/forum/#!forum/sciruby-examples-discuss', 'mentor': 'Dhruv Apte and Athitya Kumar', 'tag': ['Ruby', 'machine learning', 'natural language processing', 'IRuby'], 'btnid': 1055, 'title': 'SciRuby-examples', 'img': 'https://github.com/the-ethan-hunt.png?size=50', 'link': 'https://github.com/the-ethan-hunt/sciruby-examples', 'intro_full': "Sciruby-examples is a project that lists out tutorials in IRuby notebooks for machine learning and NLP. This is a 'first of its kind' repository on GitHub. Various ML and NLP algorithms will be implemented in ruby by contributors which can help newbies in machine learning ", 'intro': "Sciruby-examples is a project that lists out tutorials in IRuby notebooks for machine learning and NLP. This is a 'first of its kind' repository on GitHub. V..."},
{'mentor_email': 'vermaparth97@gmail.com', 'id': 56, 'comm': 'https://groups.google.com/forum/#!forum/kwoc17-Parth/', 'mentor': 'Parth Verma', 'tag': ['Python', 'Scrapy', 'Scraping', 'Benchmarking', 'Django'], 'btnid': 1056, 'title': 'Scrapy Bench Speedcenter', 'img': 'https://github.com/scrapy.png?size=50', 'link': 'https://github.com/scrapy/scrapy-bench-speedcenter', 'intro_full': 'A Django web app for collecting various results for scrapy-bench and uploading it to web.', 'intro': 'A Django web app for collecting various results for scrapy-bench and uploading it to web.'},
{'mentor_email': 'vermaparth97@gmail.com', 'id': 57, 'comm': 'https://groups.google.com/forum/#!forum/kwoc17-Parth/', 'mentor': 'Parth Verma', 'tag': ['Python', 'Click', 'Scrapy', 'Scraping', 'Benchmarking', 'Memory-Profiling', 'Command-Line'], 'btnid': 1057, 'title': 'Scrapy-Bench', 'img': 'https://github.com/scrapy.png?size=50', 'link': 'https://github.com/scrapy/scrapy-bench', 'intro_full': 'A command-line interface for bench-marking Scrapy, that reflects real-world usage.', 'intro': 'A command-line interface for bench-marking Scrapy, that reflects real-world usage.'},
{'mentor_email': 'aniqrah@gmail.com', 'id': 58, 'comm': 'https://gitter.im/SecureSnaps55/Lobby', 'mentor': 'Aniq Ur Rahman', 'tag': ['Python', 'Image', 'codec', 'encryption', 'cryptography'], 'btnid': 1058, 'title': 'SecureSnaps', 'img': 'https://github.com/NITDgpOS.png?size=50', 'link': 'https://github.com/NITDgpOS/SecureSnaps', 'intro_full': 'Image Codec using Private-key cryptography ', 'intro': 'Image Codec using Private-key cryptography '},
{'mentor_email': 'sayan.sinha@iitkgp.ac.in', 'id': 59, 'comm': 'https://gitter.im/opencv-Snakes', 'mentor': 'Sayan Sinha', 'tag': ['C++', 'Gaming', 'OpenCV'], 'btnid': 1059, 'title': 'Snakes', 'img': 'https://github.com/americast.png?size=50', 'link': 'https://github.com/americast/Snakes', 'intro_full': 'A simple game of snakes implemented in C++ and OpenCV', 'intro': 'A simple game of snakes implemented in C++ and OpenCV'},
{'mentor_email': 'ragnarok0211@gmail.com', 'id': 60, 'comm': 'https://cvkgp.slack.com', 'mentor': 'Sourish Ghosh', 'tag': ['Camera Calibration', 'Computer Vision', 'C++', 'OpenCV'], 'btnid': 1060, 'title': 'Stereo Camera Calibration', 'img': 'https://github.com/sourishg.png?size=50', 'link': 'https://github.com/sourishg/stereo-calibration', 'intro_full': 'Often for complicated tasks in computer vision it is required that a camera be calibrated. Camera calibration is a necessary step in 3D computer vision in order to extract metric information from 2D images. Stereo calibration is used to find the geometric transformations between two cameras, and the relationship between two image projections of a particular 3D scene. More details here: http://sourishghosh.com/2016/stereo-calibration-cpp-opencv/', 'intro': 'Often for complicated tasks in computer vision it is required that a camera be calibrated. Camera calibration is a necessary step in 3D computer vision in or...'},
{'mentor_email': 'nitin.iitkgp23@gmail.com', 'id': 61, 'comm': 'https://riot.im/app/#/room/#sunpy-kwoc:matrix.org', 'mentor': 'Nitin Choudhary', 'tag': ['Python', 'astronomy', 'sun', 'gsoc', 'scientific'], 'btnid': 1061, 'title': 'SunPy', 'img': 'https://github.com/sunpy.png?size=50', 'link': 'https://github.com/sunpy/sunpy', 'intro_full': 'SunPy is a community-developed free and open-source software package for solar physics. It aims to be provide a comprehensive data analysis environment that allows researchers within the field of solar physics to carry out their tasks with the minimal effort.  SunPy is written using the Python programming language and is build upon the scientific Python environment which includes several core packages such as NumPy, SciPy, Matplotlib and Pandas. Since SunPy deals with key astrophysical concepts, its development is closely associated with that of Astropy, which is a fundamental package within the Python astronomy ecosystem.', 'intro': 'SunPy is a community-developed free and open-source software package for solar physics. It aims to be provide a comprehensive data analysis environment that ...'},
{'mentor_email': 'shivamvats.iitkgp@gmail.com', 'id': 62, 'comm': 'https://gitter.im/sympy/sympy', 'mentor': 'Shivam Vats', 'tag': ['Python', 'Maths ', 'Computation'], 'btnid': 1062, 'title': 'SymPy', 'img': 'https://github.com/sympy.png?size=50', 'link': 'https://github.com/sympy/sympy', 'intro_full': 'A Python Library for symbolic Maths.', 'intro': 'A Python Library for symbolic Maths.'},
{'mentor_email': 'apoorvakumar169@gmail.com', 'id': 63, 'comm': 'https://groups.google.com/forum/#!forum/talktomebot', 'mentor': 'Apoorva Kumar', 'tag': ['Python', 'PyAiml', 'Ros'], 'btnid': 1063, 'title': 'TalkToMe', 'img': 'https://github.com/rava-dosa.png?size=50', 'link': 'https://github.com/rava-dosa/TalkToMe', 'intro_full': 'Siri inspired chatbot. A beginner friendly project.', 'intro': 'Siri inspired chatbot. A beginner friendly project.'},
{'mentor_email': 'athityakumar@gmail.com', 'id': 64, 'comm': 'athityakumar@gmail.com', 'mentor': 'Athitya Kumar', 'tag': [], 'btnid': 1064, 'title': 'timetable', 'img': 'https://github.com/athityakumar.png?size=50', 'link': 'https://github.com/athityakumar/timetable', 'intro_full': 'A tool to display the timetable. A Terminal timetable, if you will.', 'intro': 'A tool to display the timetable. A Terminal timetable, if you will.'},
{'mentor_email': 'prateekkol21@gmail.com', 'id': 65, 'comm': 'https://titanic-survival.slack.com/', 'mentor': 'Prateek Chanda', 'tag': ['Python', 'Machine Learning', 'ipython notebook', 'statistical analysis'], 'btnid': 1065, 'title': 'Titanic Survival Exploration', 'img': 'https://github.com/prateekiiest.png?size=50', 'link': 'https://github.com/prateekiiest/titanic_survival_exploration', 'intro_full': 'It is a project on Machine Learning which aims to predict survival of passengers on Titanic. Contributing to this will aim to create a concrete understanding of ML for beginners and also help them go forward in Open Source', 'intro': 'It is a project on Machine Learning which aims to predict survival of passengers on Titanic. Contributing to this will aim to create a concrete understanding...'},
{'mentor_email': 'athityakumar@gmail.com', 'id': 66, 'comm': 'athityakumar@gmail.com', 'mentor': 'Athitya Kumar', 'tag': [], 'btnid': 1066, 'title': 'tvseries', 'img': 'https://github.com/athityakumar.png?size=50', 'link': 'https://github.com/athityakumar/tvseries', 'intro_full': "TV Series is a tool that scrapes Episode Synopsis' of popular TV Series' from websites like Wikipedia / IMDb and show in one place with a user-friendly navigation UI.", 'intro': "TV Series is a tool that scrapes Episode Synopsis' of popular TV Series' from websites like Wikipedia / IMDb and show in one place with a user-friendly navig..."},
{'mentor_email': 'mubarishassannk@gmail.com', 'id': 67, 'comm': 'https://gitter.im/urban-robot/Lobby', 'mentor': 'Mubaris NK', 'tag': ['Python', 'Machine Learning', 'NLP', 'Natural Language Processing'], 'btnid': 1067, 'title': 'Urban Robot', 'img': 'https://github.com/mubaris.png?size=50', 'link': 'https://github.com/mubaris/urban-robot', 'intro_full': 'Reddit bot which replies to sarcastic comments', 'intro': 'Reddit bot which replies to sarcastic comments'},
{'mentor_email': 'mayank.jindal5@gmail.com', 'id': 68, 'comm': 'https://gitter.im/VoiceCalculator', 'mentor': 'Mayank Jindal', 'tag': [], 'btnid': 1068, 'title': 'Voice Calculator', 'img': 'https://github.com/mayank-kgp.png?size=50', 'link': 'https://github.com/mayank-kgp/VoiceCalculator', 'intro_full': 'The goal of this project is to build a calculator which has speech reconition ability for input.', 'intro': 'The goal of this project is to build a calculator which has speech reconition ability for input.'},
{'mentor_email': 'apoorvakumar169@gmail.com', 'id': 69, 'comm': 'https://groups.google.com/forum/#!forum/weedongit', 'mentor': 'Apoorva Kumar', 'tag': [], 'btnid': 1069, 'title': 'Weed', 'img': 'https://github.com/rava-dosa.png?size=50', 'link': 'https://github.com/rava-dosa/Weed', 'intro_full': 'A lan based video chat based on transmission control protocol', 'intro': 'A lan based video chat based on transmission control protocol'},
{'mentor_email': 'apoorvakumar169@gmail.com', 'id': 70, 'comm': 'https://groups.google.com/forum/#!forum/weedongit', 'mentor': 'Apoorva Kumar', 'tag': ['C++', 'Socket', 'OpenCv'], 'btnid': 1070, 'title': 'Weed', 'img': 'https://github.com/rava-dosa.png?size=50', 'link': 'https://github.com/rava-dosa/Weed', 'intro_full': 'A video chat for LAN based on tcp. Beginner friendly project', 'intro': 'A video chat for LAN based on tcp. Beginner friendly project'},
{'mentor_email': 'aribis369@gmail.com', 'id': 71, 'comm': 'https://groups.google.com/forum/#!forum/whats-in-the-news-geek', 'mentor': 'Arindam Biswas', 'tag': ['Python', 'CLI', 'API'], 'btnid': 1071, 'title': 'Whats-in-the-news-GEEK', 'img': 'https://github.com/aribis369.png?size=50', 'link': 'https://github.com/aribis369/Whats-in-the-news-GEEK', 'intro_full': 'A CLI tool to bring all the latest news to your terminal.', 'intro': 'A CLI tool to bring all the latest news to your terminal.'},
{'mentor_email': 'vermaparth97@gmail.com', 'id': 72, 'comm': 'https://groups.google.com/forum/#!forum/kwoc17-Parth/', 'mentor': 'Parth Verma', 'tag': ['Chrome', 'Extension', 'JavaScript', 'Data-Analytics', 'Databases'], 'btnid': 1072, 'title': 'Youtube Data Collector', 'img': 'https://github.com/Parth-Vader.png?size=50', 'link': 'https://github.com/Parth-Vader/YoutubeDataCollector', 'intro_full': 'Searches for recent Youtube videos opened and displays them in a list form.', 'intro': 'Searches for recent Youtube videos opened and displays them in a list form.'},
{'mentor_email': 'mudeshi1209@gmail.com', 'id': 73, 'comm': 'https://gitter.im/fast-playlist', 'mentor': 'Meet Udeshi', 'tag': ['javascript', 'web-app', ' youtube-api', 'jquery'], 'btnid': 1073, 'title': 'Youtube Fast Playlist', 'img': 'https://github.com/udiboy1209.png?size=50', 'link': 'https://github.com/udiboy1209/fast_playlist', 'intro_full': 'If you use YouTube to listen to music constantly while working or studying, this WebApp is for you. It works like a Music Player for YouTube, where you can rapidly create a playlist by searching videos and adding them. Fast re-ordering, Repeat All, Repeat One, Shuffle features make it feel like a music player.', 'intro': 'If you use YouTube to listen to music constantly while working or studying, this WebApp is for you. It works like a Music Player for YouTube, where you can r...'},

    ];

    var searchRes = cards;

    function findMatches(wordToMatch, cards) {
        return cards.filter(project => {
            const regex = new RegExp(wordToMatch, 'gi');
            return project.title.match(regex) || regex.test(project.tag);
        });
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
              <div class="tag">'+v.tag[i]+'</div>\
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
                <h3 class="header-title"><i class><img src="'+v.img+'"></i>'+'<a target="_blank" href="'+v.link+'">'+v.title+'</a>'+'</h3>\
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

    v = $('.tag')
    v.click(onTagClick)

    v.css("cursor", "pointer")


    }

    displayRes();

});
