# This migration comes from blorgh (originally 20200719153123)
class AddAuthorIdToBlorghArticles < ActiveRecord::Migration[6.0]
  def change
    add_column :blorgh_articles, :author_id, :integer
  end
end
