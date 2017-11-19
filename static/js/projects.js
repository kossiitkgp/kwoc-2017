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
    {'coordi': 'TBD', 'title': 'AirHockey', 'id': 1, 'mentor': '<a href="mailto:aniqrah@gmail.com">Aniq Ur Rahman</a>', 'intro_full': 'Air Hockey game created using pygame ', 'btnid': 1001, 'tag': ['Python', 'AI', 'Game', 'Pygame', 'Physics'], 'comm': 'https://gitter.im/AirHockey55/Lobby#', 'link': 'https://github.com/NITDgpOS/AirHockey', 'intro': 'Air Hockey game created using pygame '},
{'coordi': 'TBD', 'title': 'Alchem Desktop', 'id': 2, 'mentor': '<a href="mailto:techfreakworm@gmail.com">Mayank Gupta</a>', 'intro_full': 'An all-in-one inventory and accounts solution for Chemist shops (both wholesale and retail) as per new Indian taxation standards.', 'btnid': 1002, 'tag': ['Java', 'JavaFX', 'XML', 'CSS', 'PostgreSQL'], 'comm': 'https://join.slack.com/t/alchemsynergy/shared_invite/enQtMjU0NjUwMzAyNTgzLTM0OTNlMTg3ZDk1MmQ4ODdkYzM2YTA3MTE2MGM4ZTQ1ODU5ZTc3YTA4ODY5MWI2ZTAzZDM5MjEzOGM3N2FhYjY', 'link': 'https://github.com/alchemsynergy/alchem', 'intro': 'An all-in-one inventory and accounts solution for Chemist shops (both wholesale and retail) as per new Indian taxation standards.'},
{'coordi': 'TBD', 'title': 'ANN', 'id': 3, 'mentor': '<a href="mailto:sayan.sinha@iitkgp.ac.in">Sayan Sinha</a>', 'intro_full': 'Artificial Neural Network from scratch in Julia', 'btnid': 1003, 'tag': ['Julia', 'ANN', 'DL', 'ML'], 'comm': 'Gitter', 'link': 'https://github.com/americast/ANN', 'intro': 'Artificial Neural Network from scratch in Julia'},
{'coordi': 'TBD', 'title': 'Archdraw', 'id': 4, 'mentor': '<a href="mailto:ashris@mit.edu">Ashris Choudhury</a>', 'intro_full': 'An architecture automation tool that converts a pencil drawn sketch to a rendered plan instantly', 'btnid': 1004, 'tag': ['javascript', 'p5js', 'design', 'image processing', 'computer vision'], 'comm': 'https://www.facebook.com/Ashris', 'link': 'https://github.com/iashris/archdraw', 'intro': 'An architecture automation tool that converts a pencil drawn sketch to a rendered plan instantly'},
{'coordi': 'TBD', 'title': 'Awesome Social Science', 'id': 5, 'mentor': '<a href="mailto:kannan.siddharth12@gmail.com">Siddharth Kannan</a>', 'intro_full': ' A curated list of adages, psychological syndromes and behaviour explaining aphorisms. ', 'btnid': 1005, 'tag': ['social science', 'psychology', 'syndromes', 'behavior', 'awesome-list', 'non programming'], 'comm': 'https://groups.google.com/forum/#!forum/kwoc-2017-discussion-icyflame', 'link': 'https://github.com/icyflame/awesome-social-science', 'intro': ' A curated list of adages, psychological syndromes and behaviour explaining aphorisms. '},
{'coordi': 'TBD', 'title': 'B.E.N.J.I.', 'id': 6, 'mentor': '<a href="mailto:dhruvgirishapte@gmail.com">Dhruv Apte</a>', 'intro_full': 'B.E.N.J.I., short for Brilliant and Efficient non-Javascript enabled Intelligence is a digital assistant that can help do several regular tasks on the laptop. Its numerous tasks include searching on Google, Wiki search, opening any Webpage, fetching news from several news agencies. The assistant can be activated and operated using voice commands. The assistant is yet undergoing changes for operating in a Linux and MacOS operating system', 'btnid': 1006, 'tag': ['Python', 'digital-assistant', 'speech-to-text', 'speech-recognition'], 'comm': 'https://groups.google.com/forum/#!forum/benji-discussion', 'link': 'https://github.com/the-ethan-hunt/B.E.N.J.I.', 'intro': 'B.E.N.J.I., short for Brilliant and Efficient non-Javascript enabled Intelligence is a digital assistant that can help do several regular tasks on the laptop...'},
{'coordi': 'TBD', 'title': 'c0derunR', 'id': 7, 'mentor': '<a href="mailto:hiwarekaustubh@gmail.com">Kaustubh Hiware</a>', 'intro_full': 'An attempt at a clear, minimalistic code compiler / interpreter.', 'btnid': 1007, 'tag': ['Python', 'Django', 'UI', 'Natural Language Processing'], 'comm': 'https://groups.google.com/forum/#!forum/c0derunr', 'link': 'https://github.com/kaustubhhiware/c0derunR', 'intro': 'An attempt at a clear, minimalistic code compiler / interpreter.'},
{'coordi': 'TBD', 'title': 'Cascade Segnet', 'id': 8, 'mentor': '<a href="mailto:sayan.sinha@iitkgp.ac.in">Sayan Sinha</a>', 'intro_full': 'Implementation of Segnet on a cascading architecture', 'btnid': 1008, 'tag': ['Python', 'AI', 'CNN', 'ML', 'DL', 'Encoder-decoder'], 'comm': 'Gitter', 'link': 'https://github.com/americast/cascade-segnet-tf', 'intro': 'Implementation of Segnet on a cascading architecture'},
{'coordi': 'TBD', 'title': 'chitragupta', 'id': 9, 'mentor': '<a href="mailto:rameshwar.zorro@gmail.com">Rameshwar Bhaskaran</a>', 'intro_full': 'Wikibot to track user contributions', 'btnid': 1009, 'tag': ['Python', 'Github-API', 'pywikibot'], 'comm': 'https://groups.google.com/forum/?hl=en-GB#!forum/metakgp-chitragupta', 'link': 'https://github.com/metakgp/chitragupta/', 'intro': 'Wikibot to track user contributions'},
{'coordi': 'TBD', 'title': 'CLI Cube Timer', 'id': 10, 'mentor': '<a href="mailto:kannan.siddharth12@gmail.com">Siddharth Kannan</a>', 'intro_full': "Find out how long it takes you to solve the Rubik's Cube: without leaving your command line", 'btnid': 1010, 'tag': ['javascript', 'tools', 'nodejs', 'NPM', 'module', "rubik's cube", 'timer', 'state machine'], 'comm': 'https://groups.google.com/forum/#!forum/kwoc-2017-discussion-icyflame', 'link': 'https://github.com/icyflame/cli-cube-timer/issues', 'intro': "Find out how long it takes you to solve the Rubik's Cube: without leaving your command line"},
{'coordi': 'TBD', 'title': 'CNN-from-scratch', 'id': 11, 'mentor': '<a href="mailto:zishansami102@gmail.com">Zishan Sami</a>', 'intro_full': 'A scratch implementation of Convolutional Neural Network in python without the use of any deep learning library tested over data sets like CIFAR-10 for Object Detection & MNIST for Digit Recognition', 'btnid': 1011, 'tag': ['Machine Learning', 'Deep Learning', 'Digit Recognition', 'Python', 'Flask', 'Javascript', 'HTML'], 'comm': 'https://groups.google.com/forum/#!forum/cnn-from-scratch', 'link': 'https://github.com/zishansami102/CNN-from-Scratch', 'intro': 'A scratch implementation of Convolutional Neural Network in python without the use of any deep learning library tested over data sets like CIFAR-10 for Objec...'},
{'coordi': 'TBD', 'title': 'coala', 'id': 12, 'mentor': '<a href="mailto:yash.nisar@somaiya.edu">Yash Nisar</a>', 'intro_full': 'coala provides a unified interface for linting and fixing code with a single configuration file, regardless of the programming languages used. You can use coala from within your favorite editor, integrate it with your CI, get the results as JSON, or customize it to your needs with its flexible configuration syntax.  coala has a set of official bears (plugins) for several languages, including popular languages such as C/C++, Python, JavaScript, CSS, Java and many more, in addition to some generic language independent algorithms.', 'btnid': 1012, 'tag': ['Python'], 'comm': 'https://gitter.im/coala/coala', 'link': 'https://github.com/coala/', 'intro': 'coala provides a unified interface for linting and fixing code with a single configuration file, regardless of the programming languages used. You can use co...'},
{'coordi': 'TBD', 'title': 'Code Sleep Python', 'id': 13, 'mentor': '<a href="mailto:prateekkol21@gmail.com">Prateek Chanda</a>', 'intro_full': 'This repository contains a curated list of some of the awesome small projects made in Python that you can code away this summer.  It includes analysis of different Python modules, a deep analysis of the Python statistics modules and dataframes like Pandas.  It has some projects on classification, correlation and regression which are the fundamental building blocks of Machine Learning and Neural Networks. It also involves projects on Desktop Application and simple games. This repository hosts to 40 participants during Hacktoberfest', 'btnid': 1013, 'tag': ['Python', 'Games', 'Machine Learning', 'Algorithms ', 'Desktop Applications'], 'comm': 'https://code-sleep-python.slack.com/threads/', 'link': 'https://github.com/prateekiiest/Code-Sleep-Python', 'intro': 'This repository contains a curated list of some of the awesome small projects made in Python that you can code away this summer.  It includes analysis of dif...'},
{'coordi': 'TBD', 'title': 'colorls', 'id': 14, 'mentor': '<a href="mailto:athityakumar@gmail.com">Athitya Kumar</a>', 'intro_full': "A Ruby gem that beautifies the terminal's ls command, with color and font-awesome icons.", 'btnid': 1014, 'tag': [], 'comm': 'athityakumar@gmail.com', 'link': 'https://github.com/athityakumar/colorls', 'intro': "A Ruby gem that beautifies the terminal's ls command, with color and font-awesome icons."},
{'coordi': 'TBD', 'title': 'CrickFev', 'id': 15, 'mentor': '<a href="mailto:shubhamsipah00@gmail.com">shubham maddhashiya</a>', 'intro_full': 'CLI for getting update of live cricket matches', 'btnid': 1015, 'tag': ['Python', 'Scraping', 'click', 'cli'], 'comm': 'https://join.slack.com/t/crickkwoc/shared_invite/enQtMjc0NDUyNTU3NzE1LWFmOGI5MDBhMzBmNmJjMTM0ZjhjMTBhNTIzY2VhNTI5N2ZkNjVhYTNkZTUyNGMyNmMwMGE0NjY2OGM1YmY4NDg', 'link': 'https://github.com/sipah00/CrickFev', 'intro': 'CLI for getting update of live cricket matches'},
{'coordi': 'TBD', 'title': 'data', 'id': 16, 'mentor': '<a href="mailto:athityakumar@gmail.com">Athitya Kumar</a>', 'intro_full': 'A terminal-data controller with dynamic auto-complete features, that is built with ruby.', 'btnid': 1016, 'tag': [], 'comm': 'athityakumar@gmail.com', 'link': 'https://github.com/athityakumar/data', 'intro': 'A terminal-data controller with dynamic auto-complete features, that is built with ruby.'},
{'coordi': 'TBD', 'title': 'DeepChem', 'id': 17, 'mentor': '<a href="mailto:avijitg22@gmail.com">Avijit Ghosh</a>', 'intro_full': 'Using Deep Learning to predict properties of Chemicals', 'btnid': 1017, 'tag': ['Python', 'Scraping', 'Tensorflow', 'Deep Learning', 'Neural Network', 'Data Collection', 'Word2Vec'], 'comm': 'https://gitter.im/Deep-Chem', 'link': 'https://github.com/AvijitGhosh82/DeepChem', 'intro': 'Using Deep Learning to predict properties of Chemicals'},
{'coordi': 'TBD', 'title': 'DigiNehru', 'id': 18, 'mentor': '<a href="mailto:sandeepsharma.iit@gmail.com">Sandeep Sharma</a>', 'intro_full': 'It is an hybrid app to be developed for mess related activities and in-hall notifications for increasing convenience to boarders and bringing transparency into mess system of hall.', 'btnid': 1018, 'tag': ['Python', 'Django', 'JavaScript', 'Android', 'iOS', 'AWS'], 'comm': 'https://diginehruapp.slack.com/, https://www.facebook.com/sandeepsharma.iit', 'link': 'https://github.com/sandeepsharma-kgp/DigiNehruApk', 'intro': 'It is an hybrid app to be developed for mess related activities and in-hall notifications for increasing convenience to boarders and bringing transparency in...'},
{'coordi': 'TBD', 'title': 'Generative Adversarial Networks(GANs)', 'id': 19, 'mentor': '<a href="mailto:mail2sangeetmishra@gmail.com">Sangeet Kumar Mishra</a>', 'intro_full': 'Implement GANs in Pytorch and Basic Numpy from the starter code', 'btnid': 1019, 'tag': ['Python', 'pytorch', 'machine learning'], 'comm': 'https://kwoc-17.slack.com/', 'link': 'https://github.com/sangeet259/Generative_Adversarial_Networks', 'intro': 'Implement GANs in Pytorch and Basic Numpy from the starter code'},
{'coordi': 'TBD', 'title': 'Git', 'id': 20, 'mentor': '<a href="mailto:pranit.bauva@gmail.com">Pranit Bauva</a>', 'intro_full': 'Git - fast, scalable, distributed revision control system', 'btnid': 1020, 'tag': ['C', 'Shell'], 'comm': 'Mailing lists (git@vger.kernel.org)', 'link': 'https://github.com/git/git/', 'intro': 'Git - fast, scalable, distributed revision control system'},
{'coordi': 'TBD', 'title': 'gmail-attachments', 'id': 21, 'mentor': '<a href="mailto:ashishkg0022@gmail.com">Ashish Kumar Gaurav</a>', 'intro_full': "This program is a Python script that downloads all attachments found in the inbox of the user's Gmail account, based on a specific sender's address.", 'btnid': 1021, 'tag': [' IMAP  ', 'Gmail', 'Python Script'], 'comm': 'https://groups.google.com/d/forum/gmail-attachments', 'link': 'https://github.com/ashishkg0022/gmail-attachments', 'intro': "This program is a Python script that downloads all attachments found in the inbox of the user's Gmail account, based on a specific sender's address."},
{'coordi': 'TBD', 'title': 'gnewsclient', 'id': 22, 'mentor': '<a href="mailto:nikhilksingh97@gmail.com">Nikhil Kumar Singh</a>', 'intro_full': 'An easy-to-use python client for Google News feeds.', 'btnid': 1022, 'tag': ['python', 'scraping', 'news-client', 'python-package'], 'comm': 'https://groups.google.com/forum/#!forum/kwoc-gnewsclient', 'link': 'https://github.com/nikhilkumarsingh/gnewsclient', 'intro': 'An easy-to-use python client for Google News feeds.'},
{'coordi': 'TBD', 'title': 'GraphClusters', 'id': 23, 'mentor': '<a href="mailto:dibyadas998@gmail.com">Dibya Prakash Das</a>', 'intro_full': 'A community clusters detection app that can take an edgelist as an input and generate an interactive force directed graph and different information like the degree centrality, betweenness centrality and clustering co-efficients are displayed.', 'btnid': 1023, 'tag': ['d3.js', 'graph', 'networkx', 'python', 'javascript'], 'comm': 'https://gitter.im/GraphClusters/Lobby', 'link': 'https://github.com/dibyadas/d3-force-directed-graph/', 'intro': 'A community clusters detection app that can take an edgelist as an input and generate an interactive force directed graph and different information like the ...'},
{'coordi': 'TBD', 'title': 'Gui-PathPlanners', 'id': 24, 'mentor': '<a href="mailto:ashishkg0022@gmail.com">Ashish Kumar Gaurav</a>', 'intro_full': 'It helps anyone see paths drawn from different path planners and also tune the parameters Edit Add topics', 'btnid': 1024, 'tag': ['PyQt4 ', 'RRTs', 'ROS'], 'comm': 'https://groups.google.com/forum/#!forum/gui-pathplanner', 'link': 'https://github.com/ashishkg0022/Gui-PathPlanners', 'intro': 'It helps anyone see paths drawn from different path planners and also tune the parameters Edit Add topics'},
{'coordi': 'TBD', 'title': 'GYFT (Get Your Freaking Timetable)', 'id': 25, 'mentor': '<a href="mailto:i.nishantnikhil@gmail.com">Nishant Nikhil</a>', 'intro_full': 'Gets your timetable from ERP and adds it to your Google Calendar or gives you an ICS file which you can add in any common calendar application.', 'btnid': 1025, 'tag': ['Python', 'Scraping', 'Google API', 'ERP'], 'comm': 'https://slack.metakgp.org/', 'link': 'https://github.com/metakgp/gyft', 'intro': 'Gets your timetable from ERP and adds it to your Google Calendar or gives you an ICS file which you can add in any common calendar application.'},
{'coordi': 'TBD', 'title': 'Hackathon', 'id': 26, 'mentor': '<a href="mailto:nishant.sikarwar007@gmail.com">Nishant Singh Sikarwar</a>', 'intro_full': 'It was Idea to connect professor to  students via showing their availability in their office.  We have to make a firebase database which will be update the values in the list items (Names) shown in the app.', 'btnid': 1026, 'tag': ['Android', 'Databases'], 'comm': 'nishant.sikarwar007@gmail.com', 'link': 'https://github.com/pv-912/Hackathon', 'intro': 'It was Idea to connect professor to  students via showing their availability in their office.  We have to make a firebase database which will be update the v...'},
{'coordi': 'TBD', 'title': 'Hangman React Game', 'id': 27, 'mentor': '<a href="mailto:dhiraj@iitkgp.ac.in">Dhiraj Kumar</a>', 'intro_full': 'A traditional hangman game build using React.', 'btnid': 1027, 'tag': [' Web Development', ' JavaScript', 'CSS', 'ReactJS'], 'comm': 'https://www.facebook.com/groups/166681887253832', 'link': 'https://github.com/djbarnwal/hangman', 'intro': 'A traditional hangman game build using React.'},
{'coordi': 'TBD', 'title': 'lexico', 'id': 28, 'mentor': '<a href="mailto:kshitijsaraogi@gmail.com">Kshitij Saraogi</a>', 'intro_full': 'Command Line Tool for looking up words', 'btnid': 1028, 'tag': ['Python', 'CLI', 'DBMS', 'SQL', 'OOP'], 'comm': 'mailto: kshitijsaraogi@gmail.com', 'link': 'https://github.com/kshitij10496/lexico', 'intro': 'Command Line Tool for looking up words'},
{'coordi': 'TBD', 'title': 'Messenger Bot', 'id': 29, 'mentor': '<a href="mailto:vernwalrahul@gmail.com">Rahul Vernwal</a>', 'intro_full': "This is a simple python template that uses Flask to build a webhook for Facebook's Messenger Bot API. The aim is to build interactive chatbot with some added features of virtual assistant.", 'btnid': 1029, 'tag': ['Python', 'NLP', 'APIs', 'Virtual Assistant'], 'comm': 'https://gitter.im/my-messenger-bot/Lobby', 'link': 'https://github.com/vernwalrahul/my-messenger-bot', 'intro': "This is a simple python template that uses Flask to build a webhook for Facebook's Messenger Bot API. The aim is to build interactive chatbot with some added..."},
{'coordi': 'TBD', 'title': 'Metakgp Wiki: Dockerized for fun', 'id': 30, 'mentor': '<a href="mailto:kannan.siddharth12@gmail.com">Siddharth Kannan</a>', 'intro_full': 'Self-sufficient docker configuration for running the Metakgp Mediawiki instance', 'btnid': 1030, 'tag': ['Docker', 'PHP', 'SysAdmin', 'Linux'], 'comm': 'https://slack.metakgp.org/', 'link': 'https://github.com/metakgp/metakgp-wiki', 'intro': 'Self-sufficient docker configuration for running the Metakgp Mediawiki instance'},
{'coordi': 'TBD', 'title': 'MFQP', 'id': 31, 'mentor': '<a href="mailto:athityakumar@gmail.com">Athitya Kumar</a>', 'intro_full': 'IITKGP Question paper search', 'btnid': 1031, 'tag': [], 'comm': 'http://metakgp-slack.herokuapp.com/', 'link': 'https://github.com/metakgp/mfqp', 'intro': 'IITKGP Question paper search'},
{'coordi': 'TBD', 'title': 'MobOff', 'id': 32, 'mentor': '<a href="mailto:vermaparth97@gmail.com">Parth Verma</a>', 'intro_full': 'A command line tool to add your music and videos directly to several devices.', 'btnid': 1032, 'tag': ['Python', 'Command-Line', 'Youtube-dl', 'Click'], 'comm': 'https://groups.google.com/forum/#!forum/kwoc17-Parth/', 'link': 'https://github.com/Parth-Vader/MobOff', 'intro': 'A command line tool to add your music and videos directly to several devices.'},
{'coordi': 'TBD', 'title': 'morse-talk', 'id': 33, 'mentor': '<a href="mailto:aribis369@gmail.com">Arindam Biswas</a>', 'intro_full': ' A Python library written for Morse Code', 'btnid': 1033, 'tag': ['Python', 'CLI', 'GUI', 'Tkinter', 'Matplotlib', 'Wave'], 'comm': 'https://gitter.im/OrkoHunter-kwoc/morse-talk', 'link': 'https://github.com/morse-talk/morse-talk', 'intro': ' A Python library written for Morse Code'},
{'coordi': 'TBD', 'title': 'Naarad', 'id': 34, 'mentor': '<a href="mailto:sayan.sinha@iitkgp.ac.in">Sayan Sinha</a>', 'intro_full': 'Aggregating news since antiquity', 'btnid': 1034, 'tag': ['Python', 'scrapping', 'GraphQL', 'API', 'Django'], 'comm': 'https://metakgp.slack.com/', 'link': 'https://github.com/metakgp/naarad-source', 'intro': 'Aggregating news since antiquity'},
{'coordi': 'TBD', 'title': 'NetworkX', 'id': 35, 'mentor': '<a href="mailto:himanshu.mishra.kgp@gmail.com">Himanshu Mishra</a>', 'intro_full': 'NetworkX is a Python package for the Graph Theory and Complex Networks.', 'btnid': 1035, 'tag': ['Python', 'Graph Theory', 'Algorithms', 'Library', 'Package'], 'comm': 'https://groups.google.com/forum/#!forum/networkx-discuss', 'link': 'https://github.com/networkx/networkx', 'intro': 'NetworkX is a Python package for the Graph Theory and Complex Networks.'},
{'coordi': 'TBD', 'title': 'Networkx.rb', 'id': 36, 'mentor': '<a href="mailto:athityakumar@gmail.com">Athitya Kumar</a>', 'intro_full': "A Ruby implementation of Python's well known Graph library : networkx", 'btnid': 1036, 'tag': [], 'comm': 'athityakumar@gmail.com', 'link': 'https://github.com/athityakumar/networkx.rb', 'intro': "A Ruby implementation of Python's well known Graph library : networkx"},
{'coordi': 'TBD', 'title': 'Notes App', 'id': 37, 'mentor': '<a href="mailto:2ankitasahoo13@gmail.com">Ankita Sahoo</a>', 'intro_full': 'An app on PHP to add, delete and edit notes ', 'btnid': 1037, 'tag': ['css', 'javascript', 'PHP', 'ajax'], 'comm': 'https://groups.google.com/forum/#!forum/notes_app', 'link': 'https://github.com/ankita132/notes_app', 'intro': 'An app on PHP to add, delete and edit notes '},
{'coordi': 'TBD', 'title': 'NotiFyre', 'id': 38, 'mentor': '<a href="mailto:hiwarekaustubh@gmail.com">Kaustubh Hiware</a>', 'intro_full': 'A terminal task-notifier that works across different command line emulators', 'btnid': 1038, 'tag': ['Bash', 'Terminal', 'Linux'], 'comm': 'https://www.facebook.com/groups/552015885141292/', 'link': 'https://github.com/kaustubhhiware/NotiFyre', 'intro': 'A terminal task-notifier that works across different command line emulators'},
{'coordi': 'TBD', 'title': 'OpenChat', 'id': 39, 'mentor': '<a href="mailto:ankitjain28may77@gmail.com">Ankit Jain</a>', 'intro_full': 'OpenChat is an Open Source messaging platform where people can send messages to anyone registered to this platform', 'btnid': 1039, 'tag': ['php', 'composer', 'JavaScript', 'ajax', 'websockets', 'html', 'css', 'jquery', 'gulp'], 'comm': 'https://gitter.im/ankitjain28may/openchat', 'link': 'http://github.com/ankitjain28may/openchat', 'intro': 'OpenChat is an Open Source messaging platform where people can send messages to anyone registered to this platform'},
{'coordi': 'TBD', 'title': 'Pacman-lvl1', 'id': 40, 'mentor': '<a href="mailto:harishshivam@gmail.com">Harish Nandan</a>', 'intro_full': 'A very basic android implementation of the Pacman Game.', 'btnid': 1040, 'tag': ['Java', 'Android'], 'comm': 'https://www.facebook.com/groups/127895284549751', 'link': 'https://github.com/harishnandan/Pacman-lvl1', 'intro': 'A very basic android implementation of the Pacman Game.'},
{'coordi': 'TBD', 'title': 'PEP8Speaks', 'id': 41, 'mentor': '<a href="mailto:himanshu.mishra.kgp@gmail.com">Himanshu Mishra</a>', 'intro_full': 'A GitHub integration to automatically review Python code style over Pull Requests', 'btnid': 1041, 'tag': ['Python', 'Backend'], 'comm': 'https://gitter.im/OrkoHunter-kwoc/pep8speaks', 'link': 'https://github.com/OrkoHunter/pep8speaks', 'intro': 'A GitHub integration to automatically review Python code style over Pull Requests'},
{'coordi': 'TBD', 'title': 'PiZilla', 'id': 42, 'mentor': '<a href="mailto:naveenkumarsangi@protonmail.com">Naveen Kumar Sangi</a>', 'intro_full': 'A file sharing web application over local network.', 'btnid': 1042, 'tag': ['javascript', 'reactJS', 'file-uploads'], 'comm': 'https://gitter.im/nit-dgp/general', 'link': 'https://github.com/nitdgpos/pizilla', 'intro': 'A file sharing web application over local network.'},
{'coordi': 'TBD', 'title': 'Play Next', 'id': 43, 'mentor': '<a href="mailto:i.nishantnikhil@gmail.com">Nishant Nikhil</a>', 'intro_full': 'Create a dynamic queue in YouTube.', 'btnid': 1043, 'tag': ['JavaScript', 'YouTube', 'Chrome Extension'], 'comm': 'https://slack.metakgp.org/', 'link': 'https://github.com/nishnik/Play_Next', 'intro': 'Create a dynamic queue in YouTube.'},
{'coordi': 'TBD', 'title': 'Playing with Algorithms', 'id': 44, 'mentor': '<a href="mailto:prateekkol21@gmail.com">Prateek Chanda</a>', 'intro_full': 'A Repository to store implementation of some of the famous Data Structures and Algorithms (mainly in C/C++/Java/Python) for everyone to learn and contribute.', 'btnid': 1044, 'tag': ['Python', 'Algorithms', 'Data Structures', 'C++', 'Java'], 'comm': 'https://gitter.im/codeIIEST/Algorithms', 'link': 'https://github.com/codeIIEST/Algorithms', 'intro': 'A Repository to store implementation of some of the famous Data Structures and Algorithms (mainly in C/C++/Java/Python) for everyone to learn and contribute.'},
{'coordi': 'TBD', 'title': 'PlotIt', 'id': 45, 'mentor': '<a href="mailto:djmdeveloper060796@gmail.com">Deepjyoti Mondal</a>', 'intro_full': 'A terminal and GUI based tool for quick visualisation of mathematical functions.', 'btnid': 1045, 'tag': ['Python', 'Plotting', 'Terminal', 'GUI'], 'comm': 'https://gitter.im/PlotIt/Lobby', 'link': 'https://github.com/NITDgpOS/PlotIt', 'intro': 'A terminal and GUI based tool for quick visualisation of mathematical functions.'},
{'coordi': 'TBD', 'title': 'ProxyMan', 'id': 46, 'mentor': '<a href="mailto:himanshushekharb16@gmail.com">Himanshu Shekhar</a>', 'intro_full': 'Tool to configure system-wide proxy settings in Linux.', 'btnid': 1046, 'tag': ['bash', 'shell', 'linux', 'proxy', 'script'], 'comm': 'https://github.com/himanshub16/ProxyMan/issues', 'link': 'https://github.com/himanshub16/ProxyMan', 'intro': 'Tool to configure system-wide proxy settings in Linux.'},
{'coordi': 'TBD', 'title': 'React Google Map', 'id': 47, 'mentor': '<a href="mailto:2ankitasahoo13@gmail.com">Ankita Sahoo</a>', 'intro_full': 'An app on react where you can upload and view images at various locations on the earth', 'btnid': 1047, 'tag': ['reactjs', 'firebase', 'css'], 'comm': 'https://groups.google.com/forum/#!forum/kwoc17-react_google_map', 'link': 'https://github.com/ankita132/react_google_map', 'intro': 'An app on react where you can upload and view images at various locations on the earth'},
{'coordi': 'TBD', 'title': 'Read-It', 'id': 48, 'mentor': '<a href="mailto:dibyadas998@gmail.com">Dibya Prakash Das</a>', 'intro_full': 'A chrome extension for mail tracking', 'btnid': 1048, 'tag': ['Python', 'Chrome Extension', 'flask', 'gmail'], 'comm': 'https://gitter.im/read-it/', 'link': 'https://github.com/dibyadas/read-it', 'intro': 'A chrome extension for mail tracking'},
{'coordi': 'TBD', 'title': 'Reflexio', 'id': 49, 'mentor': '<a href="mailto:harishshivam@gmail.com">Harish Nandan</a>', 'intro_full': 'A web game based on reflection.', 'btnid': 1049, 'tag': ['CSS', 'Javascript', 'HTML'], 'comm': 'https://www.facebook.com/groups/136133120486393/', 'link': 'https://github.com/harishnandan/reflexio', 'intro': 'A web game based on reflection.'},
{'coordi': 'TBD', 'title': 'Relative Date: Reverse', 'id': 50, 'mentor': '<a href="mailto:kannan.siddharth12@gmail.com">Siddharth Kannan</a>', 'intro_full': 'Convert relative dates back to a date representation: 3 days ago => A date object for today - 3 days', 'btnid': 1050, 'tag': ['javascript', 'datetime', 'utility', 'tools', 'nodejs', 'NPM', 'module'], 'comm': 'https://groups.google.com/forum/#!forum/kwoc-2017-discussion-icyflame', 'link': 'https://github.com/icyflame/relative-date-reverse/issues', 'intro': 'Convert relative dates back to a date representation: 3 days ago => A date object for today - 3 days'},
{'coordi': 'TBD', 'title': 'RRT', 'id': 51, 'mentor': '<a href="mailto:sayan.sinha@iitkgp.ac.in">Sayan Sinha</a>', 'intro_full': 'Collection of variants of RRT Path Planners', 'btnid': 1051, 'tag': ['C++', 'AI', 'Path planning'], 'comm': 'Gitter', 'link': 'https://github.com/KgpKubs/RRT', 'intro': 'Collection of variants of RRT Path Planners'},
{'coordi': 'TBD', 'title': 'SafeAndroid', 'id': 52, 'mentor': '<a href="mailto:nirmalsarswat400@gmail.com">Nirmal Sarswat</a>', 'intro_full': "In Android their are many privacy issues, every time some application fetch your details that you don't want to let ope to anyone. To ensure that your data is private I have the project in which we have to fake all possible bugs of privacy in Android and fix them into a small android app. Every time when ever some data travel from one end of user to some where else, we will notify about the privacy.", 'btnid': 1052, 'tag': ['Android ', 'Security', 'Network'], 'comm': 'https://kwoc.slack.com', 'link': 'https://github.com/vivonk/SaveMore', 'intro': "In Android their are many privacy issues, every time some application fetch your details that you don't want to let ope to anyone. To ensure that your data i..."},
{'coordi': 'TBD', 'title': 'Sangita', 'id': 53, 'mentor': '<a href="mailto:samriddhidjokestersinha@gmail.com">Samriddhi Sinha</a>', 'intro_full': 'A Natural Language Processing Toolkit for Indian Lamguages that utilize LSTMs for POS tagging.', 'btnid': 1053, 'tag': ['Python', 'NLP', 'Machine Learning', 'Scraping'], 'comm': 'https://groups.google.com/d/forum/sangitanlp', 'link': 'github.com/djokester/sangita', 'intro': 'A Natural Language Processing Toolkit for Indian Lamguages that utilize LSTMs for POS tagging.'},
{'coordi': 'TBD', 'title': 'SciRuby-examples', 'id': 54, 'mentor': '<a href="mailto:dhruvgirishapte@gmail.com">Dhruv Apte and Athitya Kumar</a>', 'intro_full': "Sciruby-examples is a project that lists out tutorials in IRuby notebooks for machine learning and NLP. This is a 'first of its kind' repository on GitHub. Various ML and NLP algorithms will be implemented in ruby by contributors which can help newbies in machine learning ", 'btnid': 1054, 'tag': ['Ruby', 'machine learning', 'natural language processing', 'IRuby'], 'comm': 'https://groups.google.com/forum/#!forum/sciruby-examples-discuss', 'link': 'https://github.com/the-ethan-hunt/sciruby-examples', 'intro': "Sciruby-examples is a project that lists out tutorials in IRuby notebooks for machine learning and NLP. This is a 'first of its kind' repository on GitHub. V..."},
{'coordi': 'TBD', 'title': 'Scrapy Bench Speedcenter', 'id': 55, 'mentor': '<a href="mailto:vermaparth97@gmail.com">Parth Verma</a>', 'intro_full': 'A Django web app for collecting various results for scrapy-bench and uploading it to web.', 'btnid': 1055, 'tag': ['Python', 'Scrapy', 'Scraping', 'Benchmarking', 'Django'], 'comm': 'https://groups.google.com/forum/#!forum/kwoc17-Parth/', 'link': 'https://github.com/scrapy/scrapy-bench-speedcenter', 'intro': 'A Django web app for collecting various results for scrapy-bench and uploading it to web.'},
{'coordi': 'TBD', 'title': 'Scrapy-Bench', 'id': 56, 'mentor': '<a href="mailto:vermaparth97@gmail.com">Parth Verma</a>', 'intro_full': 'A command-line interface for bench-marking Scrapy, that reflects real-world usage.', 'btnid': 1056, 'tag': ['Python', 'Click', 'Scrapy', 'Scraping', 'Benchmarking', 'Memory-Profiling', 'Command-Line'], 'comm': 'https://groups.google.com/forum/#!forum/kwoc17-Parth/', 'link': 'https://github.com/scrapy/scrapy-bench', 'intro': 'A command-line interface for bench-marking Scrapy, that reflects real-world usage.'},
{'coordi': 'TBD', 'title': 'SecureSnaps', 'id': 57, 'mentor': '<a href="mailto:aniqrah@gmail.com">Aniq Ur Rahman</a>', 'intro_full': 'Image Codec using Private-key cryptography ', 'btnid': 1057, 'tag': ['Python', 'Image', 'codec', 'encryption', 'cryptography'], 'comm': 'https://gitter.im/SecureSnaps55/Lobby', 'link': 'https://github.com/NITDgpOS/SecureSnaps', 'intro': 'Image Codec using Private-key cryptography '},
{'coordi': 'TBD', 'title': 'Snakes', 'id': 58, 'mentor': '<a href="mailto:sayan.sinha@iitkgp.ac.in">Sayan Sinha</a>', 'intro_full': 'A simple game of snakes implemented in C++ and OpenCV', 'btnid': 1058, 'tag': ['C++', 'Gaming', 'OpenCV'], 'comm': 'Gitter', 'link': 'https://github.com/americast/Snakes', 'intro': 'A simple game of snakes implemented in C++ and OpenCV'},
{'coordi': 'TBD', 'title': 'Stereo Camera Calibration', 'id': 59, 'mentor': '<a href="mailto:ragnarok0211@gmail.com">Sourish Ghosh</a>', 'intro_full': 'Often for complicated tasks in computer vision it is required that a camera be calibrated. Camera calibration is a necessary step in 3D computer vision in order to extract metric information from 2D images. Stereo calibration is used to find the geometric transformations between two cameras, and the relationship between two image projections of a particular 3D scene. More details here: http://sourishghosh.com/2016/stereo-calibration-cpp-opencv/', 'btnid': 1059, 'tag': ['Camera Calibration', 'Computer Vision', 'C++', 'OpenCV'], 'comm': 'https://cvkgp.slack.com', 'link': 'https://github.com/sourishg/stereo-calibration', 'intro': 'Often for complicated tasks in computer vision it is required that a camera be calibrated. Camera calibration is a necessary step in 3D computer vision in or...'},
{'coordi': 'TBD', 'title': 'SunPy', 'id': 60, 'mentor': '<a href="mailto:nitin.iitkgp23@gmail.com">Nitin Choudhary</a>', 'intro_full': 'SunPy is a community-developed free and open-source software package for solar physics. It aims to be provide a comprehensive data analysis environment that allows researchers within the field of solar physics to carry out their tasks with the minimal effort.  SunPy is written using the Python programming language and is build upon the scientific Python environment which includes several core packages such as NumPy, SciPy, Matplotlib and Pandas. Since SunPy deals with key astrophysical concepts, its development is closely associated with that of Astropy, which is a fundamental package within the Python astronomy ecosystem.', 'btnid': 1060, 'tag': ['Python', 'astronomy', 'sun', 'gsoc', 'scientific'], 'comm': 'https://riot.im/app/#/room/#sunpy-kwoc:matrix.org', 'link': 'https://github.com/sunpy/sunpy', 'intro': 'SunPy is a community-developed free and open-source software package for solar physics. It aims to be provide a comprehensive data analysis environment that ...'},
{'coordi': 'TBD', 'title': 'SymPy', 'id': 61, 'mentor': '<a href="mailto:shivamvats.iitkgp@gmail.com">Shivam Vats</a>', 'intro_full': 'A Python Library for symbolic Maths.', 'btnid': 1061, 'tag': ['Python', 'Maths ', 'Computation'], 'comm': 'https://gitter.im/sympy/sympy', 'link': 'https://github.com/sympy/sympy', 'intro': 'A Python Library for symbolic Maths.'},
{'coordi': 'TBD', 'title': 'TalkToMe', 'id': 62, 'mentor': '<a href="mailto:apoorvakumar169@gmail.com">Apoorva Kumar</a>', 'intro_full': 'Siri inspired chatbot. A beginner friendly project.', 'btnid': 1062, 'tag': ['Python', 'PyAiml', 'Ros'], 'comm': 'https://groups.google.com/forum/#!forum/talktomebot', 'link': 'https://github.com/rava-dosa/TalkToMe', 'intro': 'Siri inspired chatbot. A beginner friendly project.'},
{'coordi': 'TBD', 'title': 'timetable', 'id': 63, 'mentor': '<a href="mailto:athityakumar@gmail.com">Athitya Kumar</a>', 'intro_full': 'A tool to display the timetable. A Terminal timetable, if you will.', 'btnid': 1063, 'tag': [], 'comm': 'athityakumar@gmail.com', 'link': 'https://github.com/athityakumar/timetable', 'intro': 'A tool to display the timetable. A Terminal timetable, if you will.'},
{'coordi': 'TBD', 'title': 'Titanic Survival Exploration', 'id': 64, 'mentor': '<a href="mailto:prateekkol21@gmail.com">Prateek Chanda</a>', 'intro_full': 'It is a project on Machine Learning which aims to predict survival of passengers on Titanic. Contributing to this will aim to create a concrete understanding of ML for beginners and also help them go forward in Open Source', 'btnid': 1064, 'tag': ['Python', 'Machine Learning', 'ipython notebook', 'statistical analysis'], 'comm': 'https://titanic-survival.slack.com/', 'link': 'https://github.com/prateekiiest/titanic_survival_exploration', 'intro': 'It is a project on Machine Learning which aims to predict survival of passengers on Titanic. Contributing to this will aim to create a concrete understanding...'},
{'coordi': 'TBD', 'title': 'tvseries', 'id': 65, 'mentor': '<a href="mailto:athityakumar@gmail.com">Athitya Kumar</a>', 'intro_full': "TV Series is a tool that scrapes Episode Synopsis' of popular TV Series' from websites like Wikipedia / IMDb and show in one place with a user-friendly navigation UI.", 'btnid': 1065, 'tag': [], 'comm': 'athityakumar@gmail.com', 'link': 'https://github.com/athityakumar/tvseries', 'intro': "TV Series is a tool that scrapes Episode Synopsis' of popular TV Series' from websites like Wikipedia / IMDb and show in one place with a user-friendly navig..."},
{'coordi': 'TBD', 'title': 'Urban Robot', 'id': 66, 'mentor': '<a href="mailto:mubarishassannk@gmail.com">Mubaris NK</a>', 'intro_full': 'Reddit bot which replies to sarcastic comments', 'btnid': 1066, 'tag': ['Python', 'Machine Learning', 'NLP', 'Natural Language Processing'], 'comm': 'https://gitter.im/urban-robot/Lobby', 'link': 'https://github.com/mubaris/urban-robot', 'intro': 'Reddit bot which replies to sarcastic comments'},
{'coordi': 'TBD', 'title': 'Voice Calculator', 'id': 67, 'mentor': '<a href="mailto:mayank.jindal5@gmail.com">Mayank Jindal</a>', 'intro_full': 'The goal of this project is to build a calculator which has speech reconition ability for input.', 'btnid': 1067, 'tag': [], 'comm': 'https://gitter.im/VoiceCalculator', 'link': 'https://github.com/mayank-kgp/VoiceCalculator', 'intro': 'The goal of this project is to build a calculator which has speech reconition ability for input.'},
{'coordi': 'TBD', 'title': 'Weed', 'id': 68, 'mentor': '<a href="mailto:apoorvakumar169@gmail.com">Apoorva Kumar</a>', 'intro_full': 'A lan based video chat based on transmission control protocol', 'btnid': 1068, 'tag': [], 'comm': 'https://groups.google.com/forum/#!forum/weedongit', 'link': 'https://github.com/rava-dosa/Weed', 'intro': 'A lan based video chat based on transmission control protocol'},
{'coordi': 'TBD', 'title': 'Weed', 'id': 69, 'mentor': '<a href="mailto:apoorvakumar169@gmail.com">Apoorva Kumar</a>', 'intro_full': 'A video chat for LAN based on tcp. Beginner friendly project', 'btnid': 1069, 'tag': ['C++', 'Socket', 'OpenCv'], 'comm': 'https://groups.google.com/forum/#!forum/weedongit', 'link': 'https://github.com/rava-dosa/Weed', 'intro': 'A video chat for LAN based on tcp. Beginner friendly project'},
{'coordi': 'TBD', 'title': 'Whats-in-the-news-GEEK', 'id': 70, 'mentor': '<a href="mailto:aribis369@gmail.com">Arindam Biswas</a>', 'intro_full': 'A CLI tool to bring all the latest news to your terminal.', 'btnid': 1070, 'tag': ['Python', 'CLI', 'API'], 'comm': 'https://groups.google.com/forum/#!forum/whats-in-the-news-geek', 'link': 'https://github.com/aribis369/Whats-in-the-news-GEEK', 'intro': 'A CLI tool to bring all the latest news to your terminal.'},
{'coordi': 'TBD', 'title': 'Youtube Data Collector', 'id': 71, 'mentor': '<a href="mailto:vermaparth97@gmail.com">Parth Verma</a>', 'intro_full': 'Searches for recent Youtube videos opened and displays them in a list form.', 'btnid': 1071, 'tag': ['Chrome', 'Extension', 'JavaScript', 'Data-Analytics', 'Databases'], 'comm': 'https://groups.google.com/forum/#!forum/kwoc17-Parth/', 'link': 'https://github.com/Parth-Vader/YoutubeDataCollector', 'intro': 'Searches for recent Youtube videos opened and displays them in a list form.'},
{'coordi': 'TBD', 'title': 'Youtube Fast Playlist', 'id': 72, 'mentor': '<a href="mailto:mudeshi1209@gmail.com">Meet Udeshi</a>', 'intro_full': 'If you use YouTube to listen to music constantly while working or studying, this WebApp is for you. It works like a Music Player for YouTube, where you can rapidly create a playlist by searching videos and adding them. Fast re-ordering, Repeat All, Repeat One, Shuffle features make it feel like a music player.', 'btnid': 1072, 'tag': ['javascript', 'web-app', ' youtube-api', 'jquery'], 'comm': 'https://gitter.im/fast-playlist', 'link': 'https://github.com/udiboy1209/fast_playlist', 'intro': 'If you use YouTube to listen to music constantly while working or studying, this WebApp is for you. It works like a Music Player for YouTube, where you can r...'},

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

    // var searchInput = document.querySelector('.searchTerm')
    // searchInput.addEventListener('keyup', displayMatches);
    //setup before functions
    var typingTimer;                //timer identifier
    var doneTypingInterval = 1000;  //if user waits for 1 second

    //on keyup, start the countdown
    searchInput.on('keyup', function () {
      clearTimeout(typingTimer);
      typingTimer = setTimeout(displayMatches, doneTypingInterval);
    });

    //on keydown, clear the countdown
    searchInput.on('keydown', function () {
      clearTimeout(typingTimer);
    });


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
             <a href="#" onclick="return false;" class="button" id="'+v.btnid+'" class="modal-btn">Details</a>\
         </div>\
            </div>\
          </div>\
          <div class="modal" id="'+v.id+'">\
            <div class="modal-content">\
              <div class="modal-header">\
                <h3 class="header-title"><i class="icon-desktop i-extra-small-box i-rounded i-circled"></i>'+v.title+'</h3>\
                <div class="close fa fa-close"></div>\
              </div>\
              <div class="modal-body">\
                <p>'+v.intro_full+'</p>\
                <ul class="tags custom"><span class="icon-pricetags i-extra-small-box"></span>'+list+'\
                </ul>\
                <ul class="qwe">\
                <span>Mentors : </span>\
                  <li>\
                    <div class="tag">'+v.mentor+'</div>\
                  </li>\
                </ul>\
                <ul class="qwe">\
                <span>Coordinator : </span>\
                  <li>\
                    <div class="tag">'+v.coordi+'</div>\
                  </li>\
              </ul>\
               <ul class="qwe">\
                <span>Communication channel : </span>\
                  <li>\
                    <div class="tag">'+v.comm+'</div>\
                  </li>\
                </ul>\
              </div>\
              <div class="modal-footer">\
                 <a href="'+v.link+'" target="_blank" " class="highlight-button-dark btn btn-round button xs-margin-bottom-five">\
                 </i><span>View Project</span></a>\
              </div>\
            </div>\
          </div>';

        $('.container2').html(str);

      });
      var btnno, no;
      var modBtn, modal, close,modContent;
      $('.button').click(function() {
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
    }

    displayRes();


});
