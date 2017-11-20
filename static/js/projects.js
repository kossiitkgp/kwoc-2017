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
      {'intro_full': 'Artificial Neural Network from scratch in Julia', 'title': 'ANN', 'mentor_email': 'sayan.sinha@iitkgp.ac.in', 'intro': 'Artificial Neural Network from scratch in Julia', 'tag': ['Julia', 'ANN', 'DL', 'ML'], 'id': 1, 'mentor': 'Sayan Sinha', 'comm': 'https://gitter.im/ANN-julia', 'btnid': 1001, 'link': 'https://github.com/americast/ANN', 'img': 'https://github.com/americast.png?size=50'},
{'intro_full': 'Air Hockey game created using pygame ', 'title': 'AirHockey', 'mentor_email': 'aniqrah@gmail.com', 'intro': 'Air Hockey game created using pygame ', 'tag': ['Python', 'AI', 'Game', 'Pygame', 'Physics'], 'id': 2, 'mentor': 'Aniq Ur Rahman', 'comm': 'https://gitter.im/AirHockey55/Lobby', 'btnid': 1002, 'link': 'https://github.com/NITDgpOS/AirHockey', 'img': 'https://github.com/NITDgpOS.png?size=50'},
{'intro_full': 'An all-in-one inventory and accounts solution for Chemist shops (both wholesale and retail) as per new Indian taxation standards.', 'title': 'Alchem Desktop', 'mentor_email': 'techfreakworm@gmail.com', 'intro': 'An all-in-one inventory and accounts solution for Chemist shops (both wholesale and retail) as per new Indian taxation standards.', 'tag': ['Java', 'JavaFX', 'XML', 'CSS', 'PostgreSQL'], 'id': 3, 'mentor': 'Mayank Gupta', 'comm': 'https://join.slack.com/t/alchemsynergy/shared_invite/enQtMjU0NjUwMzAyNTgzLTM0OTNlMTg3ZDk1MmQ4ODdkYzM2YTA3MTE2MGM4ZTQ1ODU5ZTc3YTA4ODY5MWI2ZTAzZDM5MjEzOGM3N2FhYjY', 'btnid': 1003, 'link': 'https://github.com/alchemsynergy/alchem', 'img': 'https://github.com/alchemsynergy.png?size=50'},
{'intro_full': 'An architecture automation tool that converts a pencil drawn sketch to a rendered plan instantly', 'title': 'Archdraw', 'mentor_email': 'ashris@mit.edu', 'intro': 'An architecture automation tool that converts a pencil drawn sketch to a rendered plan instantly', 'tag': ['javascript', 'p5js', 'design', 'image processing', 'computer vision'], 'id': 4, 'mentor': 'Ashris Choudhury', 'comm': 'https://www.facebook.com/Ashris', 'btnid': 1004, 'link': 'https://github.com/iashris/archdraw', 'img': 'https://github.com/iashris.png?size=50'},
{'intro_full': ' A curated list of adages, psychological syndromes and behaviour explaining aphorisms. ', 'title': 'Awesome Social Science', 'mentor_email': 'kannan.siddharth12@gmail.com', 'intro': ' A curated list of adages, psychological syndromes and behaviour explaining aphorisms. ', 'tag': ['social science', 'psychology', 'syndromes', 'behavior', 'awesome-list', 'non programming'], 'id': 5, 'mentor': 'Siddharth Kannan', 'comm': 'https://groups.google.com/forum/#!forum/kwoc-2017-discussion-icyflame', 'btnid': 1005, 'link': 'https://github.com/icyflame/awesome-social-science', 'img': 'https://github.com/icyflame.png?size=50'},
{'intro_full': 'B.E.N.J.I., short for Brilliant and Efficient non-Javascript enabled Intelligence is a digital assistant that can help do several regular tasks on the laptop. Its numerous tasks include searching on Google, Wiki search, opening any Webpage, fetching news from several news agencies. The assistant can be activated and operated using voice commands. The assistant is yet undergoing changes for operating in a Linux and MacOS operating system', 'title': 'B.E.N.J.I.', 'mentor_email': 'dhruvgirishapte@gmail.com', 'intro': 'B.E.N.J.I., short for Brilliant and Efficient non-Javascript enabled Intelligence is a digital assistant that can help do several regular tasks on the laptop...', 'tag': ['Python', 'digital-assistant', 'speech-to-text', 'speech-recognition'], 'id': 6, 'mentor': 'Dhruv Apte', 'comm': 'https://groups.google.com/forum/#!forum/benji-discussion', 'btnid': 1006, 'link': 'https://github.com/the-ethan-hunt/B.E.N.J.I.', 'img': 'https://github.com/the-ethan-hunt.png?size=50'},
{'intro_full': "Find out how long it takes you to solve the Rubik's Cube: without leaving your command line", 'title': 'CLI Cube Timer', 'mentor_email': 'kannan.siddharth12@gmail.com', 'intro': "Find out how long it takes you to solve the Rubik's Cube: without leaving your command line", 'tag': ['javascript', 'tools', 'nodejs', 'NPM', 'module', "rubik's cube", 'timer', 'state machine'], 'id': 7, 'mentor': 'Siddharth Kannan', 'comm': 'https://groups.google.com/forum/#!forum/kwoc-2017-discussion-icyflame', 'btnid': 1007, 'link': 'https://github.com/icyflame/cli-cube-timer/issues', 'img': 'https://github.com/icyflame.png?size=50'},
{'intro_full': 'A scratch implementation of Convolutional Neural Network in python without the use of any deep learning library tested over data sets like CIFAR-10 for Object Detection & MNIST for Digit Recognition', 'title': 'CNN-from-scratch', 'mentor_email': 'zishansami102@gmail.com', 'intro': 'A scratch implementation of Convolutional Neural Network in python without the use of any deep learning library tested over data sets like CIFAR-10 for Objec...', 'tag': ['Machine Learning', 'Deep Learning', 'Digit Recognition', 'Python', 'Flask', 'Javascript', 'HTML'], 'id': 8, 'mentor': 'Zishan Sami', 'comm': 'https://groups.google.com/forum/#!forum/cnn-from-scratch', 'btnid': 1008, 'link': 'https://github.com/zishansami102/CNN-from-Scratch', 'img': 'https://github.com/zishansami102.png?size=50'},
{'intro_full': 'Implementation of Segnet on a cascading architecture', 'title': 'Cascade Segnet', 'mentor_email': 'sayan.sinha@iitkgp.ac.in', 'intro': 'Implementation of Segnet on a cascading architecture', 'tag': ['Python', 'AI', 'CNN', 'ML', 'DL', 'Encoder-decoder'], 'id': 9, 'mentor': 'Sayan Sinha', 'comm': 'https://gitter.im/Cascade-Segnet-TF', 'btnid': 1009, 'link': 'https://github.com/americast/cascade-segnet-tf', 'img': 'https://github.com/americast.png?size=50'},
{'intro_full': 'This repository contains a curated list of some of the awesome small projects made in Python that you can code away this summer.  It includes analysis of different Python modules, a deep analysis of the Python statistics modules and dataframes like Pandas.  It has some projects on classification, correlation and regression which are the fundamental building blocks of Machine Learning and Neural Networks. It also involves projects on Desktop Application and simple games. This repository hosts to 40 participants during Hacktoberfest', 'title': 'Code Sleep Python', 'mentor_email': 'prateekkol21@gmail.com', 'intro': 'This repository contains a curated list of some of the awesome small projects made in Python that you can code away this summer.  It includes analysis of dif...', 'tag': ['Python', 'Games', 'Machine Learning', 'Algorithms ', 'Desktop Applications'], 'id': 10, 'mentor': 'Prateek Chanda', 'comm': 'https://code-sleep-python.slack.com/threads/', 'btnid': 1010, 'link': 'https://github.com/prateekiiest/Code-Sleep-Python', 'img': 'https://github.com/prateekiiest.png?size=50'},
{'intro_full': 'CLI for getting update of live cricket matches', 'title': 'CrickFev', 'mentor_email': 'shubhamsipah00@gmail.com', 'intro': 'CLI for getting update of live cricket matches', 'tag': ['Python', 'Scraping', 'click', 'cli'], 'id': 11, 'mentor': 'shubham maddhashiya', 'comm': 'https://join.slack.com/t/crickkwoc/shared_invite/enQtMjc0NDUyNTU3NzE1LWFmOGI5MDBhMzBmNmJjMTM0ZjhjMTBhNTIzY2VhNTI5N2ZkNjVhYTNkZTUyNGMyNmMwMGE0NjY2OGM1YmY4NDg', 'btnid': 1011, 'link': 'https://github.com/sipah00/CrickFev', 'img': 'https://github.com/sipah00.png?size=50'},
{'intro_full': 'Using Deep Learning to predict properties of Chemicals', 'title': 'DeepChem', 'mentor_email': 'avijitg22@gmail.com', 'intro': 'Using Deep Learning to predict properties of Chemicals', 'tag': ['Python', 'Scraping', 'Tensorflow', 'Deep Learning', 'Neural Network', 'Data Collection', 'Word2Vec'], 'id': 12, 'mentor': 'Avijit Ghosh', 'comm': 'https://gitter.im/Deep-Chem', 'btnid': 1012, 'link': 'https://github.com/AvijitGhosh82/DeepChem', 'img': 'https://github.com/AvijitGhosh82.png?size=50'},
{'intro_full': 'A program which accepts the id of a Facebook page and transforms into a table of the latest posts and comments.', 'title': 'FB-Spider', 'mentor_email': 'vermaparth97@gmail.com', 'intro': 'A program which accepts the id of a Facebook page and transforms into a table of the latest posts and comments.', 'tag': ['Python', 'Spider', 'Facebook-API', 'Graph-API'], 'id': 13, 'mentor': 'Parth Verma', 'comm': 'https://join.slack.com/t/kwoc2017-parth/shared_invite/enQtMjc1OTU3MDUwNzc0LTNkNzQzN2U5NzI0ZTNkM2I5MGM5MDIyYTYxMzFhNWYzNWYwMDIzMjNmYjM2MTA1NDc1NWU2Yjc0ZTYxNGZmNTA', 'btnid': 1013, 'link': 'https://github.com/Parth-Vader/FB-Spider', 'img': 'https://github.com/Parth-Vader.png?size=50'},
{'intro_full': 'Gets your timetable from ERP and adds it to your Google Calendar or gives you an ICS file which you can add in any common calendar application.', 'title': 'GYFT (Get Your Freaking Timetable)', 'mentor_email': 'i.nishantnikhil@gmail.com', 'intro': 'Gets your timetable from ERP and adds it to your Google Calendar or gives you an ICS file which you can add in any common calendar application.', 'tag': ['Python', 'Scraping', 'Google API', 'ERP'], 'id': 14, 'mentor': 'Nishant Nikhil', 'comm': 'https://slack.metakgp.org/', 'btnid': 1014, 'link': 'https://github.com/metakgp/gyft', 'img': 'https://github.com/metakgp.png?size=50'},
{'intro_full': 'A free, open-source, extensible and cross system for creating rewards, loots and drops to be used in games built on the Unity engine.', 'title': 'Game Rewards System', 'mentor_email': 'albela.amrit@gmail.com', 'intro': 'A free, open-source, extensible and cross system for creating rewards, loots and drops to be used in games built on the Unity engine.', 'tag': ['Gaming'], 'id': 15, 'mentor': 'Amrit Choudhary', 'comm': 'https://groups.google.com/d/forum/game-rewards-system-channel', 'btnid': 1015, 'link': 'https://github.com/amrit-choudhary/UnityChestDropSystem', 'img': 'https://github.com/amrit-choudhary.png?size=50'},
{'intro_full': 'Implement GANs in Pytorch and Basic Numpy from the starter code', 'title': 'Generative Adversarial Networks(GANs)', 'mentor_email': 'mail2sangeetmishra@gmail.com', 'intro': 'Implement GANs in Pytorch and Basic Numpy from the starter code', 'tag': ['Python', 'pytorch', 'machine learning'], 'id': 16, 'mentor': 'Sangeet Kumar Mishra', 'comm': 'https://kwoc-17.slack.com/', 'btnid': 1016, 'link': 'https://github.com/sangeet259/Generative_Adversarial_Networks', 'img': 'https://github.com/sangeet259.png?size=50'},
{'intro_full': 'Git - fast, scalable, distributed revision control system', 'title': 'Git', 'mentor_email': 'pranit.bauva@gmail.com', 'intro': 'Git - fast, scalable, distributed revision control system', 'tag': ['C', 'Shell'], 'id': 17, 'mentor': 'Pranit Bauva', 'comm': 'Mailing lists (git@vger.kernel.org)', 'btnid': 1017, 'link': 'https://github.com/git/git/', 'img': 'https://github.com/git.png?size=50'},
{'intro_full': 'A community clusters detection app that can take an edgelist as an input and generate an interactive force directed graph and different information like the degree centrality, betweenness centrality and clustering co-efficients are displayed.', 'title': 'GraphClusters', 'mentor_email': 'dibyadas998@gmail.com', 'intro': 'A community clusters detection app that can take an edgelist as an input and generate an interactive force directed graph and different information like the ...', 'tag': ['d3.js', 'graph', 'networkx', 'python', 'javascript'], 'id': 18, 'mentor': 'Dibya Prakash Das', 'comm': 'https://gitter.im/GraphClusters/Lobby', 'btnid': 1018, 'link': 'https://github.com/dibyadas/d3-force-directed-graph/', 'img': 'https://github.com/dibyadas.png?size=50'},
{'intro_full': 'It helps anyone see paths drawn from different path planners and also tune the parameters Edit Add topics', 'title': 'Gui-PathPlanners', 'mentor_email': 'ashishkg0022@gmail.com', 'intro': 'It helps anyone see paths drawn from different path planners and also tune the parameters Edit Add topics', 'tag': ['PyQt4 ', 'RRTs', 'ROS'], 'id': 19, 'mentor': 'Ashish Kumar Gaurav', 'comm': 'https://groups.google.com/forum/#!forum/gui-pathplanner', 'btnid': 1019, 'link': 'https://github.com/ashishkg0022/Gui-PathPlanners', 'img': 'https://github.com/ashishkg0022.png?size=50'},
{'intro_full': 'It was Idea to connect professor to  students via showing their availability in their office.  We have to make a firebase database which will be update the values in the list items (Names) shown in the app.', 'title': 'Hackathon', 'mentor_email': 'nishant.sikarwar007@gmail.com', 'intro': 'It was Idea to connect professor to  students via showing their availability in their office.  We have to make a firebase database which will be update the v...', 'tag': ['Android', 'Databases'], 'id': 20, 'mentor': 'Nishant Singh Sikarwar', 'comm': 'nishant.sikarwar007@gmail.com', 'btnid': 1020, 'link': 'https://github.com/pv-912/Hackathon', 'img': 'https://github.com/pv-912.png?size=50'},
{'intro_full': 'A traditional hangman game build using React.', 'title': 'Hangman React Game', 'mentor_email': 'dhiraj@iitkgp.ac.in', 'intro': 'A traditional hangman game build using React.', 'tag': [' Web Development', ' JavaScript', 'CSS', 'ReactJS'], 'id': 21, 'mentor': 'Dhiraj Kumar', 'comm': 'https://www.facebook.com/groups/166681887253832', 'btnid': 1021, 'link': 'https://github.com/djbarnwal/hangman', 'img': 'https://github.com/djbarnwal.png?size=50'},
{'intro_full': 'IITKGP Question paper search', 'title': 'MFQP', 'mentor_email': 'athityakumar@gmail.com', 'intro': 'IITKGP Question paper search', 'tag': [], 'id': 22, 'mentor': 'Athitya Kumar', 'comm': 'http://metakgp-slack.herokuapp.com/', 'btnid': 1022, 'link': 'https://github.com/metakgp/mfqp', 'img': 'https://github.com/metakgp.png?size=50'},
{'intro_full': "This is a simple python template that uses Flask to build a webhook for Facebook's Messenger Bot API. The aim is to build interactive chatbot with some added features of virtual assistant.", 'title': 'Messenger Bot', 'mentor_email': 'vernwalrahul@gmail.com', 'intro': "This is a simple python template that uses Flask to build a webhook for Facebook's Messenger Bot API. The aim is to build interactive chatbot with some added...", 'tag': ['Python', 'NLP', 'APIs', 'Virtual Assistant'], 'id': 23, 'mentor': 'Rahul Vernwal', 'comm': 'https://gitter.im/my-messenger-bot/Lobby', 'btnid': 1023, 'link': 'https://github.com/vernwalrahul/my-messenger-bot', 'img': 'https://github.com/vernwalrahul.png?size=50'},
{'intro_full': 'Self-sufficient docker configuration for running the Metakgp Mediawiki instance', 'title': 'Metakgp Wiki: Dockerized for fun', 'mentor_email': 'kannan.siddharth12@gmail.com', 'intro': 'Self-sufficient docker configuration for running the Metakgp Mediawiki instance', 'tag': ['Docker', 'PHP', 'SysAdmin', 'Linux'], 'id': 24, 'mentor': 'Siddharth Kannan', 'comm': 'https://slack.metakgp.org/', 'btnid': 1024, 'link': 'https://github.com/metakgp/metakgp-wiki', 'img': 'https://github.com/metakgp.png?size=50'},
{'intro_full': 'A command line tool to add your music and videos directly to several devices.', 'title': 'MobOff', 'mentor_email': 'vermaparth97@gmail.com', 'intro': 'A command line tool to add your music and videos directly to several devices.', 'tag': ['Python', 'Command-Line', 'Youtube-dl', 'Click'], 'id': 25, 'mentor': 'Parth Verma', 'comm': 'https://join.slack.com/t/kwoc2017-parth/shared_invite/enQtMjc1OTU3MDUwNzc0LTNkNzQzN2U5NzI0ZTNkM2I5MGM5MDIyYTYxMzFhNWYzNWYwMDIzMjNmYjM2MTA1NDc1NWU2Yjc0ZTYxNGZmNTA', 'btnid': 1025, 'link': 'https://github.com/Parth-Vader/MobOff', 'img': 'https://github.com/Parth-Vader.png?size=50'},
{'intro_full': 'Aggregating news since antiquity', 'title': 'Naarad', 'mentor_email': 'sayan.sinha@iitkgp.ac.in', 'intro': 'Aggregating news since antiquity', 'tag': ['Python', 'scrapping', 'GraphQL', 'API', 'Django'], 'id': 26, 'mentor': 'Sayan Sinha', 'comm': 'https://slack.metakgp.org/', 'btnid': 1026, 'link': 'https://github.com/metakgp/naarad-source', 'img': 'https://github.com/metakgp.png?size=50'},
{'intro_full': 'NetworkX is a Python package for the Graph Theory and Complex Networks.', 'title': 'NetworkX', 'mentor_email': 'himanshu.mishra.kgp@gmail.com', 'intro': 'NetworkX is a Python package for the Graph Theory and Complex Networks.', 'tag': ['Python', 'Graph Theory', 'Algorithms', 'Library', 'Package'], 'id': 27, 'mentor': 'Himanshu Mishra', 'comm': 'https://groups.google.com/forum/#!forum/networkx-discuss', 'btnid': 1027, 'link': 'https://github.com/networkx/networkx', 'img': 'https://github.com/networkx.png?size=50'},
{'intro_full': "A Ruby implementation of Python's well known Graph library : networkx", 'title': 'Networkx.rb', 'mentor_email': 'athityakumar@gmail.com', 'intro': "A Ruby implementation of Python's well known Graph library : networkx", 'tag': [], 'id': 28, 'mentor': 'Athitya Kumar', 'comm': 'athityakumar@gmail.com', 'btnid': 1028, 'link': 'https://github.com/athityakumar/networkx.rb', 'img': 'https://github.com/athityakumar.png?size=50'},
{'intro_full': 'An app on PHP to add, delete and edit notes ', 'title': 'Notes App', 'mentor_email': '2ankitasahoo13@gmail.com', 'intro': 'An app on PHP to add, delete and edit notes ', 'tag': ['css', 'javascript', 'PHP', 'ajax'], 'id': 29, 'mentor': 'Ankita Sahoo', 'comm': 'https://groups.google.com/forum/#!forum/notes_app', 'btnid': 1029, 'link': 'https://github.com/ankita132/notes_app', 'img': 'https://github.com/ankita132.png?size=50'},
{'intro_full': 'A terminal task-notifier that works across different command line emulators', 'title': 'NotiFyre', 'mentor_email': 'hiwarekaustubh@gmail.com', 'intro': 'A terminal task-notifier that works across different command line emulators', 'tag': ['Bash', 'Terminal', 'Linux'], 'id': 30, 'mentor': 'Kaustubh Hiware', 'comm': 'https://www.facebook.com/groups/552015885141292/', 'btnid': 1030, 'link': 'https://github.com/kaustubhhiware/NotiFyre', 'img': 'https://github.com/kaustubhhiware.png?size=50'},
{'intro_full': 'OpenChat is an Open Source messaging platform where people can send messages to anyone registered to this platform', 'title': 'OpenChat', 'mentor_email': 'ankitjain28may77@gmail.com', 'intro': 'OpenChat is an Open Source messaging platform where people can send messages to anyone registered to this platform', 'tag': ['php', 'composer', 'JavaScript', 'ajax', 'websockets', 'html', 'css', 'jquery', 'gulp'], 'id': 31, 'mentor': 'Ankit Jain', 'comm': 'https://gitter.im/ankitjain28may/openchat', 'btnid': 1031, 'link': 'http://github.com/ankitjain28may/openchat', 'img': 'https://github.com/ankitjain28may.png?size=50'},
{'intro_full': 'A GitHub integration to automatically review Python code style over Pull Requests', 'title': 'PEP8Speaks', 'mentor_email': 'himanshu.mishra.kgp@gmail.com', 'intro': 'A GitHub integration to automatically review Python code style over Pull Requests', 'tag': ['Python', 'Backend'], 'id': 32, 'mentor': 'Himanshu Mishra', 'comm': 'https://gitter.im/OrkoHunter-kwoc/pep8speaks', 'btnid': 1032, 'link': 'https://github.com/OrkoHunter/pep8speaks', 'img': 'https://github.com/OrkoHunter.png?size=50'},
{'intro_full': 'A very basic android implementation of the Pacman Game.', 'title': 'Pacman-lvl1', 'mentor_email': 'harishshivam@gmail.com', 'intro': 'A very basic android implementation of the Pacman Game.', 'tag': ['Java', 'Android'], 'id': 33, 'mentor': 'Harish Nandan', 'comm': 'https://www.facebook.com/groups/127895284549751', 'btnid': 1033, 'link': 'https://github.com/harishnandan/Pacman-lvl1', 'img': 'https://github.com/harishnandan.png?size=50'},
{'intro_full': 'A file sharing web application over local network.', 'title': 'PiZilla', 'mentor_email': 'naveenkumarsangi@protonmail.com', 'intro': 'A file sharing web application over local network.', 'tag': ['javascript', 'reactJS', 'file-uploads'], 'id': 34, 'mentor': 'Naveen Kumar Sangi', 'comm': 'https://gitter.im/nit-dgp/general', 'btnid': 1034, 'link': 'https://github.com/nitdgpos/pizilla', 'img': 'https://github.com/nitdgpos.png?size=50'},
{'intro_full': 'Create a dynamic queue in YouTube.', 'title': 'Play Next', 'mentor_email': 'i.nishantnikhil@gmail.com', 'intro': 'Create a dynamic queue in YouTube.', 'tag': ['JavaScript', 'YouTube', 'Chrome Extension'], 'id': 35, 'mentor': 'Nishant Nikhil', 'comm': 'https://slack.metakgp.org/', 'btnid': 1035, 'link': 'https://github.com/nishnik/Play_Next', 'img': 'https://github.com/nishnik.png?size=50'},
{'intro_full': 'A Repository to store implementation of some of the famous Data Structures and Algorithms (mainly in C/C++/Java/Python) for everyone to learn and contribute.', 'title': 'Playing with Algorithms', 'mentor_email': 'prateekkol21@gmail.com', 'intro': 'A Repository to store implementation of some of the famous Data Structures and Algorithms (mainly in C/C++/Java/Python) for everyone to learn and contribute.', 'tag': ['Python', 'Algorithms', 'Data Structures', 'C++', 'Java'], 'id': 36, 'mentor': 'Prateek Chanda', 'comm': 'https://gitter.im/codeIIEST/Algorithms', 'btnid': 1036, 'link': 'https://github.com/codeIIEST/Algorithms', 'img': 'https://github.com/codeIIEST.png?size=50'},
{'intro_full': 'A terminal and GUI based tool for quick visualisation of mathematical functions.', 'title': 'PlotIt', 'mentor_email': 'djmdeveloper060796@gmail.com', 'intro': 'A terminal and GUI based tool for quick visualisation of mathematical functions.', 'tag': ['Python', 'Plotting', 'Terminal', 'GUI'], 'id': 37, 'mentor': 'Deepjyoti Mondal', 'comm': 'https://gitter.im/PlotIt/Lobby', 'btnid': 1037, 'link': 'https://github.com/NITDgpOS/PlotIt', 'img': 'https://github.com/NITDgpOS.png?size=50'},
{'intro_full': 'Tool to configure system-wide proxy settings in Linux.', 'title': 'ProxyMan', 'mentor_email': 'himanshushekharb16@gmail.com', 'intro': 'Tool to configure system-wide proxy settings in Linux.', 'tag': ['bash', 'shell', 'linux', 'proxy', 'script'], 'id': 38, 'mentor': 'Himanshu Shekhar', 'comm': 'https://github.com/himanshub16/ProxyMan/issues', 'btnid': 1038, 'link': 'https://github.com/himanshub16/ProxyMan', 'img': 'https://github.com/himanshub16.png?size=50'},
{'intro_full': 'Collection of variants of RRT Path Planners', 'title': 'RRT', 'mentor_email': 'sayan.sinha@iitkgp.ac.in', 'intro': 'Collection of variants of RRT Path Planners', 'tag': ['C++', 'AI', 'Path planning'], 'id': 39, 'mentor': 'Sayan Sinha', 'comm': 'https://gitter.im/KgpKubs/Lobby', 'btnid': 1039, 'link': 'https://github.com/KgpKubs/RRT', 'img': 'https://github.com/KgpKubs.png?size=50'},
{'intro_full': 'An app on react where you can upload and view images at various locations on the earth', 'title': 'React Google Map', 'mentor_email': '2ankitasahoo13@gmail.com', 'intro': 'An app on react where you can upload and view images at various locations on the earth', 'tag': ['reactjs', 'firebase', 'css'], 'id': 40, 'mentor': 'Ankita Sahoo', 'comm': 'https://groups.google.com/forum/#!forum/kwoc17-react_google_map', 'btnid': 1040, 'link': 'https://github.com/ankita132/react_google_map', 'img': 'https://github.com/ankita132.png?size=50'},
{'intro_full': 'A chrome extension for mail tracking', 'title': 'Read-It', 'mentor_email': 'dibyadas998@gmail.com', 'intro': 'A chrome extension for mail tracking', 'tag': ['Python', 'Chrome Extension', 'flask', 'gmail'], 'id': 41, 'mentor': 'Dibya Prakash Das', 'comm': 'https://gitter.im/read-it/', 'btnid': 1041, 'link': 'https://github.com/dibyadas/read-it', 'img': 'https://github.com/dibyadas.png?size=50'},
{'intro_full': 'A web game based on reflection.', 'title': 'Reflexio', 'mentor_email': 'harishshivam@gmail.com', 'intro': 'A web game based on reflection.', 'tag': ['CSS', 'Javascript', 'HTML'], 'id': 42, 'mentor': 'Harish Nandan', 'comm': 'https://www.facebook.com/groups/136133120486393/', 'btnid': 1042, 'link': 'https://github.com/harishnandan/reflexio', 'img': 'https://github.com/harishnandan.png?size=50'},
{'intro_full': 'Convert relative dates back to a date representation: 3 days ago => A date object for today - 3 days', 'title': 'Relative Date: Reverse', 'mentor_email': 'kannan.siddharth12@gmail.com', 'intro': 'Convert relative dates back to a date representation: 3 days ago => A date object for today - 3 days', 'tag': ['javascript', 'datetime', 'utility', 'tools', 'nodejs', 'NPM', 'module'], 'id': 43, 'mentor': 'Siddharth Kannan', 'comm': 'https://groups.google.com/forum/#!forum/kwoc-2017-discussion-icyflame', 'btnid': 1043, 'link': 'https://github.com/icyflame/relative-date-reverse/issues', 'img': 'https://github.com/icyflame.png?size=50'},
{'intro_full': "In Android there are many privacy issues, every time some application fetch your details that you don't want to let ope to anyone. To ensure that your data is private I have the project in which we have to fake all possible bugs of privacy in Android and fix them into a small android app. Every time when ever some data travel from one end of user to some where else, we will notify about the privacy.", 'title': 'SafeAndroid', 'mentor_email': 'nirmalsarswat400@gmail.com', 'intro': "In Android there are many privacy issues, every time some application fetch your details that you don't want to let ope to anyone. To ensure that your data i...", 'tag': ['Android ', 'Security', 'Network'], 'id': 44, 'mentor': 'Nirmal Sarswat', 'comm': 'https://kwoc.slack.com', 'btnid': 1044, 'link': 'https://github.com/vivonk/SaveMore', 'img': 'https://github.com/vivonk.png?size=50'},
{'intro_full': 'A Natural Language Processing Toolkit for Indian Lamguages that utilize LSTMs for POS tagging.', 'title': 'Sangita', 'mentor_email': 'samriddhidjokestersinha@gmail.com', 'intro': 'A Natural Language Processing Toolkit for Indian Lamguages that utilize LSTMs for POS tagging.', 'tag': ['Python', 'NLP', 'Machine Learning', 'Scraping'], 'id': 45, 'mentor': 'Samriddhi Sinha', 'comm': 'https://groups.google.com/d/forum/sangitanlp', 'btnid': 1045, 'link': 'https://github.com/djokester/sangita', 'img': 'https://github.com/djokester.png?size=50'},
{'intro_full': 'A Django web app for collecting various results for scrapy-bench and uploading it to web.', 'title': 'Scrapy Bench Speedcenter', 'mentor_email': 'vermaparth97@gmail.com', 'intro': 'A Django web app for collecting various results for scrapy-bench and uploading it to web.', 'tag': ['Python', 'Scrapy', 'Scraping', 'Benchmarking', 'Django'], 'id': 46, 'mentor': 'Parth Verma', 'comm': 'https://join.slack.com/t/kwoc2017-parth/shared_invite/enQtMjc1OTU3MDUwNzc0LTNkNzQzN2U5NzI0ZTNkM2I5MGM5MDIyYTYxMzFhNWYzNWYwMDIzMjNmYjM2MTA1NDc1NWU2Yjc0ZTYxNGZmNTA', 'btnid': 1046, 'link': 'https://github.com/scrapy/scrapy-bench-speedcenter', 'img': 'https://github.com/scrapy.png?size=50'},
{'intro_full': 'A command-line interface for bench-marking Scrapy, that reflects real-world usage.', 'title': 'Scrapy-Bench', 'mentor_email': 'vermaparth97@gmail.com', 'intro': 'A command-line interface for bench-marking Scrapy, that reflects real-world usage.', 'tag': ['Python', 'Click', 'Scrapy', 'Scraping', 'Benchmarking', 'Memory-Profiling', 'Command-Line'], 'id': 47, 'mentor': 'Parth Verma', 'comm': 'https://join.slack.com/t/kwoc2017-parth/shared_invite/enQtMjc1OTU3MDUwNzc0LTNkNzQzN2U5NzI0ZTNkM2I5MGM5MDIyYTYxMzFhNWYzNWYwMDIzMjNmYjM2MTA1NDc1NWU2Yjc0ZTYxNGZmNTA', 'btnid': 1047, 'link': 'https://github.com/scrapy/scrapy-bench', 'img': 'https://github.com/scrapy.png?size=50'},
{'intro_full': 'Image Codec using Private-key cryptography ', 'title': 'SecureSnaps', 'mentor_email': 'aniqrah@gmail.com', 'intro': 'Image Codec using Private-key cryptography ', 'tag': ['Python', 'Image', 'codec', 'encryption', 'cryptography'], 'id': 48, 'mentor': 'Aniq Ur Rahman', 'comm': 'https://gitter.im/SecureSnaps55/Lobby', 'btnid': 1048, 'link': 'https://github.com/NITDgpOS/SecureSnaps', 'img': 'https://github.com/NITDgpOS.png?size=50'},
{'intro_full': 'A simple game of snakes implemented in C++ and OpenCV', 'title': 'Snakes', 'mentor_email': 'sayan.sinha@iitkgp.ac.in', 'intro': 'A simple game of snakes implemented in C++ and OpenCV', 'tag': ['C++', 'Gaming', 'OpenCV'], 'id': 49, 'mentor': 'Sayan Sinha', 'comm': 'https://gitter.im/opencv-Snakes', 'btnid': 1049, 'link': 'https://github.com/americast/Snakes', 'img': 'https://github.com/americast.png?size=50'},
{'intro_full': 'Often for complicated tasks in computer vision it is required that a camera be calibrated. Camera calibration is a necessary step in 3D computer vision in order to extract metric information from 2D images. Stereo calibration is used to find the geometric transformations between two cameras, and the relationship between two image projections of a particular 3D scene. More details here: http://sourishghosh.com/2016/stereo-calibration-cpp-opencv/', 'title': 'Stereo Camera Calibration', 'mentor_email': 'ragnarok0211@gmail.com', 'intro': 'Often for complicated tasks in computer vision it is required that a camera be calibrated. Camera calibration is a necessary step in 3D computer vision in or...', 'tag': ['Camera Calibration', 'Computer Vision', 'C++', 'OpenCV'], 'id': 50, 'mentor': 'Sourish Ghosh', 'comm': 'https://cvkgp.slack.com', 'btnid': 1050, 'link': 'https://github.com/sourishg/stereo-calibration', 'img': 'https://github.com/sourishg.png?size=50'},
{'intro_full': 'SunPy is a community-developed free and open-source software package for solar physics. It aims to be provide a comprehensive data analysis environment that allows researchers within the field of solar physics to carry out their tasks with the minimal effort.  SunPy is written using the Python programming language and is build upon the scientific Python environment which includes several core packages such as NumPy, SciPy, Matplotlib and Pandas. Since SunPy deals with key astrophysical concepts, its development is closely associated with that of Astropy, which is a fundamental package within the Python astronomy ecosystem.', 'title': 'SunPy', 'mentor_email': 'nitin.iitkgp23@gmail.com', 'intro': 'SunPy is a community-developed free and open-source software package for solar physics. It aims to be provide a comprehensive data analysis environment that ...', 'tag': ['Python', 'astronomy', 'sun', 'gsoc', 'scientific'], 'id': 51, 'mentor': 'Nitin Choudhary', 'comm': 'https://riot.im/app/#/room/#sunpy-kwoc:matrix.org', 'btnid': 1051, 'link': 'https://github.com/sunpy/sunpy', 'img': 'https://github.com/sunpy.png?size=50'},
{'intro_full': 'A Python Library for symbolic Maths.', 'title': 'SymPy', 'mentor_email': 'shivamvats.iitkgp@gmail.com', 'intro': 'A Python Library for symbolic Maths.', 'tag': ['Python', 'Maths ', 'Computation'], 'id': 52, 'mentor': 'Shivam Vats', 'comm': 'https://gitter.im/sympy/sympy', 'btnid': 1052, 'link': 'https://github.com/sympy/sympy', 'img': 'https://github.com/sympy.png?size=50'},
{'intro_full': 'It is a project on Machine Learning which aims to predict survival of passengers on Titanic. Contributing to this will aim to create a concrete understanding of ML for beginners and also help them go forward in Open Source', 'title': 'Titanic Survival Exploration', 'mentor_email': 'prateekkol21@gmail.com', 'intro': 'It is a project on Machine Learning which aims to predict survival of passengers on Titanic. Contributing to this will aim to create a concrete understanding...', 'tag': ['Python', 'Machine Learning', 'ipython notebook', 'statistical analysis'], 'id': 53, 'mentor': 'Prateek Chanda', 'comm': 'https://titanic-survival.slack.com/', 'btnid': 1053, 'link': 'https://github.com/prateekiiest/titanic_survival_exploration', 'img': 'https://github.com/prateekiiest.png?size=50'},
{'intro_full': 'Reddit bot which replies to sarcastic comments', 'title': 'Urban Robot', 'mentor_email': 'mubarishassannk@gmail.com', 'intro': 'Reddit bot which replies to sarcastic comments', 'tag': ['Python', 'Machine Learning', 'NLP', 'Natural Language Processing'], 'id': 54, 'mentor': 'Mubaris NK', 'comm': 'https://gitter.im/urban-robot/Lobby', 'btnid': 1054, 'link': 'https://github.com/mubaris/urban-robot', 'img': 'https://github.com/mubaris.png?size=50'},
{'intro_full': 'The goal of this project is to build a calculator which has speech reconition ability for input.', 'title': 'Voice Calculator', 'mentor_email': 'mayank.jindal5@gmail.com', 'intro': 'The goal of this project is to build a calculator which has speech reconition ability for input.', 'tag': [], 'id': 55, 'mentor': 'Mayank Jindal', 'comm': 'https://gitter.im/VoiceCalculator', 'btnid': 1055, 'link': 'https://github.com/mayank-kgp/VoiceCalculator', 'img': 'https://github.com/mayank-kgp.png?size=50'},
{'intro_full': 'A video chat for LAN based on tcp. Beginner friendly project', 'title': 'Weed', 'mentor_email': 'apoorvakumar169@gmail.com', 'intro': 'A video chat for LAN based on tcp. Beginner friendly project', 'tag': ['C++', 'Socket', 'OpenCv'], 'id': 56, 'mentor': 'Apoorva Kumar', 'comm': 'https://groups.google.com/forum/#!forum/weedongit', 'btnid': 1056, 'link': 'https://github.com/rava-dosa/Weed', 'img': 'https://github.com/rava-dosa.png?size=50'},
{'intro_full': 'A CLI tool to bring all the latest news to your terminal.', 'title': 'Whats-in-the-news-GEEK', 'mentor_email': 'aribis369@gmail.com', 'intro': 'A CLI tool to bring all the latest news to your terminal.', 'tag': ['Python', 'CLI', 'API'], 'id': 57, 'mentor': 'Arindam Biswas', 'comm': 'https://groups.google.com/forum/#!forum/whats-in-the-news-geek', 'btnid': 1057, 'link': 'https://github.com/aribis369/Whats-in-the-news-GEEK', 'img': 'https://github.com/aribis369.png?size=50'},
{'intro_full': 'Searches for recent Youtube videos opened and displays them in a list form.', 'title': 'Youtube Data Collector', 'mentor_email': 'vermaparth97@gmail.com', 'intro': 'Searches for recent Youtube videos opened and displays them in a list form.', 'tag': ['Chrome', 'Extension', 'JavaScript', 'Data-Analytics', 'Databases'], 'id': 58, 'mentor': 'Parth Verma', 'comm': 'https://join.slack.com/t/kwoc2017-parth/shared_invite/enQtMjc1OTU3MDUwNzc0LTNkNzQzN2U5NzI0ZTNkM2I5MGM5MDIyYTYxMzFhNWYzNWYwMDIzMjNmYjM2MTA1NDc1NWU2Yjc0ZTYxNGZmNTA', 'btnid': 1058, 'link': 'https://github.com/Parth-Vader/YoutubeDataCollector', 'img': 'https://github.com/Parth-Vader.png?size=50'},
{'intro_full': 'If you use YouTube to listen to music constantly while working or studying, this WebApp is for you. It works like a Music Player for YouTube, where you can rapidly create a playlist by searching videos and adding them. Fast re-ordering, Repeat All, Repeat One, Shuffle features make it feel like a music player.', 'title': 'Youtube Fast Playlist', 'mentor_email': 'mudeshi1209@gmail.com', 'intro': 'If you use YouTube to listen to music constantly while working or studying, this WebApp is for you. It works like a Music Player for YouTube, where you can r...', 'tag': ['javascript', 'web-app', ' youtube-api', 'jquery'], 'id': 59, 'mentor': 'Meet Udeshi', 'comm': 'https://gitter.im/fast-playlist', 'btnid': 1059, 'link': 'https://github.com/udiboy1209/fast_playlist', 'img': 'https://github.com/udiboy1209.png?size=50'},
{'intro_full': 'An attempt at a clear, minimalistic code compiler / interpreter.', 'title': 'c0derunR', 'mentor_email': 'hiwarekaustubh@gmail.com', 'intro': 'An attempt at a clear, minimalistic code compiler / interpreter.', 'tag': ['Python', 'Django', 'UI', 'Natural Language Processing'], 'id': 60, 'mentor': 'Kaustubh Hiware', 'comm': 'https://groups.google.com/forum/#!forum/c0derunr', 'btnid': 1060, 'link': 'https://github.com/kaustubhhiware/c0derunR', 'img': 'https://github.com/kaustubhhiware.png?size=50'},
{'intro_full': 'Wikibot to track user contributions', 'title': 'chitragupta', 'mentor_email': 'rameshwar.zorro@gmail.com', 'intro': 'Wikibot to track user contributions', 'tag': ['Python', 'Github-API', 'pywikibot'], 'id': 61, 'mentor': 'Rameshwar Bhaskaran', 'comm': 'https://groups.google.com/forum/?hl=en-GB#!forum/metakgp-chitragupta', 'btnid': 1061, 'link': 'https://github.com/metakgp/chitragupta/', 'img': 'https://github.com/metakgp.png?size=50'},
{'intro_full': 'coala provides a unified interface for linting and fixing code with a single configuration file, regardless of the programming languages used. You can use coala from within your favorite editor, integrate it with your CI, get the results as JSON, or customize it to your needs with its flexible configuration syntax.  coala has a set of official bears (plugins) for several languages, including popular languages such as C/C++, Python, JavaScript, CSS, Java and many more, in addition to some generic language independent algorithms.', 'title': 'coala', 'mentor_email': 'yash.nisar@somaiya.edu', 'intro': 'coala provides a unified interface for linting and fixing code with a single configuration file, regardless of the programming languages used. You can use co...', 'tag': ['Python'], 'id': 62, 'mentor': 'Yash Nisar', 'comm': 'https://gitter.im/coala/coala', 'btnid': 1062, 'link': 'https://github.com/coala/', 'img': 'https://github.com/coala.png?size=50'},
{'intro_full': "A Ruby gem that beautifies the terminal's ls command, with color and font-awesome icons.", 'title': 'colorls', 'mentor_email': 'athityakumar@gmail.com', 'intro': "A Ruby gem that beautifies the terminal's ls command, with color and font-awesome icons.", 'tag': [], 'id': 63, 'mentor': 'Athitya Kumar', 'comm': 'athityakumar@gmail.com', 'btnid': 1063, 'link': 'https://github.com/athityakumar/colorls', 'img': 'https://github.com/athityakumar.png?size=50'},
{'intro_full': 'A terminal-data controller with dynamic auto-complete features, that is built with ruby.', 'title': 'data', 'mentor_email': 'athityakumar@gmail.com', 'intro': 'A terminal-data controller with dynamic auto-complete features, that is built with ruby.', 'tag': [], 'id': 64, 'mentor': 'Athitya Kumar', 'comm': 'athityakumar@gmail.com', 'btnid': 1064, 'link': 'https://github.com/athityakumar/data', 'img': 'https://github.com/athityakumar.png?size=50'},
{'intro_full': "This program is a Python script that downloads all attachments found in the inbox of the user's Gmail account, based on a specific sender's address.", 'title': 'gmail-attachments', 'mentor_email': 'ashishkg0022@gmail.com', 'intro': "This program is a Python script that downloads all attachments found in the inbox of the user's Gmail account, based on a specific sender's address.", 'tag': [' IMAP  ', 'Gmail', 'Python Script'], 'id': 65, 'mentor': 'Ashish Kumar Gaurav', 'comm': 'https://groups.google.com/d/forum/gmail-attachments', 'btnid': 1065, 'link': 'https://github.com/ashishkg0022/gmail-attachments', 'img': 'https://github.com/ashishkg0022.png?size=50'},
{'intro_full': 'An easy-to-use python client for Google News feeds.', 'title': 'gnewsclient', 'mentor_email': 'nikhilksingh97@gmail.com', 'intro': 'An easy-to-use python client for Google News feeds.', 'tag': ['python', 'scraping', 'news-client', 'python-package'], 'id': 66, 'mentor': 'Nikhil Kumar Singh', 'comm': 'https://groups.google.com/forum/#!forum/kwoc-gnewsclient', 'btnid': 1066, 'link': 'https://github.com/nikhilkumarsingh/gnewsclient', 'img': 'https://github.com/nikhilkumarsingh.png?size=50'},
{'intro_full': 'Command Line Tool for looking up words', 'title': 'lexico', 'mentor_email': 'kshitijsaraogi@gmail.com', 'intro': 'Command Line Tool for looking up words', 'tag': ['Python', 'CLI', 'DBMS', 'SQL', 'OOP'], 'id': 67, 'mentor': 'Kshitij Saraogi', 'comm': 'mailto: kshitijsaraogi@gmail.com', 'btnid': 1067, 'link': 'https://github.com/kshitij10496/lexico', 'img': 'https://github.com/kshitij10496.png?size=50'},
{'intro_full': ' A Python library written for Morse Code', 'title': 'morse-talk', 'mentor_email': 'aribis369@gmail.com', 'intro': ' A Python library written for Morse Code', 'tag': ['Python', 'CLI', 'GUI', 'Tkinter', 'Matplotlib', 'Wave'], 'id': 68, 'mentor': 'Arindam Biswas', 'comm': 'https://gitter.im/OrkoHunter-kwoc/morse-talk', 'btnid': 1068, 'link': 'https://github.com/morse-talk/morse-talk', 'img': 'https://github.com/morse-talk.png?size=50'},
{'intro_full': 'A tool to display the timetable. A Terminal timetable, if you will.', 'title': 'timetable', 'mentor_email': 'athityakumar@gmail.com', 'intro': 'A tool to display the timetable. A Terminal timetable, if you will.', 'tag': [], 'id': 69, 'mentor': 'Athitya Kumar', 'comm': 'athityakumar@gmail.com', 'btnid': 1069, 'link': 'https://github.com/athityakumar/timetable', 'img': 'https://github.com/athityakumar.png?size=50'},
{'intro_full': "TV Series is a tool that scrapes Episode Synopsis' of popular TV Series' from websites like Wikipedia / IMDb and show in one place with a user-friendly navigation UI.", 'title': 'tvseries', 'mentor_email': 'athityakumar@gmail.com', 'intro': "TV Series is a tool that scrapes Episode Synopsis' of popular TV Series' from websites like Wikipedia / IMDb and show in one place with a user-friendly navig...", 'tag': [], 'id': 70, 'mentor': 'Athitya Kumar', 'comm': 'athityakumar@gmail.com', 'btnid': 1070, 'link': 'https://github.com/athityakumar/tvseries', 'img': 'https://github.com/athityakumar.png?size=50'},

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
