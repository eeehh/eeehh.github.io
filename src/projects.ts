import { BarChart, BookOpen, Code, ExternalLink, GitHub, Icon, Plus } from 'react-feather'

export interface Snippet {
  title: string
  caption?: string
  code: string
  lang?: string
}

export interface Project {
  title: string
  starred?: true
  tags: string[]
  description: string
  snippets?: Snippet[]
  image?: string
  buttons?: { text: string, link: string, icon: Icon }[]
}

export const projects: Record<string, Project> = {
  'dynodel': {
    title: 'Dynodel',
    tags: ['Frontend', 'Backend', 'Games', 'Utilities', 'JavaScript', 'Python'],
    starred: true,
    description: `Dynodel is a collection of some of my small but amusing creations, suggested by friends or just random ideas.
    
    For these projects, the focus wasn't on beautiful design or perfect functionality - it was on making something fun.
    
        <a href="https://bruhsynth.dynodel.com" target="_blank">bruhsynth</a> is an online keyboard which plays a number of unique sound effects.
        
        <a href="https://rhythm.dynodel.com" target="_blank">lachlanrhythm</a> is a tool for playing back polyrhythms.
        
        <a href="https://wave.dynodel.com" target="_blank">lachlanwave</a> is a tool for playing and combining sound waves. Use the A=432Hz mode for optimised tranquility.
        
        <a href="https://quicksearch.dynodel.com" target="_blank">quicksearch</a> was one of my first projects, before the functionality was implemented into Chrome's native search bar.
        
        <a href="https://endlesstruck.dynodel.com" target="_blank">endlesstruck</a> was my first website, it's pretty self explanatory.`,
    buttons: [
      { text: 'Dynodel Home', link: 'https://dynodel.com', icon: ExternalLink }
    ]
  },
  'lachlanprogramming': {
    title: 'lachlanprogramming',
    tags: ['Frontend', 'Utilities', 'JavaScript', 'TypeScript', 'Git', 'React'],
    starred: true,
    description: `lachlanprogramming is a website I decided to make while bored, to both practise my skills and knowledge and to share said knowledge with more people. It features useful tools and simulators to learn about and play with certain programming concepts.
    
    At the moment there's only one tool, VSML, which is an assembly-like language/basic programming interface that helps to learn how the CPU fetch-execute cycle works and runs programs. I plan to work on more tools in the near future.`,
    buttons: [
      { text: 'lachlanprogramming', link: 'https://programming.dynodel.com', icon: Code }
    ]
  },
  'lachlanworld': {
    title: 'lachlanworld',
    tags: ['Frontend', 'Backend', 'Games', 'JavaScript', 'Python', 'MySQL'],
    description: `My journey into multiplayer open-world games started and ended (at least for now) with lachlanworld.
    
    lachlanworld is a website where anyone who joins is placed in an open world with everyone else currently in the game. Players can move and explore around the small environment, and at one stage were able to interact with one another.
    
    As an added bonus, the day-night cycle in lachlanworld is based directly on moontime!
    
    Unfortunately, a combination of difficulties with performance and CORS issues ended with this project being placed on pause. However it's something I'd definitely like to get back into someday.`,
    image: 'lachlanworld.png'
  },
  'lachlantransfer': {
    title: 'lachlantransfer',
    tags: ['Frontend', 'Backend', 'Utilities', 'JavaScript'],
    description: `When I moved on from my <a href="https://bitprostore.com/wp-content/uploads/2020/08/mac_mb13_5decf_00967.jpg" target="_blank">2010 macbook</a>, I was pretty disappointed to see the lack of decent cross-platform file transfer options for my Windows laptop. And thus, lachlantransfer was born.
    
    lachlantransfer is very simple. Anyone can upload a file, and anybody who was on the site when the file was uploaded will be able to view and download it. I even added some i18n, with the help of Google Translate (not my proudest moment).
    
    It would be extremely easy to view files from before you visited the webpage, that mechanism is client-side. I could fix that, but I haven't, because the service simply isn't intended to be private. Just easy to use for those in the know.`,
    buttons: [
      { text: 'lachlantransfer', link: 'https://transfer.dynodel.com', icon: ExternalLink }
    ]
  },
  'lachlanblackjack': {
    title: 'lachlanblackjack',
    tags: ['Frontend', 'Backend', 'Games', 'JavaScript'],
    description: `In a Year 11 Software class, we were doing some basic programming with a deck of cards, and the challenge was to make a tkinter implementation of blackjack in Python. I took the rebellious approach of using a <em>different language</em> (oh the horror!) and making a web version instead.
    
    And thus, lachlanblackjack was born. And that wasn't enough, so I made it multiplayer too. And <em>that</em> wasn't enough either, so recently, I also added a basic currency (lachlancoin) and bank (lachlanbank) used to manage a virtual currency that can be gambled within the game.
    
    There are, of course, a few bugs needing to be ironed out and some gameplay mechanics that aren't quite right. But I made the game to entertain myself and my friends, and it thoroughly achieved that purpose, so I'd consider it a success.
    
    Note: both lachlanblackjack and lachlanbank require a login, because, well, that's just how I made them.`,
    buttons: [
      { text: 'lachlanblackjack', link: 'https://blackjack.dynodel.com', icon: ExternalLink },
      { text: 'lachlanbank', link: 'https://bank.dynodel.com', icon: ExternalLink }
    ]
  },
  'sentral': {
    title: 'sentral',
    tags: ['Frontend', 'Backend', 'Utilites', 'Open Source', 'JavaScript', 'MySQL', 'Git'],
    description: `'Sentral' is the name of the management system my high school used for attendence, timetabling, announcements, detentions... basically everything. In 2019/2020, the system underwent a rewrite, producing a flawed product which was arguably worse than the original and caused a number of problems for the school.

    Thus in 2021, I made my own (limited) version, as a proof of concept that the user interface for students could be significantly improved. This project also doubled as my Year 12 major project, which included two iterations of the structured approach to software development.`,
    buttons: [
      { text: 'sentral', link: 'https://github.com/eeehh/sentral', icon: GitHub },
      { text: 'Formal Project Documentation (inc. images)', link: 'https://docs.google.com/document/d/1RXdQvviiEfYiRxVHKKYGxx5UcVv0b853iTDQysb5_FY/view', icon: BookOpen }
    ]
  },
  'kettu-api': {
    title: 'kAPI (Kettu\'s API)',
    tags: ['Backend', 'JavaScript', 'TypeScript', 'Git'],
    starred: true,
    description: `Kettu is a custom Discord chat bot, with a dedicated API for web interaction (eg the web dashboard) and internal shard management. It features a WebSocket gateway for realtime events and a RESTful API, acting as a sort of CRUD layer/interface between the multiple shards.

    This (ongoing) project is really interesting. It has quite a large functionality scope for a chat bot and needs to handle account authentication (through OAuth2), permission structures, and interaction with Discord's API. The API is written in a modular format with a focus on readability, easy extensibility and reasonable performance.
        
    The project features:
        - Thorough error handling
        - OAuth2 via Discord
        - Authentication tokens (signed and timestamped)
        - IP-based and code based multi-factor authentication
        - Request ratelimiting (account and IP based)
        - Performant JSONSchema request validation
        - RethinkDB database and migrations
        - Temporal interfaces (database feed, cron actions, and scheduled operations)

    Unfortunately, the code for this project isn't open source; however below I have featured a few snippets of the more interesting code.`,
    snippets: [
      {
        title: 'Message Collector',
        caption: 'In some cases, a HTTP API route needs to retrieve data from a connected WebSocket client. The following class provides a useful interface between WS and HTTP, by collecting socket messages according to filters and returning them through the EventEmitter structure.',
        code: `// The collector captures and stores messages received from WebSocket clients
        class Collector extends EventEmitter {
          constructor (filter, options) {
            super()
        
            this.filter = filter || (() => true)
            this.options = options
            this.collected = []
            this.ended = false
        
            // set an initial timeout if the time or idle options are set
            const delay = this.options.time || this.options.idle
            if (delay) this.timeout = setTimeout(this.end.bind(this), delay)
          }
        
          capture (client, message) {
            if (this.ended) return
            // apply filtering
            const result = this.filter({ client, message })
            if (!result) return
        
            this.collected.push({ client, message })
            this.emit('collect', { client, message })
            // end collection if the maximum number of items are reached (according to the options)
            if (this.options.max && this.collected.length >= this.options.max) this.end()
            // if idle is set, reset timeout
            if (this.options.idle && this.timeout) {
              clearTimeout(this.timeout)
              this.timeout = setTimeout(this.end.bind(this), this.options.idle)
            }
          }
        
          end () {
            if (this.ended) return
            this.ended = true
            this.emit('end', this.collected)
          }
        }`
      }, {
        title: 'Request Schema Verification',
        caption: 'Manually verifying request bodies for individual HTTP endpoints is highly inefficient. Using the <a href="http://npmjs.org/package/jsonschema" target="_blank">jsonschema</a> npm package, I put together a very simple payload validation system.',
        code: `// schemas/guild.js
        module.exports.push({
          id: '/ModifyGuild',
          type: 'object',
          properties: {
            prefix: { type: 'string', pattern: /^[^\\s ]{1,32}$/ }
          },
          additionalProperties: false
        })
        
        // routes/guilds.js
        router.patch('/:guild', ratelimiter('patch-guild'), failsafe(async (req, res) => {
          if (!req.user.perms.has('MANAGE_GUILDS_GLOBAL')) {
            return res.status(403).send({
              code: 50001,
              message: 'Missing access'
            })
          }
        
          const result = validate('/ModifyGuild', req.body)
          if (!result.valid) {
            return res.status(400).send({
              code: 50004,
              message: 'Invalid form body',
              errors: result.errors
            })
          }
        
          // ...
        }))`
      }, {
        title: 'Sharded Data Collection',
        caption: `When a user visits the web dashboard, they need to be provided with a list of guilds (sort of big group chats in Discord) that they have permissions to manage.
        
        This problem becomes complicated, as the following needs to happen:
            - The list of all guilds the user is in is fetched from Discord's API through OAuth2.
            - A message is sent to all of Kettu's Bot shards, requesting the data for all those guilds.
            - These messages are collected and the data aggregated to determine which guilds the user has permission to access, which is dependent on the guild's configuration stored in the database.
            - Shards that provide no response should be marked as offline.

        And on top of all of this, the process must happen as fast as possible to ensure a quality user experience.`,
        code: `async function fetchUserGuilds () {
          // Retrieve the user's guilds from Discord, or return an error if that fails
          const result = await requestAs(dAPI.api.users('@me').guilds.get, req.user, { r })
          if (result.status) {
            return res.status(result.status).send({
              code: result.code,
              message: result.message
            })
          }
        
          // Find the configs for the guilds, where possible
          const configs = await r.dbc.guilds
            .filter(guild => r.expr(result.map(g => g.id)).contains(guild('id'))).run()
        
          // Construct the initial response object, defaulting all bots in all guilds to errored
          // Also, mark guilds that Kettu isn't in as invitable
          const response = result.map(g => {
            const config = configs.find(c => c.id === g.id)
            const invitable_perms = [1 << 3, 1 << 5]
            const manageable = (g.owner || invitable_perms.some(p => (g.permissions & p) === p))
            return config
              ? {
                  id: g.id,
                  bots: Object.keys(config.configs),
                  allowed: [],
                  errored: Object.keys(config.configs),
                  meta: {},
                  lost: true,
                  manageable
                }
              : (manageable ? { id: g.id, invitable: true } : null)
          }).filter(g => g)
        
          // Track ACKs
          let awaiting = []
        
          // Retrieve Guilds payload to send to all shards
          // The shards will respond by sending the guild metadata, roles,
          //   and the specific member object
          const payload = response.map(g => ({
            id: g.id,
            meta: true,
            roles: true,
            members: [req.user.id]
          }))
        
          // Start collecting
          const start = Date.now()
          const nonce = Math.round(Math.random() * 1e10).toString(16)
          const filter = ({ message }) => message.op === 10 && message.n === nonce
          // Create a collector which expires after 2s of inactivity
          const collector = wss.createCollector(filter, { idle: 2000 })
        
          collector.on('collect', async ({ client, message }) => {
            // Handle ACKs
            if (awaiting.includes(client)) awaiting = awaiting.filter(c => c !== client)
            if (message.a) {
              awaiting.push(client)
              return
            }
        
            // Iterate over guilds
            for (const guild of message.d) {
              // Get the pending response and fail if there isn't one (should never happen)
              const guild_response = response.find(g => g.id === guild.id)
              if (!guild_response) continue
              guild_response.lost = false
        
              // Set the guild metadata
              const keys = [
                'banner',
                'icon',
                'description',
                'memberCount',
                'name',
                'nameAcronym',
                'shardID'
              ]
              for (const k of Object.keys(guild.meta).filter(k => keys.includes(k))) {
                guild_response.meta[k] = guild.meta[k]
              }
        
              // Get the guild's config and create if it doesn't exist
              let guild_config = configs.find(c => c.id === guild.id)
              if (!guild_config || guild_response.invitable) {
                guild_config = { id: guild.id, configs: { [client.session.user.id]: {} } }
                await r.dbc.guilds.insert(guild_config).run()
                guild_response.invitable = false
                guild_response.bots = guild_response.errored = [client.session.user.id]
                guild_response.allowed = []
              }
        
              // Util function to mark a certain bot as allowed or not
              function allowed (yay) {
                const extracted = guild_response.errored
                  .splice(guild_response.errored.indexOf(client.session.user.id), 1)[0]
                if (yay) guild_response.allowed.push(extracted)
              }
        
              // Allow if owner, otherwise check roles to allow or not
              if (guild.meta.ownerID === req.user.id) allowed(true)
              else {
                const possible_roles = ['mod', 'admin'].map(r => {
                  return guild_config.configs[client.session.user.id]?.mod?.role?.[r]
                }).filter(r => r)
                const member = guild.members.find(m => m.userID === req.user.id)
                if (!member) continue
                // If no roles are set up, default to ADMINISTRATOR and MANAGE_GUILD
                if (possible_roles.length) {
                  const has_roles = possible_roles.some(role => (member.roles || []).includes(role))
                  allowed(has_roles)
                } else allowed(guild_response.manageable)
              }
            }
        
            // If we aren't waiting for anything, return!
            const waiting = response.filter(g => g.bots).map(g => g.errored.length)
            if (!waiting.some(n => n > 0)) return collector.end()
        
            // And a nice little timeout
            if (Date.now() - start > 1000 && awaiting.length === 0) return collector.end()
          })
        
          // Default timeout
          setTimeout(() => awaiting.length === 0 ? collector.end() : null, 2000)
        
          // Once ended, update cache and send the HTTP response
          collector.once('end', async () => {
            await r.dbc.users.get(req.user.id).update({
              guilds: { cache: response, time: Date.now() }
            }).run()
            res.status(200).send({ guilds: response, cached: false })
          })
        
          // Send the payload to start collecting responses
          wss.sessions
            .filter(s => s?.user?.type === 'kettu')
            .forEach(s => s.send({ op: 10, d: payload, n: nonce }, r, false))
        }`
      }, {
        title: 'Ratelimiting',
        caption: 'To prevent excessive usage of Kettu\'s API, I implemented a ratelimiting system.',
        code: `module.exports = ({ r }) => (bucket, mode = 'auto') => async (req, res, next) => {
          // invalid configuration
          if (mode === 'user' && !req.user) {
            return res.status(500).send({
              code: 40004,
              message: 'Invalid route configuration (identifier)'
            })
          }
        
          // no ratelimits for kettu!
          if (req.user?.type === 'kettu') return next()
        
          const ids = {
            auto: req.user?.id || (req.headers['x-forwarded-for'] || '127.0.0.1'),
            user: req.user?.id, ip: req.headers['x-forwarded-for'] || '127.0.0.1'
          }
          const id = ids[mode]
        
          const bucketdata = await r.dbc.ratelimit_configs.get(bucket).run()
          if (!bucketdata) {
            return res.status(500).send({
              code: 40004,
              message: 'Invalid route configuration (bucket)'
            })
          }
        
          const userbucket = await r.dbc.ratelimits.filter({
            bucket: bucket,
            identity: id
          }).run()
        
          function applyHeaders (data, t = Date.now()) {
            if (bucket === 'global') res.set('X-RateLimit-Global', 'true')
            else res.removeHeader('X-RateLimit-Global')
            res.set({
              'X-RateLimit-Limit': bucketdata.n,
              'X-RateLimit-Remaining': bucketdata.n - data.size,
              'X-RateLimit-Reset': (data.creation + bucketdata.per) / 1000,
              'X-RateLimit-Reset-After': (data.creation + bucketdata.per - t) / 1000,
              'X-RateLimit-Bucket': bucketdata.id
            })
          }
        
          if (!userbucket.length) {
            const newbucket = { bucket, identity: id, creation: Date.now(), size: 1 }
            await r.dbc.ratelimits.insert(newbucket).run()
            applyHeaders(newbucket)
          } else {
            // delete duplicate buckets where necessary
            const recent = userbucket.sort((a, b) => b.creation - a.creation)[0]
            if (userbucket.length > 1) {
              await r.dbc
                .ratelimits
                .filter(r.row('creation').lt(recent.creation))
                .delete()
                .run()
            }
            // ensure bucket hasn't expired
            if (Date.now() - recent.creation >= bucketdata.per) {
              // it has!
              await r.dbc.ratelimits.get(recent.id).delete().run()
              const newbucket = { bucket, identity: id, creation: Date.now(), size: 1 }
              await r.dbc.ratelimits.insert(newbucket).run()
              applyHeaders(newbucket)
            } else {
              // now check bucket overflow
              if (recent.size > bucketdata.n) {
                // they hit a ratelimit!
                const t = Date.now()
                applyHeaders(recent, t)
                return res.status(429).send({
                  message: 'You are being ratelimited',
                  retry_after: (recent.creation + bucketdata.per - t) / 1000,
                  global: Boolean(bucket === 'global')
                })
              } else {
                // increment the size
                recent.size += 1
                await r.dbc
                  .ratelimits
                  .get(recent.id)
                  .update({ size: recent.size })
                  .run()
                applyHeaders(recent)
              }
            }
          }
        
          next()
        }`
      }
    ],
    buttons: [
      {
        text: 'Public API Documentation',
        link: 'https://github.com/kettubot/kAPI-docs',
        icon: BookOpen
      }, {
        text: 'API Base Endpoint',
        link: 'https://api.kettu.cc',
        icon: ExternalLink
      }, {
        text: 'API Test Page',
        link: 'https://api.kettu.cc/test',
        icon: ExternalLink
      }
    ]
  },
  'kettu-bot': {
    title: 'Kettu (The Bot)',
    tags: ['Backend', 'JavaScript', 'Git'],
    description: `Kettu is a custom Discord chat bot, serving about 500,000 users across 2000+ Discord servers (big group chats).
    
    As the project scales in size, so must the software architecture, leading to the development of <a href="#section-kettu-api">Kettu's API</a> and separating the singular bot process into multiple shards.
    
    This project is co-owned by myself and another developer. I'm generally responsible for the API, website, and inner workings of the bot while the other developer focuses more on the actual interactions and bot features.
    
    Unfortunately, just like the API, the code for the bot isn't open source. However, I have once again featured a few snippets of the more interesting code.`,
    snippets: [
      {
        title: 'Automated Tests',
        caption: `Kettu is made up of 'commands', which are certain actions users can trigger to perform tasks. Some commands have different required permissions, unique names, unique aliases, and more.
        
        Ensuring this data is correct is very, very important. For example, if a command's permissions are configured incorrectly, users may be able to access commands they shouldn't be allowed to. For this reason, I've implemented automated tests (mocha and chai) to validate all configuration.`,
        code: `describe('Command Structure Tests', () => {
          for (const command of commands) {
            it(command.name + '.js', () => {
              expect(command.name).to.be.a('string')
              expect(command.execute).to.be.a('function')
              
              if (command.aliases) {
                expect(command.aliases).to.be.an('array')
                for (a of command.aliases) {
                  expect(a).to.be.a('string')
                  const notthiscommand = commands.filter(c => c !== command)
        
                  const matchingname = notthiscommand.find(c => c.name === a) || {}
                  expect(a).to.not.be.oneOf(
                    notthiscommand.map(c => c.name),
                    \`colliding command name & alias (\${matchingname.filename})\`
                  )
        
                  const matchingalias = notthiscommand.find(
                    c => c.aliases
                    && c.aliases.includes(a)
                  ) || {}
                  expect(a).to.not.be.oneOf(
                    notthiscommand.reduce((t, c) => t.concat(c?.aliases || []), []),
                    \`colliding command aliases (\${matchingalias.filename})\`
                  )
                }
              }
        
              if (command.shortDescrip) expect(command.shortDescrip).to.be.a('string')
              if (command.longDescrip) expect(command.longDescrip).to.be.a('string')
              if (command.perm) expect(command.perm.toLowerCase()).to.be.oneOf(
                ['everyone', 'helper', 'mod', 'admin', 'bot_admin', 'bot_owner']
              )
        
              if (command.cmdPerm) {
                expect(command.cmdPerm).to.be.an('array')
                for (p of command.cmdPerm) {
                  expect(p)
                    .to.be.oneOf(Object.keys(djs.Permissions.FLAGS))
                    .but.not.oneOf(['SEND_MESSAGES', 'EMBED_LINKS'])
                }
              }
            })
          }
        })`
      }, {
        title: 'Failsafe',
        caption: `In version 3 of Kettu, we had issues with uncaught exceptions causing the bot to crash occasionally. Although our commands had try/catches to prevent crashing, this didn't apply to callback functions, which became a problem.
        
        In version 4 of Kettu, I developed a mechanism named 'failsafe', which is a sort of shortcut to wrap callback functions in a try/catch and prevent crashing. It also allows us to show a friendly error message to the user.`,
        code: `// In the message handler
        const failsafe = (fn, location, extradata) => async (...args) => {
          try {
              const res = await fn(...args)
              return res
          } catch(e) {
              cmdError(msg, client, e, args, command, 
                location || 'unknown', Object.assign(extradata, stuff))
          }
        }
        
        // Command function callback example
        const collector = msg.createReactionCollector()
        collector.on('collect', failsafe(async (reaction, user) => {
          throw new Error('catch me if you can!')
        }, 'collector-collect'))`
      }, {
        title: 'Argument Parsing',
        caption: `When a user invokes a command, it can become a fairly involved process to validate their input and ensure all values are correct.
        
        To make this simpler, I developed a special syntax which could be used to define the expected arguments for a command. These arguments would then be validated, and in some cases, substituted with the appropriate data. For example, number inputs formatted as strings casted to numbers.
        
        If the input validation fails, the user will be shown a friendly auto-generated error message. This removes almost all need for validation from the actual command handling function, drastically reducing code repetition.`,
        code: `// In a command's options
        {
          ...
          args: [
            new Arg('[@User/ID/UserName/Nickname or All/Animal/Social/CommandName/Help')
              .member({ search: true })
              .or.string({ of: ["all", "animal", "social", "help", ... /* etc */] })
              .optional()
          ]
        }
        
        // In the command's execute function
        function execute (msg, client, args) {
          console.log(args)
          // will look something like:
          [
            {
              type: 'member',
              options: { search: true },
              input: 'eeehh',
              output: { /* discord.js member object */ }
            }
          ]
        
        }`
      }
    ],
    buttons: [
      { text: 'Invite to Discord', link: 'https://kettu.cc/invite?ref=eeehhPortfolio', icon: Plus }
    ]
  },
  'kettu-status-page': {
    title: 'Kettu\'s Status Page',
    tags: ['Frontend', 'Backend', 'JavaScript', 'Git', 'React'],
    description: `As Kettu grows, it becomes more important to schedule downtime and precisely inform users about ongoing interruptions in the service.
    
    To accomodate this need, I developed a status page to automatically display current status. Certain users can add interruptions (either incidents or maintenance), which then update the status of affected services during their downtimes.
    
    Features include:
        - 15-second interval uptime pings
        - Automatic status updating
        - Daily uptime summarizing
        - 3-month uptime history
        - 5-minute interval gateway connection ping
        - Interruptions (incidents and maintenance)
        - Manual status override`,
    buttons: [
      { text: 'Kettu Status', link: 'https://status.kettu.cc', icon: BarChart }
    ]
  },
  'kettu-website': {
    title: 'Kettu\'s Website',
    tags: ['Frontend', 'Backend', 'JavaScript', 'TypeScript', 'Git', 'React'],
    description: `Kettu's website provides an interface where users can read documentation, view dashboards for their servers, and find links to our support server and for inviting the bot.
    
    The website in it's <a href="https://kettu.cc" target="_blank">current state</a> is a mess of code and design, which is fairly inconsistent.
    
    However, alongside the development of version 4, I'm producing a new website. Instead of the mess of non-frameworked HTML/CSS/JS, the new website is built with next.js and React. The goal of this change is to improve readability of code, and introduce a more consistent design specification.
    
    Note: the new website is heavily under construction, and there aren't many public pages yet.`,
    buttons: [
      { text: 'New Website Dev Build', link: 'https://dev.kettu.cc', icon: ExternalLink }
    ]
  },
  'kettu-kdjs': {
    title: 'kdjs (Kettu & discord.js)',
    tags: ['Libraries', 'Open Source', 'JavaScript', 'TypeScript', 'Git'],
    description: `Kettu uses a popular discord bot library, <a href="https://github.com/discordjs/discord.js" target="_blank">discord.js</a>. However, the construction of our custom API and extended functionality caused the library to become more and more limiting.
    
    To overcome this issue, I maintain a small project called 'kdjs' which extends the library's functionality specifically for Kettu. It extends the native classes to add a 'kettu' property, which in turn provides access to a new object with the specific information for that object relating to Kettu.
    
    On top of this, the library also maintains a double websocket connection (with Discord and kAPI), where it's crucial that both connections are consistently functional.`,
    buttons: [
      { text: 'kdjs GitHub', link: 'https://github.com/kettubot/kdjs', icon: GitHub }
    ]
  },
  'moontime': {
    title: 'Moontime',
    tags: ['Libraries', 'Utilities', 'Open Source', 'JavaScript', 'Git'],
    starred: true,
    description: `Beginning as a joke between friends, Moontime is now a totally custom timekeeping system based on the lunar cycle. While totally arbitrary, with only minor relations to solar-based time, this system is very accurate and currently available as a Chrome new tab page extension, used by tens of people all over the city.
    
    Not only is the epoch of this system the release date of Bonnie Tyler's <a href="https://www.youtube.com/watch?v=lcOxhH8N3Bo" target="_blank">Total Eclipse of the Heart</a>, this library also synchronises to a centralised API, allowing users to keep their clocks perfectly in sync - unless their computer is offline, in which case time is calculated off the local time.`,
    buttons: [
      { text: 'Library GitHub', link: 'https://github.com/eeehh/moontime', icon: GitHub },
      { text: 'Chrome Extension', link: 'https://chrome.google.com/webstore/detail/moon/pkmifcpdpojpgejapnpedemfpfddflee', icon: ExternalLink },
      { text: 'Extension GitHub', link: 'https://github.com/eeehh/moontime_extension', icon: GitHub }
    ]
  },
  'plob': {
    title: 'plob',
    tags: ['Frontend', 'Libraries', 'Open Source', 'JavaScript', 'Git'],
    description: `Now I'll be the first to admit that 'plob' is a rather meaningless name. But it's actually a tactic to increase interest in the project, after all, 'single-page-application-router' is very long and boring.
    
    That's what plob is though, a very simple router for single page applications, with support for 'static' (always rendered) and 'dynamic' (rendered on the fly) pages. It uses the History API to update the page URL on navigation without actually reloading.
    
    I've used plob in a couple of my personal projects, most notably <a href="#section-kettu-status">Kettu Status</a> and <a href="#section-sentral">sentral</a>.`,
    buttons: [
      { text: 'plob', link: 'https://github.com/eeehh/plob', icon: GitHub }
    ]
  },
  'github-repo-sync': {
    title: 'github-repo-sync',
    tags: ['Backend', 'Utilities', 'Open Source', 'JavaScript', 'Git'],
    description: `Unlike plob, github-repo-sync does exactly what the name implies. It's a small HTTP server used to execute scripts when commits are pushed to a GitHub repository, usually to update a remote clone and restart the service.
    
    The project is really very simple, and based on a DigitalOcean tutorial I used a while ago. I also advertise it as 'zero dependencies', but let's be real, it's not getting bundled for the web so that's pretty irrelevant.
    
    I have an instance of github-repo-sync on my server, which is managing deployment for: itself (fancy), Kettu, Kettu Status, Kettu's Website, kAPI, and another small Discord bot.`,
    buttons: [
      { text: 'github-repo-sync', link: 'https://github.com/kettubot/github-repo-sync', icon: GitHub },
      { text: 'Refence Tutorial', link: 'https://www.digitalocean.com/community/tutorials/how-to-use-node-js-and-github-webhooks-to-keep-remote-projects-in-sync', icon: ExternalLink }
    ]
  },
  'number-guess-game': {
    title: 'number guess game',
    tags: ['Games'],
    description: `This project is unlike the others, but I'm proud of it, and there's a short story to explain how it came about. This happened in July 2017 (so I was 13), before I made my way into web development, and I was instead making iOS apps (none of them were any good).
    
    Someone at my Dad's work came up with a game, where everyone guessed a number. The winner was whoever guessed a number closest to 2/3 of the average of everyone's guesses.
    
    I designed a system (in Swift) to calculate the most optimal number. It took an input of the estimated general 'intelligence' of people in the workplace, and sorted the number of people playing into groups, predicting their guesses based on their group and simulating the situation to provide an optimal result.
    
    Once complete, I installed the app onto my Dad's phone, and the answer came out: 19 (the range was 0-50). I almost instantly suggested to run it again because that answer just didn't seem right, but he refused, submitting that answer. And he won.`,
    buttons: [
      { text: 'GitHub Gist (swift)', link: 'https://gist.github.com/eeehh/1de1fdc7dff5be0b79ec2f8b386ad926', icon: GitHub }
    ]
  }
}
