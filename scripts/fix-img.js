hexo.extend.filter.register('after_post_render', function(data) {
  data.content = data.content.replace(
    /!\[([^\]]*)\]\((?!https?:\/\/|\/|\.\/)([^)]+)\)/g,
    '![ $1 ](./$2)'
  );
  return data;
});
