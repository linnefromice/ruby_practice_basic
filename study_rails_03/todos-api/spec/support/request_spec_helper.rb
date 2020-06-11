module RequestSpecHolder
    def json
        JSON.parse(response.body)
    end
end