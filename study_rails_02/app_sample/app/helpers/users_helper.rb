module UsersHelper
    def gravatar_for(user)
        user_id = user.id
        gravator_base_url = "https://randomuser.me/api/portraits/thumb/men/"
        image_tag("#{gravator_base_url}/#{user_id}.jpg", alt: user.name, class: "gravatar")

        # tutorial original
        # gravatar_id = Digest::MD5::hexdigest(user.email.downcase)
        # gravatar_url = "https://secure.gravatar.com/avatar/#{gravatar_id}"
        # image_tag(gravatar_url, alt: user.name, class: "gravatar")
    end
end
