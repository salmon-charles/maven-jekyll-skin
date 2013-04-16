# Octopress #

## Version 2.1 ##

1. Install 
2. Copy plugins form "plugins" to "source/_plugins":
3. Replace require "./plugins" by "./_plugins"
4. Copy "lib/colors.rb" to "source/_plugins/lib/colors.rb"
5. Replace require File.expand_path('../../lib/colors.rb', __FILE__) by by "require ./_plugins/lib/colors.rb"
6. Create "source/_config.yml"