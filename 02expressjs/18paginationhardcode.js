//router 
app.get('/vist/:id?',{xyz:''});


//hard code of pagination 
var perPage = 3;
  var page = req.params.id || 1;
  var authuser = localStorage.getItem('authuser');

  allviewdetails.skip((perPage * page) - perPage)
  .limit(perPage).exec(function(err,data){
if(err) throw err;
passdetailsdata.countDocuments({}).exec((err,count)=>{    
  res.render('Viewdetails', { title: 'View Deatils',mgs : 'Password Details Page..!!',
    useris:authuser,
    records:data,
    current :page,
    pages :Math.ceil(count/perPage) ,
    del:''});
  });
});


//to print pagination links ejs
   <% if (pages > 0) { %>
            <ul class="pagination text-center">
                <% if (current == 1) { %>
                    <li class="disabled"><a>First</a></li>
                <% } else { %>
                    <li><a href="/viewdetails/1">First</a></li>
                <% } %>
                <% var i = (Number(current) > 5 ? Number(current) - 4 : 1) %>
                <% if (i !== 1) { %>
                    <li class="disabled"><a>...</a></li>
                <% } %>
                <% for (; i <= (Number(current) + 4) && i <= pages; i++) { %>
                    <% if (i == current) { %>
                        <li class="active"><a><%= i %></a></li>
                    <% } else { %>
                        <li><a href="/viewdetails/<%= i %>"><%= i %></a></li>
                    <% } %>
                    <% if (i == Number(current) + 4 && i < pages) { %>
                        <li class="disabled"><a>...</a></li>
                    <% } %>
                <% } %>
                <% if (current == pages) { %>
                    <li class="disabled"><a>Last</a></li>
                <% } else { %>
                    <li><a href="/viewdetails/<%= pages %>">Last</a></li>
                <% } %>
            </ul>
        <% } %>

