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
    {'link': 'https://github.com/git/git/', 'coordi': 'TBD', 'id': 1, 'comm': 'Mailing lists (git@vger.kernel.org)', 'intro': 'Git - fast, scalable, distributed revision control system', 'intro_full': 'Git - fast, scalable, distributed revision control system', 'mentor': '<a href="mailto:pranit.bauva@gmail.com">Pranit Bauva</a>', 'btnid': 1001, 'tag': ['C', 'Shell'], 'title': 'Git'},
{'link': 'https://github.com/prateekiiest/Code-Sleep-Python', 'coordi': 'TBD', 'id': 2, 'comm': 'https://code-sleep-python.slack.com/threads/', 'intro': 'This repository contains a curated list of some of the awesome small projects made in Python that you can code away this summer.  It includes analysis of dif...', 'intro_full': 'This repository contains a curated list of some of the awesome small projects made in Python that you can code away this summer.  It includes analysis of different Python modules, a deep analysis of the Python statistics modules and dataframes like Pandas.  It has some projects on classification, correlation and regression which are the fundamental building blocks of Machine Learning and Neural Networks. It also involves projects on Desktop Application and simple games. This repository hosts to 40 participants during Hacktoberfest', 'mentor': '<a href="mailto:prateekkol21@gmail.com">Prateek Chanda</a>', 'btnid': 1002, 'tag': ['Python', 'Games', 'Machine Learning', 'Algorithms ', 'Desktop Applications'], 'title': 'Code Sleep Python'},
{'link': 'https://github.com/prateekiiest/titanic_survival_exploration', 'coordi': 'TBD', 'id': 3, 'comm': 'https://titanic-survival.slack.com/', 'intro': 'It is a project on Machine Learning which aims to predict survival of passengers on Titanic. Contributing to this will aim to create a concrete understanding...', 'intro_full': 'It is a project on Machine Learning which aims to predict survival of passengers on Titanic. Contributing to this will aim to create a concrete understanding of ML for beginners and also help them go forward in Open Source', 'mentor': '<a href="mailto:prateekkol21@gmail.com">Prateek Chanda</a>', 'btnid': 1003, 'tag': ['Python', 'Machine Learning', 'ipython notebook', 'statistical analysis'], 'title': 'Titanic Survival Exploration'},
{'link': 'https://github.com/codeIIEST/Algorithms', 'coordi': 'TBD', 'id': 4, 'comm': 'https://gitter.im/codeIIEST/Algorithms', 'intro': 'A Repository to store implementation of some of the famous Data Structures and Algorithms (mainly in C/C++/Java/Python) for everyone to learn and contribute.', 'intro_full': 'A Repository to store implementation of some of the famous Data Structures and Algorithms (mainly in C/C++/Java/Python) for everyone to learn and contribute.', 'mentor': '<a href="mailto:prateekkol21@gmail.com">Prateek Chanda</a>', 'btnid': 1004, 'tag': ['Python', 'Algorithms', 'Data Structures', 'C++', 'Java'], 'title': 'Playing with Algorithms'},
{'link': 'https://github.com/NITDgpOS/AirHockey', 'coordi': 'TBD', 'id': 5, 'comm': 'https://gitter.im/AirHockey55/Lobby#', 'intro': 'Air Hockey game created using pygame ', 'intro_full': 'Air Hockey game created using pygame ', 'mentor': '<a href="mailto:aniqrah@gmail.com">Aniq Ur Rahman</a>', 'btnid': 1005, 'tag': ['Python', 'AI', 'Game', 'Pygame', 'Physics'], 'title': 'AirHockey'},
{'link': 'https://github.com/NITDgpOS/SecureSnaps', 'coordi': 'TBD', 'id': 6, 'comm': 'https://gitter.im/SecureSnaps55/Lobby', 'intro': 'Image Codec using Private-key cryptography ', 'intro_full': 'Image Codec using Private-key cryptography ', 'mentor': '<a href="mailto:aniqrah@gmail.com">Aniq Ur Rahman</a>', 'btnid': 1006, 'tag': ['Python', 'Image', 'codec', 'encryption', 'cryptography'], 'title': 'SecureSnaps'},
{'link': 'https://github.com/vivonk/SaveMore', 'coordi': 'TBD', 'id': 7, 'comm': 'https://kwoc.slack.com', 'intro': "In Android their are many privacy issues, every time some application fetch your details that you don't want to let ope to anyone. To ensure that your data i...", 'intro_full': "In Android their are many privacy issues, every time some application fetch your details that you don't want to let ope to anyone. To ensure that your data is private I have the project in which we have to fake all possible bugs of privacy in Android and fix them into a small android app. Every time when ever some data travel from one end of user to some where else, we will notify about the privacy.", 'mentor': '<a href="mailto:nirmalsarswat400@gmail.com">Nirmal Sarswat</a>', 'btnid': 1007, 'tag': ['Android ', 'Security', 'Network'], 'title': 'SafeAndroid'},
{'link': 'https://github.com/athityakumar/colorls', 'coordi': 'TBD', 'id': 8, 'comm': 'athityakumar@gmail.com', 'intro': "A Ruby gem that beautifies the terminal's ls command, with color and font-awesome icons.", 'intro_full': "A Ruby gem that beautifies the terminal's ls command, with color and font-awesome icons.", 'mentor': '<a href="mailto:athityakumar@gmail.com">Athitya Kumar</a>', 'btnid': 1008, 'tag': [], 'title': 'colorls'},
{'link': 'https://github.com/athityakumar/tvseries', 'coordi': 'TBD', 'id': 9, 'comm': 'athityakumar@gmail.com', 'intro': "TV Series is a tool that scrapes Episode Synopsis' of popular TV Series' from websites like Wikipedia / IMDb and show in one place with a user-friendly navig...", 'intro_full': "TV Series is a tool that scrapes Episode Synopsis' of popular TV Series' from websites like Wikipedia / IMDb and show in one place with a user-friendly navigation UI.", 'mentor': '<a href="mailto:athityakumar@gmail.com">Athitya Kumar</a>', 'btnid': 1009, 'tag': [], 'title': 'tvseries'},
{'link': 'https://github.com/athityakumar/data', 'coordi': 'TBD', 'id': 10, 'comm': 'athityakumar@gmail.com', 'intro': 'A terminal-data controller with dynamic auto-complete features, that is built with ruby.', 'intro_full': 'A terminal-data controller with dynamic auto-complete features, that is built with ruby.', 'mentor': '<a href="mailto:athityakumar@gmail.com">Athitya Kumar</a>', 'btnid': 1010, 'tag': [], 'title': 'data'},
{'link': 'https://github.com/athityakumar/timetable', 'coordi': 'TBD', 'id': 11, 'comm': 'athityakumar@gmail.com', 'intro': 'A tool to display the timetable. A Terminal timetable, if you will.', 'intro_full': 'A tool to display the timetable. A Terminal timetable, if you will.', 'mentor': '<a href="mailto:athityakumar@gmail.com">Athitya Kumar</a>', 'btnid': 1011, 'tag': [], 'title': 'timetable'},
{'link': 'https://github.com/NITDgpOS/PlotIt', 'coordi': 'TBD', 'id': 12, 'comm': 'https://gitter.im/PlotIt/Lobby', 'intro': 'A terminal and GUI based tool for quick visualisation of mathematical functions.', 'intro_full': 'A terminal and GUI based tool for quick visualisation of mathematical functions.', 'mentor': '<a href="mailto:djmdeveloper060796@gmail.com">Deepjyoti Mondal</a>', 'btnid': 1012, 'tag': ['Python', 'Plotting', 'Terminal', 'GUI'], 'title': 'PlotIt'},
{'link': 'https://github.com/nikhilkumarsingh/gnewsclient', 'coordi': 'TBD', 'id': 13, 'comm': 'https://groups.google.com/forum/#!forum/kwoc-gnewsclient', 'intro': 'An easy-to-use python client for Google News feeds.', 'intro_full': 'An easy-to-use python client for Google News feeds.', 'mentor': '<a href="mailto:nikhilksingh97@gmail.com">Nikhil Kumar Singh</a>', 'btnid': 1013, 'tag': ['python', 'scraping', 'news-client', 'python-package'], 'title': 'gnewsclient'},
{'link': 'https://github.com/Parth-Vader/MobOff', 'coordi': 'TBD', 'id': 14, 'comm': 'https://groups.google.com/forum/#!forum/kwoc17-Parth/', 'intro': 'A command line tool to add your music and videos directly to several devices.', 'intro_full': 'A command line tool to add your music and videos directly to several devices.', 'mentor': '<a href="mailto:vermaparth97@gmail.com">Parth Verma</a>', 'btnid': 1014, 'tag': ['Python', 'Command-Line', 'Youtube-dl', 'Click'], 'title': 'MobOff'},
{'link': 'https://github.com/scrapy/scrapy-bench', 'coordi': 'TBD', 'id': 15, 'comm': 'https://groups.google.com/forum/#!forum/kwoc17-Parth/', 'intro': 'A command-line interface for bench-marking Scrapy, that reflects real-world usage.', 'intro_full': 'A command-line interface for bench-marking Scrapy, that reflects real-world usage.', 'mentor': '<a href="mailto:vermaparth97@gmail.com">Parth Verma</a>', 'btnid': 1015, 'tag': ['Python', 'Click', 'Scrapy', 'Scraping', 'Benchmarking', 'Memory-Profiling', 'Command-Line'], 'title': 'Scrapy-Bench'},
{'link': 'https://github.com/scrapy/scrapy-bench-speedcenter', 'coordi': 'TBD', 'id': 16, 'comm': 'https://groups.google.com/forum/#!forum/kwoc17-Parth/', 'intro': 'A Django web app for collecting various results for scrapy-bench and uploading it to web.', 'intro_full': 'A Django web app for collecting various results for scrapy-bench and uploading it to web.', 'mentor': '<a href="mailto:vermaparth97@gmail.com">Parth Verma</a>', 'btnid': 1016, 'tag': ['Python', 'Scrapy', 'Scraping', 'Benchmarking', 'Django'], 'title': 'Scrapy Bench Speedcenter'},
{'link': 'https://github.com/Parth-Vader/YoutubeDataCollector', 'coordi': 'TBD', 'id': 17, 'comm': 'https://groups.google.com/forum/#!forum/kwoc17-Parth/', 'intro': 'Searches for recent Youtube videos opened and displays them in a list form.', 'intro_full': 'Searches for recent Youtube videos opened and displays them in a list form.', 'mentor': '<a href="mailto:vermaparth97@gmail.com">Parth Verma</a>', 'btnid': 1017, 'tag': ['Chrome', 'Extension', 'JavaScript', 'Data-Analytics', 'Databases'], 'title': 'Youtube Data Collector'},
{'link': 'https://github.com/udiboy1209/fast_playlist', 'coordi': 'TBD', 'id': 18, 'comm': 'https://gitter.im/fast-playlist', 'intro': 'If you use YouTube to listen to music constantly while working or studying, this WebApp is for you. It works like a Music Player for YouTube, where you can r...', 'intro_full': 'If you use YouTube to listen to music constantly while working or studying, this WebApp is for you. It works like a Music Player for YouTube, where you can rapidly create a playlist by searching videos and adding them. Fast re-ordering, Repeat All, Repeat One, Shuffle features make it feel like a music player.', 'mentor': '<a href="mailto:mudeshi1209@gmail.com">Meet Udeshi</a>', 'btnid': 1018, 'tag': ['javascript', 'web-app', ' youtube-api', 'jquery'], 'title': 'Youtube Fast Playlist'},
{'link': 'https://github.com/zishansami102/CNN-from-Scratch', 'coordi': 'TBD', 'id': 19, 'comm': 'https://groups.google.com/forum/#!forum/cnn-from-scratch', 'intro': 'A scratch implementation of Convolutional Neural Network in python without the use of any deep learning library tested over data sets like CIFAR-10 for Objec...', 'intro_full': 'A scratch implementation of Convolutional Neural Network in python without the use of any deep learning library tested over data sets like CIFAR-10 for Object Detection & MNIST for Digit Recognition', 'mentor': '<a href="mailto:zishansami102@gmail.com">Zishan Sami</a>', 'btnid': 1019, 'tag': ['Machine Learning', 'Deep Learning', 'Digit Recognition', 'Python', 'Flask', 'Javascript', 'HTML'], 'title': 'CNN-from-scratch'},
{'link': 'https://github.com/OrkoHunter/pep8speaks', 'coordi': 'TBD', 'id': 20, 'comm': 'https://gitter.im/OrkoHunter-kwoc/pep8speaks', 'intro': 'A GitHub integration to automatically review Python code style over Pull Requests', 'intro_full': 'A GitHub integration to automatically review Python code style over Pull Requests', 'mentor': '<a href="mailto:himanshu.mishra.kgp@gmail.com">Himanshu Mishra</a>', 'btnid': 1020, 'tag': ['Python', 'Backend'], 'title': 'PEP8Speaks'},
{'link': 'https://github.com/networkx/networkx', 'coordi': 'TBD', 'id': 21, 'comm': 'https://groups.google.com/forum/#!forum/networkx-discuss', 'intro': 'NetworkX is a Python package for the Graph Theory and Complex Networks.', 'intro_full': 'NetworkX is a Python package for the Graph Theory and Complex Networks.', 'mentor': '<a href="mailto:himanshu.mishra.kgp@gmail.com">Himanshu Mishra</a>', 'btnid': 1021, 'tag': ['Python', 'Graph Theory', 'Algorithms', 'Library', 'Package'], 'title': 'NetworkX'},
{'link': 'https://github.com/mayank-kgp/VoiceCalculator', 'coordi': 'TBD', 'id': 22, 'comm': 'https://gitter.im/VoiceCalculator', 'intro': 'The goal of this project is to build a calculator which has speech reconition ability for input.', 'intro_full': 'The goal of this project is to build a calculator which has speech reconition ability for input.', 'mentor': '<a href="mailto:mayank.jindal5@gmail.com">Mayank Jindal</a>', 'btnid': 1022, 'tag': [], 'title': 'Voice Calculator'},
{'link': 'github.com/djokester/sangita', 'coordi': 'TBD', 'id': 23, 'comm': 'https://groups.google.com/d/forum/sangitanlp', 'intro': 'A Natural Language Processing Toolkit for Indian Lamguages that utilize LSTMs for POS tagging.', 'intro_full': 'A Natural Language Processing Toolkit for Indian Lamguages that utilize LSTMs for POS tagging.', 'mentor': '<a href="mailto:samriddhidjokestersinha@gmail.com">Samriddhi Sinha</a>', 'btnid': 1023, 'tag': ['Python', 'NLP', 'Machine Learning', 'Scraping'], 'title': 'Sangita'},
{'link': 'https://github.com/icyflame/relative-date-reverse/issues', 'coordi': 'TBD', 'id': 24, 'comm': 'https://groups.google.com/forum/#!forum/kwoc-2017-discussion-icyflame', 'intro': 'Convert relative dates back to a date representation: 3 days ago => A date object for today - 3 days', 'intro_full': 'Convert relative dates back to a date representation: 3 days ago => A date object for today - 3 days', 'mentor': '<a href="mailto:kannan.siddharth12@gmail.com">Siddharth Kannan</a>', 'btnid': 1024, 'tag': ['javascript', 'datetime', 'utility', 'tools', 'nodejs', 'NPM', 'module'], 'title': 'Relative Date: Reverse'},
{'link': 'https://github.com/icyflame/cli-cube-timer/issues', 'coordi': 'TBD', 'id': 25, 'comm': 'https://groups.google.com/forum/#!forum/kwoc-2017-discussion-icyflame', 'intro': "Find out how long it takes you to solve the Rubik's Cube: without leaving your command line", 'intro_full': "Find out how long it takes you to solve the Rubik's Cube: without leaving your command line", 'mentor': '<a href="mailto:kannan.siddharth12@gmail.com">Siddharth Kannan</a>', 'btnid': 1025, 'tag': ['javascript', 'tools', 'nodejs', 'NPM', 'module', "rubik's cube", 'timer', 'state machine'], 'title': 'CLI Cube Timer'},
{'link': 'https://github.com/icyflame/awesome-social-science', 'coordi': 'TBD', 'id': 26, 'comm': 'https://groups.google.com/forum/#!forum/kwoc-2017-discussion-icyflame', 'intro': ' A curated list of adages, psychological syndromes and behaviour explaining aphorisms. ', 'intro_full': ' A curated list of adages, psychological syndromes and behaviour explaining aphorisms. ', 'mentor': '<a href="mailto:kannan.siddharth12@gmail.com">Siddharth Kannan</a>', 'btnid': 1026, 'tag': ['social science', 'psychology', 'syndromes', 'behavior', 'awesome-list', 'non programming'], 'title': 'Awesome Social Science'},
{'link': 'https://github.com/dibyadas/read-it', 'coordi': 'TBD', 'id': 27, 'comm': 'https://gitter.im/read-it/', 'intro': 'A chrome extension for mail tracking', 'intro_full': 'A chrome extension for mail tracking', 'mentor': '<a href="mailto:dibyadas998@gmail.com">Dibya Prakash Das</a>', 'btnid': 1027, 'tag': ['Python', 'Chrome Extension', 'flask', 'gmail'], 'title': 'Read-It'},
{'link': 'https://github.com/kshitij10496/lexico', 'coordi': 'TBD', 'id': 28, 'comm': 'mailto: kshitijsaraogi@gmail.com', 'intro': 'Command Line Tool for looking up words', 'intro_full': 'Command Line Tool for looking up words', 'mentor': '<a href="mailto:kshitijsaraogi@gmail.com">Kshitij Saraogi</a>', 'btnid': 1028, 'tag': ['Python', 'CLI', 'DBMS', 'SQL', 'OOP'], 'title': 'lexico'},
{'link': 'https://github.com/sourishg/stereo-calibration', 'coordi': 'TBD', 'id': 29, 'comm': 'https://cvkgp.slack.com', 'intro': 'Often for complicated tasks in computer vision it is required that a camera be calibrated. Camera calibration is a necessary step in 3D computer vision in or...', 'intro_full': 'Often for complicated tasks in computer vision it is required that a camera be calibrated. Camera calibration is a necessary step in 3D computer vision in order to extract metric information from 2D images. Stereo calibration is used to find the geometric transformations between two cameras, and the relationship between two image projections of a particular 3D scene. More details here: http://sourishghosh.com/2016/stereo-calibration-cpp-opencv/', 'mentor': '<a href="mailto:ragnarok0211@gmail.com">Sourish Ghosh</a>', 'btnid': 1029, 'tag': ['Camera Calibration', 'Computer Vision', 'C++', 'OpenCV'], 'title': 'Stereo Camera Calibration'},
{'link': 'https://github.com/himanshub16/ProxyMan', 'coordi': 'TBD', 'id': 30, 'comm': 'https://github.com/himanshub16/ProxyMan/issues', 'intro': 'Tool to configure system-wide proxy settings in Linux.', 'intro_full': 'Tool to configure system-wide proxy settings in Linux.', 'mentor': '<a href="mailto:himanshushekharb16@gmail.com">Himanshu Shekhar</a>', 'btnid': 1030, 'tag': ['bash', 'shell', 'linux', 'proxy', 'script'], 'title': 'ProxyMan'},
{'link': 'https://github.com/mubaris/urban-robot', 'coordi': 'TBD', 'id': 31, 'comm': 'https://gitter.im/urban-robot/Lobby', 'intro': 'Reddit bot which replies to sarcastic comments', 'intro_full': 'Reddit bot which replies to sarcastic comments', 'mentor': '<a href="mailto:mubarishassannk@gmail.com">Mubaris NK</a>', 'btnid': 1031, 'tag': ['Python', 'Machine Learning', 'NLP', 'Natural Language Processing'], 'title': 'Urban Robot'},
{'link': 'https://github.com/aribis369/Whats-in-the-news-GEEK', 'coordi': 'TBD', 'id': 32, 'comm': 'https://groups.google.com/forum/#!forum/whats-in-the-news-geek', 'intro': 'A CLI tool to bring all the latest news to your terminal.', 'intro_full': 'A CLI tool to bring all the latest news to your terminal.', 'mentor': '<a href="mailto:aribis369@gmail.com">Arindam Biswas</a>', 'btnid': 1032, 'tag': ['Python', 'CLI', 'API'], 'title': 'Whats-in-the-news-GEEK'},
{'link': 'https://github.com/morse-talk/morse-talk', 'coordi': 'TBD', 'id': 33, 'comm': 'https://gitter.im/OrkoHunter-kwoc/morse-talk', 'intro': ' A Python library written for Morse Code', 'intro_full': ' A Python library written for Morse Code', 'mentor': '<a href="mailto:aribis369@gmail.com">Arindam Biswas</a>', 'btnid': 1033, 'tag': ['Python', 'CLI', 'GUI', 'Tkinter', 'Matplotlib', 'Wave'], 'title': 'morse-talk'},
{'link': 'https://github.com/sandeepsharma-kgp/DigiNehruApk', 'coordi': 'TBD', 'id': 34, 'comm': 'https://diginehruapp.slack.com/, https://www.facebook.com/sandeepsharma.iit', 'intro': 'It is an hybrid app to be developed for mess related activities and in-hall notifications for increasing convenience to boarders and bringing transparency in...', 'intro_full': 'It is an hybrid app to be developed for mess related activities and in-hall notifications for increasing convenience to boarders and bringing transparency into mess system of hall.', 'mentor': '<a href="mailto:sandeepsharma.iit@gmail.com">Sandeep Sharma</a>', 'btnid': 1034, 'tag': ['Python', 'Django', 'JavaScript', 'Android', 'iOS', 'AWS'], 'title': 'DigiNehru'},
{'link': 'https://github.com/pv-912/Hackathon', 'coordi': 'TBD', 'id': 35, 'comm': 'nishant.sikarwar007@gmail.com', 'intro': 'It was Idea to connect professor to  students via showing their availability in their office.  We have to make a firebase database which will be update the v...', 'intro_full': 'It was Idea to connect professor to  students via showing their availability in their office.  We have to make a firebase database which will be update the values in the list items (Names) shown in the app.', 'mentor': '<a href="mailto:nishant.sikarwar007@gmail.com">Nishant Singh Sikarwar</a>', 'btnid': 1035, 'tag': ['Android', 'Databases'], 'title': 'Hackathon'},
{'link': 'http://github.com/ankitjain28may/openchat', 'coordi': 'TBD', 'id': 36, 'comm': 'https://gitter.im/ankitjain28may/openchat', 'intro': 'OpenChat is an Open Source messaging platform where people can send messages to anyone registered to this platform', 'intro_full': 'OpenChat is an Open Source messaging platform where people can send messages to anyone registered to this platform', 'mentor': '<a href="mailto:ankitjain28may77@gmail.com">Ankit Jain</a>', 'btnid': 1036, 'tag': ['php', 'composer', 'JavaScript', 'ajax', 'websockets', 'html', 'css', 'jquery', 'gulp'], 'title': 'OpenChat'},
{'link': 'https://github.com/sympy/sympy', 'coordi': 'TBD', 'id': 37, 'comm': 'https://gitter.im/sympy/sympy', 'intro': 'A Python Library for symbolic Maths.', 'intro_full': 'A Python Library for symbolic Maths.', 'mentor': '<a href="mailto:shivamvats.iitkgp@gmail.com">Shivam Vats</a>', 'btnid': 1037, 'tag': ['Python', 'Maths ', 'Computation'], 'title': 'SymPy'},
{'link': 'https://github.com/metakgp/naarad-source', 'coordi': 'TBD', 'id': 38, 'comm': 'https://metakgp.slack.com/', 'intro': 'Aggregating news since antiquity', 'intro_full': 'Aggregating news since antiquity', 'mentor': '<a href="mailto:sayan.sinha@iitkgp.ac.in">Sayan Sinha</a>', 'btnid': 1038, 'tag': ['Python', 'scrapping', 'GraphQL', 'API', 'Django'], 'title': 'Naarad'},
{'link': 'https://github.com/KgpKubs/RRT', 'coordi': 'TBD', 'id': 39, 'comm': 'Gitter', 'intro': 'Collection of variants of RRT Path Planners', 'intro_full': 'Collection of variants of RRT Path Planners', 'mentor': '<a href="mailto:sayan.sinha@iitkgp.ac.in">Sayan Sinha</a>', 'btnid': 1039, 'tag': ['C++', 'AI', 'Path planning'], 'title': 'RRT'},
{'link': 'https://github.com/americast/cascade-segnet-tf', 'coordi': 'TBD', 'id': 40, 'comm': 'Gitter', 'intro': 'Implementation of Segnet on a cascading architecture', 'intro_full': 'Implementation of Segnet on a cascading architecture', 'mentor': '<a href="mailto:sayan.sinha@iitkgp.ac.in">Sayan Sinha</a>', 'btnid': 1040, 'tag': ['Python', 'AI', 'CNN', 'ML', 'DL', 'Encoder-decoder'], 'title': 'Cascade Segnet'},
{'link': 'https://github.com/americast/Snakes', 'coordi': 'TBD', 'id': 41, 'comm': 'Gitter', 'intro': 'A simple game of snakes implemented in C++ and OpenCV', 'intro_full': 'A simple game of snakes implemented in C++ and OpenCV', 'mentor': '<a href="mailto:sayan.sinha@iitkgp.ac.in">Sayan Sinha</a>', 'btnid': 1041, 'tag': ['C++', 'Gaming', 'OpenCV'], 'title': 'Snakes'},
{'link': 'https://github.com/americast/ANN', 'coordi': 'TBD', 'id': 42, 'comm': 'Gitter', 'intro': 'Artificial Neural Network from scratch in Julia', 'intro_full': 'Artificial Neural Network from scratch in Julia', 'mentor': '<a href="mailto:sayan.sinha@iitkgp.ac.in">Sayan Sinha</a>', 'btnid': 1042, 'tag': ['Julia', 'ANN', 'DL', 'ML'], 'title': 'ANN'},
{'link': 'https://github.com/metakgp/metakgp-wiki', 'coordi': 'TBD', 'id': 43, 'comm': 'https://slack.metakgp.org/', 'intro': 'Self-sufficient docker configuration for running the Metakgp Mediawiki instance', 'intro_full': 'Self-sufficient docker configuration for running the Metakgp Mediawiki instance', 'mentor': '<a href="mailto:kannan.siddharth12@gmail.com">Siddharth Kannan</a>', 'btnid': 1043, 'tag': ['Docker', 'PHP', 'SysAdmin', 'Linux'], 'title': 'Metakgp Wiki: Dockerized for fun'},
{'link': 'https://github.com/the-ethan-hunt/sciruby-examples', 'coordi': 'TBD', 'id': 44, 'comm': 'https://groups.google.com/forum/#!forum/sciruby-examples-discuss', 'intro': "Sciruby-examples is a project that lists out tutorials in IRuby notebooks for machine learning and NLP. This is a 'first of its kind' repository on GitHub. V...", 'intro_full': "Sciruby-examples is a project that lists out tutorials in IRuby notebooks for machine learning and NLP. This is a 'first of its kind' repository on GitHub. Various ML and NLP algorithms will be implemented in ruby by contributors which can help newbies in machine learning ", 'mentor': '<a href="mailto:dhruvgirishapte@gmail.com">Dhruv Apte and Athitya Kumar</a>', 'btnid': 1044, 'tag': ['Ruby', 'machine learning', 'natural language processing', 'IRuby'], 'title': 'SciRuby-examples'},
{'link': 'https://github.com/metakgp/mfqp', 'coordi': 'TBD', 'id': 45, 'comm': 'http://metakgp-slack.herokuapp.com/', 'intro': 'IITKGP Question paper search', 'intro_full': 'IITKGP Question paper search', 'mentor': '<a href="mailto:athityakumar@gmail.com">Athitya Kumar</a>', 'btnid': 1045, 'tag': [], 'title': 'MFQP'},
{'link': 'https://github.com/athityakumar/networkx.rb', 'coordi': 'TBD', 'id': 46, 'comm': 'athityakumar@gmail.com', 'intro': "A Ruby implementation of Python's well known Graph library : networkx", 'intro_full': "A Ruby implementation of Python's well known Graph library : networkx", 'mentor': '<a href="mailto:athityakumar@gmail.com">Athitya Kumar</a>', 'btnid': 1046, 'tag': [], 'title': 'Networkx.rb'},
{'link': 'https://github.com/the-ethan-hunt/B.E.N.J.I.', 'coordi': 'TBD', 'id': 47, 'comm': 'https://groups.google.com/forum/#!forum/benji-discussion', 'intro': 'B.E.N.J.I., short for Brilliant and Efficient non-Javascript enabled Intelligence is a digital assistant that can help do several regular tasks on the laptop...', 'intro_full': 'B.E.N.J.I., short for Brilliant and Efficient non-Javascript enabled Intelligence is a digital assistant that can help do several regular tasks on the laptop. Its numerous tasks include searching on Google, Wiki search, opening any Webpage, fetching news from several news agencies. The assistant can be activated and operated using voice commands. The assistant is yet undergoing changes for operating in a Linux and MacOS operating system', 'mentor': '<a href="mailto:dhruvgirishapte@gmail.com">Dhruv Apte</a>', 'btnid': 1047, 'tag': ['Python', 'digital-assistant', 'speech-to-text', 'speech-recognition'], 'title': 'B.E.N.J.I.'},
{'link': 'https://github.com/metakgp/gyft', 'coordi': 'TBD', 'id': 48, 'comm': 'https://slack.metakgp.org/', 'intro': 'Gets your timetable from ERP and adds it to your Google Calendar or gives you an ICS file which you can add in any common calendar application.', 'intro_full': 'Gets your timetable from ERP and adds it to your Google Calendar or gives you an ICS file which you can add in any common calendar application.', 'mentor': '<a href="mailto:i.nishantnikhil@gmail.com">Nishant Nikhil</a>', 'btnid': 1048, 'tag': ['Python', 'Scraping', 'Google API', 'ERP'], 'title': 'GYFT (Get Your Freaking Timetable)'},
{'link': 'https://github.com/nishnik/Play_Next', 'coordi': 'TBD', 'id': 49, 'comm': 'https://slack.metakgp.org/', 'intro': 'Create a dynamic queue in YouTube.', 'intro_full': 'Create a dynamic queue in YouTube.', 'mentor': '<a href="mailto:i.nishantnikhil@gmail.com">Nishant Nikhil</a>', 'btnid': 1049, 'tag': ['JavaScript', 'YouTube', 'Chrome Extension'], 'title': 'Play Next'},
{'link': 'https://github.com/dibyadas/d3-force-directed-graph/', 'coordi': 'TBD', 'id': 50, 'comm': 'https://gitter.im/GraphClusters/Lobby', 'intro': 'A community clusters detection app that can take an edgelist as an input and generate an interactive force directed graph and different information like the ...', 'intro_full': 'A community clusters detection app that can take an edgelist as an input and generate an interactive force directed graph and different information like the degree centrality, betweenness centrality and clustering co-efficients are displayed.', 'mentor': '<a href="mailto:dibyadas998@gmail.com">Dibya Prakash Das</a>', 'btnid': 1050, 'tag': ['d3.js', 'graph', 'networkx', 'python', 'javascript'], 'title': 'GraphClusters'},
{'link': 'https://github.com/nitdgpos/pizilla', 'coordi': 'TBD', 'id': 51, 'comm': 'https://gitter.im/nit-dgp/general', 'intro': 'A file sharing web application over local network.', 'intro_full': 'A file sharing web application over local network.', 'mentor': '<a href="mailto:naveenkumarsangi@protonmail.com">Naveen Kumar Sangi</a>', 'btnid': 1051, 'tag': ['javascript', 'reactJS', 'file-uploads'], 'title': 'PiZilla'},
{'link': 'https://github.com/rava-dosa/Weed', 'coordi': 'TBD', 'id': 52, 'comm': 'https://groups.google.com/forum/#!forum/weedongit', 'intro': 'A lan based video chat based on transmission control protocol', 'intro_full': 'A lan based video chat based on transmission control protocol', 'mentor': '<a href="mailto:apoorvakumar169@gmail.com">Apoorva Kumar</a>', 'btnid': 1052, 'tag': [], 'title': 'Weed'},
{'link': 'https://github.com/iashris/archdraw', 'coordi': 'TBD', 'id': 53, 'comm': 'https://www.facebook.com/Ashris', 'intro': 'An architecture automation tool that converts a pencil drawn sketch to a rendered plan instantly', 'intro_full': 'An architecture automation tool that converts a pencil drawn sketch to a rendered plan instantly', 'mentor': '<a href="mailto:ashris@mit.edu">Ashris Choudhury</a>', 'btnid': 1053, 'tag': ['javascript', 'p5js', 'design', 'image processing', 'computer vision'], 'title': 'Archdraw'},
{'link': 'https://github.com/rava-dosa/TalkToMe', 'coordi': 'TBD', 'id': 54, 'comm': 'https://groups.google.com/forum/#!forum/talktomebot', 'intro': 'Siri inspired chatbot. A beginner friendly project.', 'intro_full': 'Siri inspired chatbot. A beginner friendly project.', 'mentor': '<a href="mailto:apoorvakumar169@gmail.com">Apoorva Kumar</a>', 'btnid': 1054, 'tag': ['Python', 'PyAiml', 'Ros'], 'title': 'TalkToMe'},
{'link': 'https://github.com/rava-dosa/Weed', 'coordi': 'TBD', 'id': 55, 'comm': 'https://groups.google.com/forum/#!forum/weedongit', 'intro': 'A video chat for LAN based on tcp. Beginner friendly project', 'intro_full': 'A video chat for LAN based on tcp. Beginner friendly project', 'mentor': '<a href="mailto:apoorvakumar169@gmail.com">Apoorva Kumar</a>', 'btnid': 1055, 'tag': ['C++', 'Socket', 'OpenCv'], 'title': 'Weed'},
{'link': 'https://github.com/djbarnwal/hangman', 'coordi': 'TBD', 'id': 56, 'comm': 'https://www.facebook.com/groups/166681887253832', 'intro': 'A traditional hangman game build using React.', 'intro_full': 'A traditional hangman game build using React.', 'mentor': '<a href="mailto:dhiraj@iitkgp.ac.in">Dhiraj Kumar</a>', 'btnid': 1056, 'tag': [' Web Development', ' JavaScript', 'CSS', 'ReactJS'], 'title': 'Hangman React Game'},
{'link': 'https://github.com/vernwalrahul/my-messenger-bot', 'coordi': 'TBD', 'id': 57, 'comm': 'https://gitter.im/my-messenger-bot/Lobby', 'intro': "This is a simple python template that uses Flask to build a webhook for Facebook's Messenger Bot API. The aim is to build interactive chatbot with some added...", 'intro_full': "This is a simple python template that uses Flask to build a webhook for Facebook's Messenger Bot API. The aim is to build interactive chatbot with some added features of virtual assistant.", 'mentor': '<a href="mailto:vernwalrahul@gmail.com">Rahul Vernwal</a>', 'btnid': 1057, 'tag': ['Python', 'NLP', 'APIs', 'Virtual Assistant'], 'title': 'Messenger Bot'},
{'link': 'https://github.com/AvijitGhosh82/DeepChem', 'coordi': 'TBD', 'id': 58, 'comm': 'https://gitter.im/Deep-Chem', 'intro': 'Using Deep Learning to predict properties of Chemicals', 'intro_full': 'Using Deep Learning to predict properties of Chemicals', 'mentor': '<a href="mailto:avijitg22@gmail.com">Avijit Ghosh</a>', 'btnid': 1058, 'tag': ['Python', 'Scraping', 'Tensorflow', 'Deep Learning', 'Neural Network', 'Data Collection', 'Word2Vec'], 'title': 'DeepChem'},
{'link': 'https://github.com/harishnandan/reflexio', 'coordi': 'TBD', 'id': 59, 'comm': 'https://www.facebook.com/groups/136133120486393/', 'intro': 'A web game based on reflection.', 'intro_full': 'A web game based on reflection.', 'mentor': '<a href="mailto:harishshivam@gmail.com">Harish Nandan</a>', 'btnid': 1059, 'tag': ['CSS', 'Javascript', 'HTML'], 'title': 'Reflexio'},
{'link': 'https://github.com/harishnandan/Pacman-lvl1', 'coordi': 'TBD', 'id': 60, 'comm': 'https://www.facebook.com/groups/127895284549751', 'intro': 'A very basic android implementation of the Pacman Game.', 'intro_full': 'A very basic android implementation of the Pacman Game.', 'mentor': '<a href="mailto:harishshivam@gmail.com">Harish Nandan</a>', 'btnid': 1060, 'tag': ['Java', 'Android'], 'title': 'Pacman-lvl1'},
{'link': 'https://github.com/ashishkg0022/gmail-attachments', 'coordi': 'TBD', 'id': 61, 'comm': 'https://groups.google.com/d/forum/gmail-attachments', 'intro': "This program is a Python script that downloads all attachments found in the inbox of the user's Gmail account, based on a specific sender's address.", 'intro_full': "This program is a Python script that downloads all attachments found in the inbox of the user's Gmail account, based on a specific sender's address.", 'mentor': '<a href="mailto:ashishkg0022@gmail.com">Ashish Kumar Gaurav</a>', 'btnid': 1061, 'tag': [' IMAP  ', 'Gmail', 'Python Script'], 'title': 'gmail-attachments'},
{'link': 'https://github.com/sangeet259/Generative_Adversarial_Networks', 'coordi': 'TBD', 'id': 62, 'comm': 'https://kwoc-17.slack.com/', 'intro': 'Implement GANs in Pytorch and Basic Numpy from the starter code', 'intro_full': 'Implement GANs in Pytorch and Basic Numpy from the starter code', 'mentor': '<a href="mailto:mail2sangeetmishra@gmail.com">Sangeet Kumar Mishra</a>', 'btnid': 1062, 'tag': ['Python', 'pytorch', 'machine learning'], 'title': 'GANs'},
{'link': 'https://github.com/ashishkg0022/Gui-PathPlanners', 'coordi': 'TBD', 'id': 63, 'comm': 'https://groups.google.com/forum/#!forum/gui-pathplanner', 'intro': 'It helps anyone see paths drawn from different path planners and also tune the parameters Edit Add topics', 'intro_full': 'It helps anyone see paths drawn from different path planners and also tune the parameters Edit Add topics', 'mentor': '<a href="mailto:ashishkg0022@gmail.com">Ashish Kumar Gaurav</a>', 'btnid': 1063, 'tag': ['PyQt4 ', 'RRTs', 'ROS'], 'title': 'Gui-PathPlanners'},
{'link': 'https://github.com/kaustubhhiware/NotiFyre', 'coordi': 'TBD', 'id': 64, 'comm': 'https://www.facebook.com/groups/552015885141292/', 'intro': 'A terminal task-notifier that works across different command line emulators', 'intro_full': 'A terminal task-notifier that works across different command line emulators', 'mentor': '<a href="mailto:hiwarekaustubh@gmail.com">Kaustubh Hiware</a>', 'btnid': 1064, 'tag': ['Bash', 'Terminal', 'Linux'], 'title': 'NotiFyre'},
{'link': 'https://github.com/alchemsynergy/alchem', 'coordi': 'TBD', 'id': 65, 'comm': 'https://join.slack.com/t/alchemsynergy/shared_invite/enQtMjU0NjUwMzAyNTgzLTM0OTNlMTg3ZDk1MmQ4ODdkYzM2YTA3MTE2MGM4ZTQ1ODU5ZTc3YTA4ODY5MWI2ZTAzZDM5MjEzOGM3N2FhYjY', 'intro': 'An all-in-one inventory and accounts solution for Chemist shops (both wholesale and retail) as per new Indian taxation standards.', 'intro_full': 'An all-in-one inventory and accounts solution for Chemist shops (both wholesale and retail) as per new Indian taxation standards.', 'mentor': '<a href="mailto:rajadelhi94@gmail.com">Ankit Kumar</a>', 'btnid': 1065, 'tag': ['Java', 'JavaFX', 'XML', 'CSS', 'PostgreSQL'], 'title': 'Alchem Desktop'},
{'link': 'https://github.com/alchemsynergy/alchem', 'coordi': 'TBD', 'id': 66, 'comm': 'https://join.slack.com/t/alchemsynergy/shared_invite/enQtMjU0NjUwMzAyNTgzLTM0OTNlMTg3ZDk1MmQ4ODdkYzM2YTA3MTE2MGM4ZTQ1ODU5ZTc3YTA4ODY5MWI2ZTAzZDM5MjEzOGM3N2FhYjY', 'intro': 'https://join.slack.com/t/alchemsynergy/shared_invite/enQtMjU0NjUwMzAyNTgzLTM0OTNlMTg3ZDk1MmQ4ODdkYzM2YTA3MTE2MGM4ZTQ1ODU5ZTc3YTA4ODY5MWI2ZTAzZDM5MjEzOGM3N2FhYjY', 'intro_full': 'https://join.slack.com/t/alchemsynergy/shared_invite/enQtMjU0NjUwMzAyNTgzLTM0OTNlMTg3ZDk1MmQ4ODdkYzM2YTA3MTE2MGM4ZTQ1ODU5ZTc3YTA4ODY5MWI2ZTAzZDM5MjEzOGM3N2FhYjY', 'mentor': '<a href="mailto:vipul.gyl12@gmail.com">Vipul Goyal</a>', 'btnid': 1066, 'tag': ['Java', 'JavaFX', 'XML', 'CSS', 'PostgreSQL'], 'title': 'Alchem Desktop'},
{'link': 'https://github.com/alchemsynergy/alchem', 'coordi': 'TBD', 'id': 67, 'comm': 'https://join.slack.com/t/alchemsynergy/shared_invite/enQtMjU0NjUwMzAyNTgzLTM0OTNlMTg3ZDk1MmQ4ODdkYzM2YTA3MTE2MGM4ZTQ1ODU5ZTc3YTA4ODY5MWI2ZTAzZDM5MjEzOGM3N2FhYjY', 'intro': 'An all-in-one inventory and accounts solution for Chemist shops (both wholesale and retail) as per new Indian taxation standards.', 'intro_full': 'An all-in-one inventory and accounts solution for Chemist shops (both wholesale and retail) as per new Indian taxation standards.', 'mentor': '<a href="mailto:techfreakworm@gmail.com">Mayank Gupta</a>', 'btnid': 1067, 'tag': ['Java', 'JavaFX', 'XML', 'CSS', 'PostgreSQL'], 'title': 'Alchem Desktop'},
{'link': 'https://github.com/sipah00/CrickFev', 'coordi': 'TBD', 'id': 68, 'comm': 'https://join.slack.com/t/crickkwoc/shared_invite/enQtMjc0NDUyNTU3NzE1LWFmOGI5MDBhMzBmNmJjMTM0ZjhjMTBhNTIzY2VhNTI5N2ZkNjVhYTNkZTUyNGMyNmMwMGE0NjY2OGM1YmY4NDg', 'intro': 'CLI for getting update of live cricket matches', 'intro_full': 'CLI for getting update of live cricket matches', 'mentor': '<a href="mailto:shubhamsipah00@gmail.com">shubham maddhashiya</a>', 'btnid': 1068, 'tag': ['Python', 'Scraping', 'click', 'cli'], 'title': 'CrickFev'},
{'link': 'https://github.com/coala/', 'coordi': 'TBD', 'id': 69, 'comm': 'https://gitter.im/coala/coala', 'intro': 'coala provides a unified interface for linting and fixing code with a single configuration file, regardless of the programming languages used. You can use co...', 'intro_full': 'coala provides a unified interface for linting and fixing code with a single configuration file, regardless of the programming languages used. You can use coala from within your favorite editor, integrate it with your CI, get the results as JSON, or customize it to your needs with its flexible configuration syntax.  coala has a set of official bears (plugins) for several languages, including popular languages such as C/C++, Python, JavaScript, CSS, Java and many more, in addition to some generic language independent algorithms.', 'mentor': '<a href="mailto:yash.nisar@somaiya.edu">Yash Nisar</a>', 'btnid': 1069, 'tag': ['Python'], 'title': 'coala'},
{'link': 'https://github.com/kaustubhhiware/c0derunR', 'coordi': 'TBD', 'id': 70, 'comm': 'https://groups.google.com/forum/#!forum/c0derunr', 'intro': 'An attempt at a clear, minimalistic code compiler / interpreter.', 'intro_full': 'An attempt at a clear, minimalistic code compiler / interpreter.', 'mentor': '<a href="mailto:hiwarekaustubh@gmail.com">Kaustubh Hiware</a>', 'btnid': 1070, 'tag': ['Python', 'Django', 'UI', 'Natural Language Processing'], 'title': 'c0derunR'},
{'link': 'https://github.com/metakgp/chitragupta/', 'coordi': 'TBD', 'id': 71, 'comm': 'https://groups.google.com/forum/?hl=en-GB#!forum/metakgp-chitragupta', 'intro': 'Wikibot to track user contributions', 'intro_full': 'Wikibot to track user contributions', 'mentor': '<a href="mailto:rameshwar.zorro@gmail.com">Rameshwar Bhaskaran</a>', 'btnid': 1071, 'tag': ['Python', 'Github-API', 'pywikibot'], 'title': 'chitragupta'},
{'link': 'https://github.com/sunpy/sunpy', 'coordi': 'TBD', 'id': 72, 'comm': 'https://riot.im/app/#/room/#sunpy-kwoc:matrix.org', 'intro': 'SunPy is a community-developed free and open-source software package for solar physics. It aims to be provide a comprehensive data analysis environment that ...', 'intro_full': 'SunPy is a community-developed free and open-source software package for solar physics. It aims to be provide a comprehensive data analysis environment that allows researchers within the field of solar physics to carry out their tasks with the minimal effort.  SunPy is written using the Python programming language and is build upon the scientific Python environment which includes several core packages such as NumPy, SciPy, Matplotlib and Pandas. Since SunPy deals with key astrophysical concepts, its development is closely associated with that of Astropy, which is a fundamental package within the Python astronomy ecosystem.', 'mentor': '<a href="mailto:nitin.iitkgp23@gmail.com">Nitin Choudhary</a>', 'btnid': 1072, 'tag': ['Python', 'astronomy', 'sun', 'gsoc', 'scientific'], 'title': 'SunPy'},

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


    function displayMatches() {
        var matchArray = findMatches(this.value, cards)
        if(!isEqual(searchRes, matchArray)) {
            searchRes = matchArray
            displayRes()
        }
    }

    var searchInput = document.querySelector('.searchTerm')
    searchInput.addEventListener('keyup', displayMatches);

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
