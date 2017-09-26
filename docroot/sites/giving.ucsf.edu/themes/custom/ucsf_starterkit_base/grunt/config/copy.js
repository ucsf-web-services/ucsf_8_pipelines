module.exports = {
  main: {
    files: [
      {
        expand: true, 
        cwd: '<%=node_modules%>/<%=pattern_library%>/source/_patterns/',
        src:['**/*.twig'],
        dest: 'source/_patterns/'
      },
      {
        expand: true, 
        cwd: '<%=node_modules%>/<%=pattern_library%>/source/css/',
        src:['**/*.css'],
        dest: 'css/'
      },
      {
        expand: true, 
        cwd: '<%=node_modules%>/<%=pattern_library%>/source/js/',
        src:['**/*.js'],
        dest: 'scripts/'
      },
      {
        expand: true, 
        cwd: '<%=node_modules%>/<%=pattern_library%>/source/fonts/',
        src:['**'],
        dest: 'fonts/'
      },
      {
        expand: true, 
        cwd: '<%=node_modules%>/<%=pattern_library%>/source/images/',
        src:['**'],
        dest: 'images/'
      },

    ],
  },
}