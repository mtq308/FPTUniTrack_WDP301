{
    "count": 15,
    "next": null,
    "previous": null,
    "results": [
        {
            "_class": "assessment",
            "id": 68935230,
            "assessment_type": "multiple-choice",
            "prompt": {
                "question": "Choose a correctly flow for creating a Unit TestCase?",
                "answers": [
                    "Setup ,Prepare an input, Call a method, Check a out put, Tear down\n",
                    "Prepare an input,Setup , Call a method, Check a out put, Tear down\n",
                    "Call a method,Prepare an input,Setup , Check a out put, Tear down\n",
                    "Setup , Call a method, Prepare an input,Check a out put, Tear down\n"
                ],
                "explanation": ""
            },
            "correct_response": [
                "a"
            ],
            "section": "",
            "question_plain": "Choose a correctly flow for creating a Unit TestCase?",
            "related_lectures": []
        },
        {
            "_class": "assessment",
            "id": 68935232,
            "assessment_type": "multi-select",
            "prompt": {
                "question": "Choose correct statements about manual test vs Automated test",
                "answers": [
                    "Automated Tests provide limited Visibility and have to be Repeated by all Stakeholders\n",
                    "Automated Tests is not reusable\n",
                    "Manual Tests provide limited Visibility and have to be Repeated by all Stakeholders\n",
                    "Automated Tests are completely reusable\n"
                ],
                "explanation": ""
            },
            "correct_response": [
                "c",
                "d"
            ],
            "section": "",
            "question_plain": "Choose correct statements about manual test vs Automated test",
            "related_lectures": []
        },
        {
            "_class": "assessment",
            "id": 68935234,
            "assessment_type": "multi-select",
            "prompt": {
                "question": "Choose correct statements about manual test vs Automated test",
                "answers": [
                    "Manual Testing requires complex Manual Setup and Tear Down\n",
                    "Automated Tests can have varying scopes and require less complex setup and teardown\n",
                    "Automated Testing requires complex Manual Setup and Tear Down\n",
                    "Manual Tests can have varying scopes and require less complex setup and teardown\n"
                ],
                "explanation": ""
            },
            "correct_response": [
                "a",
                "b"
            ],
            "section": "",
            "question_plain": "Choose correct statements about manual test vs Automated test",
            "related_lectures": []
        },
        {
            "_class": "assessment",
            "id": 68935236,
            "assessment_type": "multi-select",
            "prompt": {
                "question": "Choose correct statements about manual test vs Automated test",
                "answers": [
                    "Automated Testing has a high risk of missing out on something\n",
                    "Manual Testing has a high risk of missing out on something\n",
                    "Manual Tests have zero risk of missing out a pre-decided test\n",
                    "Automated Tests have zero risk of missing out a pre-decided test\n"
                ],
                "explanation": ""
            },
            "correct_response": [
                "b",
                "d"
            ],
            "section": "",
            "question_plain": "Choose correct statements about manual test vs Automated test",
            "related_lectures": []
        },
        {
            "_class": "assessment",
            "id": 68935238,
            "assessment_type": "multiple-choice",
            "prompt": {
                "question": "Choose correct Coding Process with Automated Unit Tests",
                "answers": [
                    "Write code, Write one or more test cases script, Auto-compile and run, If tests fail -&gt; make appropriate modifications\nIf tests pass -&gt; repeat for next method",
                    "Write code, Auto-compile and run, If tests fail -&gt; make appropriate modifications\nIf tests pass -&gt; repeat for next method",
                    "Write one or more test cases script, Auto-compile and run, If tests fail -&gt; make appropriate modifications\nIf tests pass -&gt; repeat for next method",
                    "Write code, Write one or more test cases script, If tests fail -&gt; make appropriate modifications"
                ],
                "explanation": ""
            },
            "correct_response": [
                "a"
            ],
            "section": "",
            "question_plain": "Choose correct Coding Process with Automated Unit Tests",
            "related_lectures": []
        },
        {
            "_class": "assessment",
            "id": 68935240,
            "assessment_type": "multiple-choice",
            "prompt": {
                "question": "Limitations when use Unit Testing based on UT cases?",
                "answers": [
                    "With big projects, number of test cases is so much",
                    "Project requirements  always change, developer do not have effort to update unit test case documents",
                    "Beside we can not use excel unit test case in some cases",
                    "All"
                ],
                "explanation": ""
            },
            "correct_response": [
                "d"
            ],
            "section": "",
            "question_plain": "Limitations when use Unit Testing based on UT cases?",
            "related_lectures": []
        },
        {
            "_class": "assessment",
            "id": 68935242,
            "assessment_type": "multiple-choice",
            "prompt": {
                "question": "Tools use to Automated Unit Tests",
                "answers": [
                    "JUnit",
                    "NUnit",
                    "VBUnit",
                    "All"
                ],
                "explanation": ""
            },
            "correct_response": [
                "d"
            ],
            "section": "",
            "question_plain": "Tools use to Automated Unit Tests",
            "related_lectures": []
        },
        {
            "_class": "assessment",
            "id": 68935244,
            "assessment_type": "multiple-choice",
            "prompt": {
                "question": "For example:\n\n1. Class\npublic class ClsInvoiceCalculation\n{\n     public int calculateCost(int intPerProductCost, int intNumberOfProducts)\n    {\n         return intPerProductCost * intNumberOfProducts;\n    }\n}\n\n2. Method in Nunit to test above Class.\n[TestFixture]\nPublic class ClsInvoiceUnitTest\n{\n   [Test]\n   public void TestInvoiceCalculation()\n   {\n ClsInvoiceCalculation obj = new ClsInvoiceCalculation();\n        int intTotalCost = obj.CalculateCost(10,20);\n        Assert.AreEqual(200, inTotalCost);\n   }\n}\n\nChoose correct result when run ClsInvoiceUnitTest with NUnit",
                "relatedLectureIds": "",
                "feedbacks": [
                    "",
                    "",
                    "",
                    ""
                ],
                "answers": [
                    "Expected: 200\nBut was: 200",
                    "Expected: 200\nBut was: 30",
                    "Expected: 200\nSuccess: 30",
                    "Expected: 200\nResult: 30"
                ]
            },
            "correct_response": [
                "a"
            ],
            "section": "",
            "question_plain": "For example:\n\n1. Class\npublic class ClsInvoiceCalculation\n{\n     public int calculateCost(int intPerProductCost, int intNumberOfProducts)\n    {\n         return intPerProductCost * intNumberOfProducts;\n    }\n}\n\n2. Method in Nunit to test above Class.\n[TestFixture]\nPublic class ClsInvoiceUnitTest\n{\n   [Test]\n   public void TestInvoiceCalculation()\n   {\n ClsInvoiceCalculation obj = new ClsInvoiceCalculation();\n        int intTotalCost = obj.CalculateCost(10,20);\n        Assert.AreEqual(200, inTotalCost);\n   }\n}\n\nChoose correct result when run ClsInvoiceUnitTest with NUnit",
            "related_lectures": []
        },
        {
            "_class": "assessment",
            "id": 68935246,
            "assessment_type": "multiple-choice",
            "prompt": {
                "question": "What is TestFixture Attribute used in NUnit?",
                "answers": [
                    "Used to indicate that a test methods",
                    "Used to execute that a class contains test methods",
                    "Used to indicate that a class contains test methods",
                    "Used to execute a test methods"
                ],
                "explanation": ""
            },
            "correct_response": [
                "c"
            ],
            "section": "",
            "question_plain": "What is TestFixture Attribute used in NUnit?",
            "related_lectures": []
        },
        {
            "_class": "assessment",
            "id": 68935248,
            "assessment_type": "multiple-choice",
            "prompt": {
                "question": "What is Test Attribute used in Nunit?",
                "answers": [
                    "Indicate that a class within a test fixture should be run by the Test Runner application",
                    "run that a class with Test Runner application",
                    "Execute a class within a test fixture with Test Runner application",
                    "Indicate that a method within a test fixture should be run by the Test Runner application"
                ],
                "explanation": ""
            },
            "correct_response": [
                "d"
            ],
            "section": "",
            "question_plain": "What is Test Attribute used in Nunit?",
            "related_lectures": []
        },
        {
            "_class": "assessment",
            "id": 68935250,
            "assessment_type": "multiple-choice",
            "prompt": {
                "question": "For code example:\nnamespace UnitTestingExamples\n{\n  using System;\n  using NUnit.Framework;\n\n  [Test]\n  public class SomeTests\n  {\n    [TestFixture]\n    public void TestOne()\n    {\n      // Do something...\n    }\n  }\n}\n\nAbove example TRUE or FALSE?",
                "answers": [
                    "TRUE",
                    "FAISE"
                ],
                "explanation": ""
            },
            "correct_response": [
                "b"
            ],
            "section": "",
            "question_plain": "For code example:\nnamespace UnitTestingExamples\n{\n  using System;\n  using NUnit.Framework;\n\n  [Test]\n  public class SomeTests\n  {\n    [TestFixture]\n    public void TestOne()\n    {\n      // Do something...\n    }\n  }\n}\n\nAbove example TRUE or FALSE?",
            "related_lectures": []
        },
        {
            "_class": "assessment",
            "id": 68935252,
            "assessment_type": "multiple-choice",
            "prompt": {
                "question": "For example:\nnamespace UnitTestingExamples\n{\n  using System;\n  using NUnit.Framework;\n\n  [TestFixture]\n  public class SomeTests\n  {\n    private int _someValue;\n\n    [SetUp]\n    public void Setup()\n    {\n      _someValue = 5;\n    }\n\n    [TearDown]\n    public void TearDown()\n    {\n      _someValue = 0;\n    }\n\n    [Test]\n    public void TestOne()\n    {\n      // Do something...\n    }\n  }\n}\n\nChoose a correct answer:",
                "relatedLectureIds": "",
                "feedbacks": [
                    "",
                    "",
                    ""
                ],
                "answers": [
                    "The method should be executed before SetUp or after Teardown every test method in the Test Fixture",
                    "The method should be executed after SetUp or before Teardown every test method in the Test Fixture",
                    "The method should be executed at the same time SetUp and Teardown every test method in the Test Fixture"
                ]
            },
            "correct_response": [
                "b"
            ],
            "section": "",
            "question_plain": "For example:\nnamespace UnitTestingExamples\n{\n  using System;\n  using NUnit.Framework;\n\n  [TestFixture]\n  public class SomeTests\n  {\n    private int _someValue;\n\n    [SetUp]\n    public void Setup()\n    {\n      _someValue = 5;\n    }\n\n    [TearDown]\n    public void TearDown()\n    {\n      _someValue = 0;\n    }\n\n    [Test]\n    public void TestOne()\n    {\n      // Do something...\n    }\n  }\n}\n\nChoose a correct answer:",
            "related_lectures": []
        },
        {
            "_class": "assessment",
            "id": 68935254,
            "assessment_type": "multiple-choice",
            "prompt": {
                "question": "ExpectedExceptionAttribute is used to specify that the execution of a test will throw an exception\nHow is ExpectedExceptionAttribute used?",
                "answers": [
                    "Specifying the Expected Exception Type",
                    "Specifying the Expected Message and a Custom Error Message",
                    "Handling the Exception in Code",
                    "All"
                ],
                "explanation": ""
            },
            "correct_response": [
                "d"
            ],
            "section": "",
            "question_plain": "ExpectedExceptionAttribute is used to specify that the execution of a test will throw an exception\nHow is ExpectedExceptionAttribute used?",
            "related_lectures": []
        },
        {
            "_class": "assessment",
            "id": 68935256,
            "assessment_type": "multiple-choice",
            "prompt": {
                "question": "Let list method types in Assert class",
                "answers": [
                    "Equality Asserts, Identity Asserts, Comparisons, Condition Tests, Utility Methods, StringAssert",
                    "Equality Asserts, Identity Asserts, Comparisons, Type Asserts, StringAssert",
                    "Equality Asserts, Identity Asserts, Comparisons, Type Asserts, Condition Tests, Utility Methods, StringAssert",
                    "Equality Asserts, Comparisons, Type Asserts, Condition Tests, Utility Methods, StringAssert"
                ],
                "explanation": ""
            },
            "correct_response": [
                "c"
            ],
            "section": "",
            "question_plain": "Let list method types in Assert class",
            "related_lectures": []
        },
        {
            "_class": "assessment",
            "id": 68935258,
            "assessment_type": "multiple-choice",
            "prompt": {
                "question": "There are two main ways of testing for exceptions: \n1. Assert.Throws&lt;Exception&gt;(()=&gt;MethodThatThrows()) \n2. [ExpectedException(typeof(Exception))]\nWhat is the main difference between the two ways above?",
                "answers": [
                    "The first allows you to test for more than one exception.\nThe second only allows you to test for one exception per test function.",
                    "The first allows to specify exact place of the code where exception is expected.\nThe second attribute makes test passed if exception occurs in any place in the test method.",
                    "All"
                ],
                "explanation": ""
            },
            "correct_response": [
                "c"
            ],
            "section": "",
            "question_plain": "There are two main ways of testing for exceptions: \n1. Assert.Throws&lt;Exception&gt;(()=&gt;MethodThatThrows()) \n2. [ExpectedException(typeof(Exception))]\nWhat is the main difference between the two ways above?",
            "related_lectures": []
        }
    ]
}