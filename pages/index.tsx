import { Layout, Page, Text, List } from '@vercel/examples-ui'

export default function Index() {
  return (
    <Page>
      <Text variant='h2' className='mb-6 text-2xl font-bold'>
        Take Home Exercise
      </Text>
      <Text variant='h2' className='mb-6 text-xl font-semibold'>
        Exercise 1: Favorite and Least Favorite Support Tasks
      </Text>
      <ul className='list-disc list-inside space-y-4'>
        <li>
          <p className='font-semibold'>
            1 : Work with people to figure out if Vercel is suitable for their
            use case
          </p>
          <p>
            This role helps me connect with people and allows users to
            understand the product effectively. It&apos;s a deep, consultative
            position that can create long-lasting relationships and advocacy.
          </p>
        </li>
        <li>
          <p className='font-semibold'>
            2 : Engage multiple users at once in a public discussion to answer
            their questions and troubleshoot problems
          </p>
          <p>
            Engaging with users publicly fosters community trust and growth.
            Participating in discussions helps build visibility as a thought
            leader while resolving real-time issues that might affect multiple
            users simultaneously.
          </p>
        </li>
        <li>
          <p className='font-semibold'>
            3 : Respond to queries on Twitter, Reddit, Hacker News, and other
            third-party sites
          </p>
          <p>
            Social engagement can be tricky but is very valuable for creating
            brand recognition. I enjoy the discussions that developers have on
            social platforms like Reddit, Discord, and more. It helps me stay
            updated on various real-life use cases.
          </p>
        </li>
        <li>
          <p className='font-semibold'>
            4 : Help train and onboard new support teammates
          </p>
          <p>
            As a DevRel professional, training new support teammates means
            ensuring they align with the brand&apos;s mission and understand
            developers&apos; needs. It helps scale our reach through the team,
            improving the overall user experience and reinforcing a
            developer-centric culture.
          </p>
        </li>
        <li>
          <p className='font-semibold'>
            5 : Create video tutorials to help teach users a specific feature or
            use case
          </p>
          <p>
            Creating content is one of the best aspects of my DevRel journey.
            This is where I feel I can connect with people by sharing my
            thoughts. It allows me to reach a wide audience asynchronously. The
            interesting part is providing tutorials that can simplify complex
            features.
          </p>
        </li>
      </ul>
      <ul className='list-disc list-inside space-y-4 mt-6'>
        <li>
          <p className='font-semibold'>
            1 : Respond to 25+ support requests via email every day
          </p>
          <p>
            While responding to a high volume of support requests is essential,
            it can sometimes feel repetitive and overwhelming. The sheer number
            of emails can make it challenging to provide personalized responses.
          </p>
        </li>
        <li>
          <p className='font-semibold'>
            2 : Help resolve billing issues for customers
          </p>
          <p>
            Billing issues can often be sensitive and complex. Navigating
            financial inquiries can be stressful as it requires understanding of
            needs as per budget, which requires a detailed understanding of
            policies, which can sometimes detract from more enjoyable, proactive
            engagements.
          </p>
        </li>
        <li>
          <p className='font-semibold'>
            3 : Dig through logs to troubleshoot a customer&apos;s broken
            project
          </p>
          <p>
            While troubleshooting is a critical skill, digging through logs can
            feel tedious and time-consuming. It often involves sifting through
            technical details without immediate interaction with users, making
            it less engaging.
          </p>
        </li>
        <li>
          <p className='font-semibold'>
            4 : Analyze hundreds of support tickets to spot trends the product
            team can use
          </p>
          <p>
            This can be a bit monotonous. Going through hundreds of tickets
            requires a lot of focus, and it can sometimes feel disconnected from
            direct user interactions. This task can lack the immediate
            satisfaction of resolving a customer&apos;s issue.
          </p>
        </li>
        <li>
          <p className='font-semibold'>Manage a support team</p>
          <p>
            5 : I have not yet managed a team, so I think balancing team
            dynamics, addressing performance issues, and ensuring everyone is
            aligned with the goals can be stressful. It often requires more
            administrative work than direct engagement with users, which might
            feel less fulfilling for someone who prefers hands-on support roles.
          </p>
        </li>
      </ul>
      <Text variant='h2' className='mb-6 text-xl font-semibold'>
        Exercise 2: PROs/CONs/Use cases
      </Text>
      <div className='space-y-4'>
        <p className='font-semibold'>Edge Functions</p>
        <p className='font-semibold'>Pros</p>
        <ul className='list-disc list-inside space-y-2'>
          <li>
            Edge Functions run on a lightweight runtime, providing faster
            compute at a fraction of the cost compared to traditional
            serverless.
          </li>
          <li>
            Developers can now choose regional preferences for functions,
            improving performance when paired with data sources.
          </li>
          <li>
            Integration with Next.js, SvelteKit, Nuxt, Astro, and standalone
            with the Vercel CLI.
          </li>
        </ul>
        <p className='font-semibold'>Cons</p>
        <ul className='list-disc list-inside space-y-2'>
          <li>
            While global compute is fast, tasks that require database queries
            from distant regions may experience higher latency, which can negate
            performance benefits.
          </li>
          <li>
            Developers unfamiliar with WebAssembly or Edge computing might face
            a steep learning curve when adopting these functions.
          </li>
        </ul>
        <p className='font-semibold'>Use case</p>
        <p>
          They&apos;re great for tasks like dynamic content generation,
          personalized user experiences, real-time interactions, and API
          routing. You can even specify regions for database queries to minimize
          delays. With support for WebAssembly, they handle complex computations
          quickly, making them ideal for efficient, cost-effective, and
          global-scale projects.
        </p>
        <p className='font-semibold'>Serverless Functions</p>
        <p className='font-semibold'>Pros</p>
        <ul className='list-disc list-inside space-y-2'>
          <li>
            This feature scales automatically with traffic, handling concurrent
            requests without additional setup.
          </li>
          <li>
            Particularly beneficial for server-rendering, APIs, and AI models
            that involve waiting for backend responses.
          </li>
        </ul>
        <p className='font-semibold'>Cons</p>
        <ul className='list-disc list-inside space-y-2'>
          <li>
            Although concurrency is efficient, it may increase latency for tasks
            heavily dependent on CPU processing.
          </li>
          <li>
            Some Node.js functions may need adjustment due to changes in how
            invocations are handled concurrently.
          </li>
        </ul>
        <p className='font-semibold'>Use Case</p>
        <p>
          This feature is ideal for high-traffic applications that involve
          asynchronous workloads, like e-commerce websites, API-heavy
          applications, or AI-driven tools where requests frequently involve
          idle compute time. It can handle multiple user requests more
          efficiently, reduce costs, and maintain high performance without the
          need for managing servers.
        </p>
        <p className='font-semibold'>Edge Middleware</p>
        <p className='font-semibold'>Pros</p>
        <ul className='list-disc list-inside space-y-2'>
          <li>
            It enables customized responses before serving cached content, such
            as personalized user experiences.
          </li>
          <li>
            It supports a range of use cases, from A/B testing and JWT
            authentication to security and bot protection.
          </li>
          <li>
            Runs on Vercel&apos;s global edge network, reducing latency and
            improving performance for end users.
          </li>
        </ul>
        <p className='font-semibold'>Cons</p>
        <ul className='list-disc list-inside space-y-2'>
          <li>
            If using a distant database, requests could experience slower
            response times. A global database solution is recommended to avoid
            this issue.
          </li>
        </ul>
        <p className='font-semibold'>Use Case</p>
        <p>
          Edge Middleware is ideal for applications requiring real-time
          personalization or security, such as e-commerce websites tailoring
          user experiences or websites needing bot protection. It&apos;s also
          useful for scenarios like A/B testing at the edge, improving
          performance by quickly adapting responses based on user data without
          backend delays.
        </p>
      </div>
      <Text variant='h2' className='mb-6 text-xl font-semibold'>
        Exercise 3: Describe how you solved a technical issue that you faced in
        a previous role (preferably in a previous support role). How did you
        determine that your solution was successful?
      </Text>
      <p>
        In a previous support role, I dealt with a CORS (Cross-Origin Resource
        Sharing) issue when a user was trying to download an image from another
        domain using the cloud platform. Every time they clicked the download
        button, they&apos;d get a CORS error, which blocked the download. To fix
        it, I recommended using a proxy URL. This proxy essentially acts as a
        middleman to bypass CORS restrictions. I guided the user to implement
        this solution using a small JavaScript code snippet to send the image
        request through the proxy. We then linked the output of that code to the
        File Download action. Once everything was set up, we tested it together.
        Upon clicking the button, the image downloaded successfully without
        errors. I confirmed the success by receiving positive feedback from the
        user and noting that they could now easily download images from external
        domains. This solution helped maintain their workflow, significantly
        improving their user experience.
      </p>
      <Text variant='h2' className='mb-6 text-xl font-semibold'>
        Exercise 4: What do you want to learn or do more of at work?
      </Text>
      <p className='mb-4'>
        At work, I&apos;m eager to engage with others and foster a strong sense
        of community. I want to be someone who actively supports and responds to
        people&apos;s ideas and projects, helping to cultivate an environment
        where creativity can flourish. My goal is to be the face of the brand.
      </p>
      <p className='mb-4'>
        Additionally, I&apos;m keen on polishing my presentation skills. I
        believe that effective communication is essential for showcasing our
        work and connecting with our audience. I want to learn more about how to
        convey ideas clearly and confidently, ensuring that our brand message
        resonates well with both clients and the community.
      </p>
      <Text variant='h2' className='mb-6 text-xl font-semibold'>
        Exercise 5: A customer writes in requesting help with a build issue but
        they are using a framework that you have not encountered before. How
        would you begin troubleshooting this and what questions would you ask
        the customer to understand the situation better?
      </Text>
      <ul className='list-disc list-inside space-y-4'>
        <li>
          <p className='font-semibold'>Gather Context:</p>
          <p>
            I would ask the customer for specific details to understand the
            issue better with questions I might ask: Describing the issue, error
            code, version of the framework, commands used, and would request
            media attachments to get more info about the encountered issue.
          </p>
        </li>
        <li>
          <p className='font-semibold'>Research:</p>
          <p>
            While waiting for the customer&apos;s response, I would start
            researching the framework: Look for official documentation, FAQs, or
            community forums. Search for similar issues in the framework&apos;s
            issue tracker or community discussions.
          </p>
        </li>
        <li>
          <p className='font-semibold'>Analyze and Respond:</p>
          <p>
            Once I have more information: I would analyze the responses to
            identify common pitfalls or known issues with the framework. Provide
            tailored troubleshooting steps or suggestions based on the
            information gathered. This segment needs to be done quickly to keep
            the customer happy.
          </p>
        </li>
        <li>
          <p className='font-semibold'>Follow Up:</p>
          <p>
            After providing assistance, I would follow up with the customer; ask
            if the issue was resolved and if they need further help. Encourage
            them to share any additional challenges they may encounter.
          </p>
        </li>
      </ul>
      <Text variant='h2' className='mb-6 text-xl font-semibold'>
        Exercise 6: The customer from question 5 replies to your response with
        the below: “I&apos;m so frustrated. I&apos;ve been trying to make this
        work for hours and I just can&apos;t figure it out. It must be a
        platform issue so just fix it for me instead of asking me questions.”
        Please write a response to the customer. Add information about your
        decision-making process after the reply.
      </Text>
      <p>
        Hey,
        <br />
        I completely understand your frustration, and I sincerely apologize for
        the difficulty you&apos;ve been experiencing. I appreciate your
        patience, and I want to assure you that I&apos;m here to help and will
        do my best to resolve this as quickly as possible.
        <br />
        To effectively assist you, I need to gather a bit more information. I
        know it&apos;s really tiring and irritating when stuck with a problem,
        but please try to understand that each framework has its unique features
        and quirks, and understanding the specific details will help me pinpoint
        the problem. If I attempt to fix it without fully grasping the
        situation, I may unintentionally overlook something crucial, which could
        lead to further delays.
        <br />
        <br />
        Here&apos;s what I&apos;d suggest:
        <li>
          If you could share any error messages you&apos;re encountering, it
          would help me narrow down the root cause.
        </li>
        <br />
        <li>
          Any relevant code snippets or configuration settings would also be
          valuable.
        </li>
        <br />
        Once I have this information, I can take a closer look and work towards
        a solution. If you&apos;d prefer, I can also begin troubleshooting while
        you gather this information. I genuinely respect the effort you&apos;ve
        put into this and appreciate your understanding as we work together to
        resolve the issue. Thank you for your continued patience, and I&apos;m
        committed to getting this resolved for you.
      </p>
      <br />
      <p>
        <strong>Decision-Making Process:</strong>
      </p>
      <ul className='list-disc list-inside space-y-4'>
        <li>
          I recognized the customer&apos;s frustration and acknowledged their
          feelings to build rapport and show that I understand their situation.
        </li>
        <li>
          I explained the importance of gathering specific details to ensure
          that any solution I provide is accurate and effective, reinforcing
          that this approach is ultimately in their best interest.
        </li>
        <li>
          By expressing my respect for their effort and assuring them of my
          commitment to resolving the issue, I aimed to instill confidence that
          we are working towards a solution together. This respectful approach
          helps maintain a positive customer relationship, even in challenging
          situations.
        </li>
      </ul>
      <Text variant='h2' className='mb-6 text-xl font-semibold'>
        Exercise 7: A customer writes in to the Helpdesk asking: &quot;How do I
        redirect from the /contact path to https://example.com?&quot; Please
        write a response to the customer. Add information about your
        decision-making process after the reply.
      </Text>
      <p>
        Hello,
        <br />
        Thank you for reaching out! I&apos;m happy to assist you with setting up
        a redirect from the `/contact` path to `https://example.com`.
        <br />
        To achieve this redirect in Vercel, you can use the `vercel.json`
        configuration file in your project. Here&apos;s a simple way to set it
        up:
      </p>
      <ul>
        <li>
          In your project&apos;s root directory, create or update the
          `vercel.json` file.
        </li>
        <li>Add the following configuration to define the redirect:</li>
      </ul>
      <pre>
        {`{
  "redirects": [
      {
       "source": "/contact",
       "destination": "https://example.com",
       "permanent": true
      }
     ]
}`}
      </pre>
      <p>
        This configuration tells Vercel to redirect any requests to `/contact`
        to `https://example.com`. The `permanent` attribute is set to `true`,
        indicating that this is a permanent redirect (HTTP status code 301).
        Once you&apos;ve added this configuration, deploy your changes, and the
        redirect should work as expected. If you have any further questions or
        need additional assistance, please don&apos;t hesitate to ask. I&apos;m
        here to help!
      </p>
      <br />
      <p>
        In crafting my response, I first focused on fully understanding the
        customer&apos;s request regarding redirecting from the `/contact` path.
        This led me to provide a clear, straightforward solution by including a
        code snippet for the `vercel.json` configuration file, ensuring the
        customer could easily implement it. I emphasized the importance of the
        `permanent` attribute to clarify its role and implications for search
        engines, demonstrating best practices. By inviting the customer to ask
        further questions, I aimed to foster an open dialogue and create a
        supportive atmosphere. Throughout, I maintained a professional and
        friendly tone to ensure the customer felt valued and encouraged to reach
        out for additional help. &quot;
      </p>
      <Text variant='h2' className='mb-6 text-xl font-semibold'>
        Exercise 8: A customer is creating a site and would like their project
        to not be indexed by search engines. Please write a response to the
        customer. Add information about your decision-making process after the
        reply.
      </Text>

      <p>
        Hey, <br />
        Thank you for reaching out! To prevent your site from being indexed by
        search engines, you can add a <code>robots.txt</code> file to your
        project. This file will instruct search engine crawlers not to index
        your site.
        <br />
        Here&apos;s how you can create a <code>robots.txt</code> file for your
        project:
      </p>

      <ul className='list-disc list-inside space-y-4'>
        <li>
          Create a new file named <code>robots.txt</code> in the root directory
          of your project.
        </li>
        <li>Add the following lines to the file:</li>
      </ul>

      <pre>
        {`User-agent: *
Disallow: /`}
      </pre>

      <p>
        This will prevent all search engine bots from indexing any part of your
        site. Once you&apos;ve added this file, simply deploy your changes, and
        your site should not be indexed.
      </p>

      <p>
        Additionally, you might want to ensure that your site has the proper
        meta tags in the HTML. You can add the following meta tag in the{" "}
        <code>&lt;head&gt;</code> section of your HTML files:
      </p>

      <pre>{`<meta name="robots" content="noindex">`}</pre>

      <p>
        This will further reinforce your intention to keep your site unindexed.
      </p>

      <p>
        If you have any questions or need further assistance, feel free to ask!
      </p>

      <br />
      <br />

      <p>
        In crafting this response, I focused on the customer&apos;s primary
        concern—preventing their site from being indexed. I opted for a
        two-pronged approach: explaining how to use a <code>robots.txt</code>{" "}
        file for broader search engine compliance and suggesting a meta tag for
        additional assurance. I included clear, step-by-step instructions to
        empower the customer to implement the solution easily. Additionally, I
        maintained a supportive tone, inviting further questions to foster a
        collaborative relationship. This approach ensures the customer feels
        guided and valued while addressing their specific needs effectively.
      </p>

      <Text variant='h2' className='mb-6 text-xl font-semibold'>
        Exercise 9: What do you think is the most common problem which customers
        ask Vercel for help with? How would you help customers to overcome this
        problem, short-term and long-term?
      </Text>
      <p>
        Many customers face issues when deploying their applications. This can
        be due to:
      </p>
      <ul className='list-disc list-inside space-y-4'>
        <li>
          Missing or incorrect build configuration for specific frameworks (like
          Next.js or React).
        </li>
        <li>
          Issues with environment variables not being properly set or recognized
          during deployment.
        </li>
        <li>
          Framework detection problems, where Vercel may not automatically
          detect the project type (e.g., if the right package.json scripts are
          missing).
        </li>
      </ul>
      <p>
        <strong>Solution:</strong>
      </p>
      <p>
        <strong>Short-term Solutions:</strong>
      </p>
      <ul className='list-disc list-inside space-y-4'>
        <li>
          Improve the specificity of error messages during deployment, directly
          linking them to relevant documentation or providing step-by-step
          instructions on fixing the issue (e.g., missing scripts in
          package.json, invalid build commands).
        </li>
        <li>
          Provide more detailed error logs that pinpoint the exact problem and
          give clear suggestions on how to fix it.
        </li>
      </ul>
      <p>
        <strong>Long-term Solution:</strong>
      </p>
      <p>
        Introduce an AI-based assistant that automatically identifies the root
        cause of deployment failures by analyzing logs, configurations, and
        common issues across projects.
      </p>

      <Text variant='h2' className='mb-6 text-xl font-semibold'>
        Exercise 10: How could we improve or alter this familiarisation
        exercise?
      </Text>
      <ul className='list-disc list-inside space-y-4'>
        <li>
          Candidates in different time zones may face challenges in adhering to
          a strict timeline due to availability constraints. Offering a flexible
          time window or allowing candidates to choose when they start the
          three-hour limit would help accommodate time zone differences and
          ensure everyone can complete the task at a suitable time.
        </li>
        <li>
          While part of the task is exploring Vercel&apos;s documentation,
          providing a few starter links to key areas (e.g., deployment
          troubleshooting, using serverless functions, or setting up domains)
          could help candidates focus on problem-solving without getting stuck
          on searching for resources.
        </li>
      </ul>
    </Page>
  );
}

Index.Layout = Layout
